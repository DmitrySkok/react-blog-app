import { Button, Col, Row } from 'react-bootstrap';
import Posts from '../../features/Posts/Posts';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return(
    <>
      <Row className="align-items-center mb-2">
        <Col>
          <h2 className='mb-0'>All Posts</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button as={NavLink} to="/post/add" variant="info" className="text-light">Add Post</Button>
        </Col>
      </Row>
      <Posts />
    </>
  );
}

export default Home;