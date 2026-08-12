import { Outlet, NavLink, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
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
          <button onClick={handleLogout}>Logout</button>
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
