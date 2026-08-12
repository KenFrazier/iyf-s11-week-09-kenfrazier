import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/issues.json');
      if (!response.ok) {
        throw new Error('Failed to load posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (error) return <ErrorMessage message={error} onRetry={fetchPosts} />;
  if (posts.length === 0) return <p>No posts found.</p>;

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
