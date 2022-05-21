import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import './NavBar.css'

const LoginNavigationBar = () => {
  let navigator = useNavigate();

  const onClick = () => {
    navigator('/home')
  }

  return (
    <Navbar expand="lg" className="justify-content-center navbar-color">
      <Navbar.Brand className="login-navbar-brand" onClick={onClick}>E Commerce</Navbar.Brand>
    </Navbar>
  );
};

export default LoginNavigationBar;
