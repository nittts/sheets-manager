import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      Register
      <Link to="/">Back to home</Link>
      <Link to="/login">to login</Link>
    </div>
  );
}

export default Register;
