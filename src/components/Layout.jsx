import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Layout() {
  const { username, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="layout">
      <header>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>
          {' | '}
          <NavLink
            to="/posts"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Posts
          </NavLink>
          {' | '}
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About
          </NavLink>
          {' | '}
          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Dashboard
          </NavLink>
          {' | '}
          {isAuthenticated ? (
            <>
              <span>Hi, {username}</span>
              {' '}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2026 CommunityHub</p>
      </footer>
    </div>
  );
}

export default Layout;
