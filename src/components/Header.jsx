import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/img/Icon.png";

const Header = () => {
  const navigate = useNavigate()
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
          <Form className="d-flex gap-3">
            <Button className="login">Login</Button>
            <Button className="register">Register</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
