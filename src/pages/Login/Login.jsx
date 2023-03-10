import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';

import './login.scss';

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
   login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            eaque? Rerum, corporis nemo quas reiciendis nam inventore, sit
            deleniti enim tempore illum repellat ea id consectetur dignissimos,
            vitae blanditiis? Accusamus!
          </p>
          <span>Don't you have a account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
