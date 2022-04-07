import { Card, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PostCard = (props) => {

  return (
    <Col key={props.id}>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="mb-2">
            <b>Author: </b><span className="text-muted">{props.author}</span>
          </Card.Text>
          <Card.Text className="mb-2">
            <b>Published: </b><span className="text-muted">{props.publishedDate}</span>
          </Card.Text>
          <Card.Text className="mb-2">
            <b>Category: </b><span className="text-muted">{props.category ? props.category : 'not selected'}</span>
          </Card.Text>
          <Card.Text>
            {props.shortDescription}
          </Card.Text>
          <Button as={NavLink} to={"/post/" + props.id} variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PostCard