import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPostsByCategory } from '../../../redux/postsRedux';
import { Row } from 'react-bootstrap';
import dateToStr from '../../../utils/dateToStr';
import PostCard from '../../features/PostCard/PostCard';

const SingleCategory = () => {
  const { categoryName } = useParams();
  const categoryData = useSelector(state => getPostsByCategory(state, categoryName));
  if(!categoryData || categoryData.length === 0) return <h1 className='text-center'>No posts with this category</h1>
  return (
    <>
      <h1 className='text-center'>{categoryData.category}</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {categoryData.map(post => (
          <PostCard 
            key={post.id}
            id = {post.id}
            title = {post.title}
            author = {post.author}
            publishedDate = {dateToStr(post.publishedDate)}
            category = {post.category}
            shortDescription = {post.shortDescription}
          />
        ))}
      </Row>
    </>
  )
}

export default SingleCategory