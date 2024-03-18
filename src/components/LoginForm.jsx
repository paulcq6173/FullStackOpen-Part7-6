import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    props.onLogin('Albert Wesker');
    navigate('/');
  };

  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={handleLogin}>
        <li>
          username:
          <input name="input-username" />
        </li>
        <li>
          password:
          <input name="input-password" />
        </li>
        <li>
          confirm:
          <input name="input-pwConfirm" placeholder="input password again" />
        </li>
        <button className="btn-normal" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
