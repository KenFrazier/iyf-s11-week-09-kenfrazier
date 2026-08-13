import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { username } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {username}! This page is protected.</p>
    </div>
  );
}

export default Dashboard;
