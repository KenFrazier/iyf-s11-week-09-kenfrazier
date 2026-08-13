import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '../components/Tabs';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

function UserProfilePage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAll = async () => {
    try {
      setLoading(true);
      setError(null);

      const [userRes, postsRes, todosRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      ]);

      if (!userRes.ok) throw new Error('Failed to load user');

      const userData = await userRes.json();
      const postsData = await postsRes.json();
      const todosData = await todosRes.json();

      setUser(userData);
      setPosts(postsData);
      setTodos(todosData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [userId]);

  if (loading) return <LoadingSpinner text="Loading profile..." />;
  if (error) return <ErrorMessage message={error} onRetry={fetchAll} />;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <Tabs
        tabs={[
          {
            label: 'Info',
            content: (
              <div>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
              </div>
            )
          },
          {
            label: `Posts (${posts.length})`,
            content: (
              <ul>
                {posts.map(post => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            )
          },
          {
            label: `Todos (${todos.length})`,
            content: (
              <ul>
                {todos.map(todo => (
                  <li key={todo.id}>
                    {todo.completed ? '✅' : '⬜'} {todo.title}
                  </li>
                ))}
              </ul>
            )
          }
        ]}
      />
    </div>
  );
}

export default UserProfilePage;
