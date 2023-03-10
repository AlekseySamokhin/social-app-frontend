import { Link } from 'react-router-dom';

import './login.scss';

const LoginPage = () => {
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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
