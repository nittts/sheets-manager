import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <Link to="/">Back to home</Link>
      <Link to="/register">to register</Link>
    </div>
  );
}

export default Login;
