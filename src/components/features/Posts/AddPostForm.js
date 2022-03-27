import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( addPost ( {title, author, publishedDate, shortDescription, content}));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate("/", { replace: true });
  }

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
        Add post
      </Button>
    </Form>
  );
}

export default AddPostForm;