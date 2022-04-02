import PropTypes from 'prop-types'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";
import styles from './PostForm.module.scss';
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../../redux/categoriesReducer';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const categories = useSelector(getAllCategories);
  const [category, setCategory] = useState(props.category || '');

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  };

  return (
    <Form className="mx-auto" style={{ maxWidth: '50rem' }} onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          {...register("title", { required: true, minLength: 3 })}
          type="text" 
          placeholder="Enter post title"
          value={title}
          onChange={e => setTitle(e.target.value)}  
        />
        {errors?.title?.type === "required" && <small className="d-block form-text text-warning mt-2">This field is required</small>}
        {errors?.title?.type === "minLength" && <small className="d-block form-text text-warning mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })} 
          type="text"
          placeholder="Enter post author"
          value={author}
          onChange={e => setAuthor(e.target.value)} 
        />
        {errors?.author?.type === "required" && <small className="d-block form-text text-warning mt-2">This field is required</small>}
        {errors?.author?.type === "minLength" && <small className="d-block form-text text-warning mt-2">Author is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormPublished">
        <Form.Label>Published Date</Form.Label>
        <DatePicker className={styles.dataPicker} dateFormat="dd/MM/yyyy" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-warning mt-2">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormCategory">
        <Form.Label>Category</Form.Label>
        <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
          <option>Select category...</option>
          {categories.map(category => (
            <option key={category}>{category}</option>
            ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea" 
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)} 
        />
        {errors?.shortDescription?.type === "required" && <small className="d-block form-text text-warning mt-2">This field is required</small>}
        {errors?.shortDescription?.type === "minLength" && <small className="d-block form-text text-warning mt-2">Description is too short (min is 20)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormMainContent">
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme="snow" value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-warning mt-2">This field is required</small>}
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
  content: PropTypes.string,
  category: PropTypes.string
}

export default PostForm