import PropTypes from 'prop-types'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form className="mx-auto" style={{ maxWidth: '50rem' }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter post title"
          value={title}
          onChange={e => setTitle(e.target.value)}  
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Enter post author"
          value={author}
          onChange={e => setAuthor(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormPublished">
        <Form.Label>Published Date</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="DD-MM-YYYY" 
          value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          as="textarea" 
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormMainContent">
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: '100px' }}
            value={content}
            onChange={e => setContent(e.target.value)} 
          />
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  )
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string
}

export default PostForm