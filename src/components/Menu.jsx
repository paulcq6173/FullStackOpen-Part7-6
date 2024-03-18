import { Link } from 'react-router-dom';

const Menu = ({ user }) => {
  const padding = {
    paddingRight: 5,
  };

  return (
    <div className="Nav">
      <Link style={padding} to="/">
        home
      </Link>
      <Link style={padding} to="/create">
        create new
      </Link>
      <Link style={padding} to="/about">
        about
      </Link>
      <Link style={padding} to="/anecdotes">
        anecdotes
      </Link>
      {user ? (
        <em>{user} logged in</em>
      ) : (
        <Link style={padding} to="/login">
          login
        </Link>
      )}
    </div>
  );
};

export default Menu;
