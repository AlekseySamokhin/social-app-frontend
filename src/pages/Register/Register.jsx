import { Link } from 'react-router-dom';
import './register.scss';

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello Dude!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            eaque? Rerum, corporis nemo quas reiciendis nam inventore, sit
            deleniti enim tempore illum repellat ea id consectetur dignissimos,
            vitae blanditiis? Accusamus!
          </p>
          <span>Do you have a account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Repeat password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
