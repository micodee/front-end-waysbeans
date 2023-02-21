import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/Icon.png";
import Cart from "../assets/img/Cart.png"
import Profile from "../assets/img/Profile.png"

const HeaderLogin = () => {
  const navigate = useNavigate();
  return (
    <Navbar className="nav shadow" expand="lg" fixed={"top"}>
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
          <img src={Logo} alt="icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex align-items-center gap-5">
            <img src={Cart} alt="icon" style={{ width: "35px", height: "32px", cursor: 'pointer' }} onClick={() => navigate("/login")}/>
            <img src={Profile} alt="icon" style={{ width: "60px", height: "60px", cursor: 'pointer' }} onClick={() => navigate("/register")}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderLogin;
