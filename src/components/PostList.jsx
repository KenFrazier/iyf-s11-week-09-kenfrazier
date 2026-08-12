import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PostList() {
  const { data: posts, loading, error } = useFetch('/issues.json');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="post-list">
      {posts.map(post => (
        <article key={post.id} className="post-card">
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body.slice(0, 100)}...</p>
        </article>
      ))}
    </div>
  );
}

export default PostList;
