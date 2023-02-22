import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalLogin, ModalRegister, UserAdmin, UserCust } from "./Components";

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [IsLogin, setIsLogin] = useState(false);
  return (
    <Navbar className="nav shadow" expand="lg" fixed={"top"}>
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={`img/nav-logo.png`} alt="icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {IsLogin === "admin" ? (
            <>
              <UserAdmin logout={() => setIsLogin(false)} />
            </>
          ) : IsLogin === "cust" ? (
            <>
              <UserCust logout={() => setIsLogin(false)} />
            </>
          ) : (
            <>
              <Form className="d-flex gap-3">
                <Button className="login" onClick={() => setLogin(true)}>
                  Login
                </Button>
                <Button className="register" onClick={() => setRegister(true)}>
                  Register
                </Button>
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>

      <ModalLogin
        show={login}
        onHide={() => setLogin(false)}
        toRegister={() => [setLogin(false), setRegister(true)]}
        toLogin={() => [setLogin(false), setIsLogin(true)]}
      />

      <ModalRegister
        show={register}
        onHide={() => setRegister(false)}
        toLogin={() => [setRegister(false), setLogin(true)]}
        toRegister={() => setRegister(false)}
      />
    </Navbar>
  );
};

export default Header;
