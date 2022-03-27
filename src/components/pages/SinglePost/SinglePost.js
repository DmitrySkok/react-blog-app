import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsById } from '../../../redux/postsRedux';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { removePost } from '../../../redux/postsRedux';
import { useState } from 'react';

const SinglePost = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostsById(state, id));
  console.log(postData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removePost(postData.id));
  }

  if(!postData) return <Navigate to="/"/>
  return (
    <>
      <Row className="align-items-center mx-auto" style={{ maxWidth: '40rem' }}>
        <Row>
          <Col >
            <h2>{postData.title}</h2>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Button key={postData.id} as={Link} to={"/post/edit/" + postData.id} variant="outline-info" className="me-1">Edit</Button>
            <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
          </Col>
        </Row>
        <Col key={postData.id}>
          <b>Author: </b><span className="text-muted">{postData.author}</span>
          <br/>
          <b>Published: </b><span className="text-muted">{postData.publishedDate}</span>
          <br/>
          <br/>
          <p>{postData.content}</p>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app. <br/> Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" onClick={() => { handleClose(); remove()}}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SinglePost;