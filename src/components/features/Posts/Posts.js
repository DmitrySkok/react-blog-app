import { useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import { getAllPosts } from '../../../redux/postsRedux';
import PostCard from '../PostCard/PostCard';
import dateToStr from '../../../utils/dateToStr';


const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {posts.map(post=>(
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
  )
}

export default Posts