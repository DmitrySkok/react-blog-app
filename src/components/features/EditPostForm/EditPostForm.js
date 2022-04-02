import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';

const EditPostForm = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostsById(state, id));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  if(!postData) return <Navigate to="/" />
  return (
    <PostForm
      action={handleSubmit} 
      actionText="Edit post"
      title={postData.title}
      author={postData.author}
      content={postData.content}
      publishedDate={postData.publishedDate}
      shortDescription={postData.shortDescription}
      category={postData.category} 
    />
  )
}

export default EditPostForm