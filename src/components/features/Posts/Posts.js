import { useSelector } from 'react-redux'
import { getAllPosts } from '../../../redux/postsRedux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row xs={1} md={2} lg={3} className="g-3">
        {posts.map(post => (
          <Col key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="mb-2">
                  <b>Author: </b><span className="text-muted">{post.author}</span>
                </Card.Text>
                <Card.Text className="mb-2">
                  <b>Published: </b><span className="text-muted">{post.publishedDate}</span>
                </Card.Text>
                <Card.Text>
                  {post.shortDescription}
                </Card.Text>
                <Button as={NavLink} to={"/post/" + post.id} variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

export default Posts