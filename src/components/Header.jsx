import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalLogin, ModalRegister, UserAdmin, UserCust } from "./Components";

const Header = () => {
  const navigate = useNavigate();
  const [showLogin, setModalLogin] = useState(false);
  const [showRegister, setModalRegister] = useState(false);
  const [IsUser, setIsUser] = useState(false);
  const [IsAdmin, setIsAdmin] = useState(false);
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
          {IsAdmin ? (
            <>
              <UserAdmin logout={() => [setIsAdmin(false), navigate("/")]} />
            </>
          ) : IsUser ? (
            <>
              <UserCust logout={() => [setIsUser(false), navigate("/")]}/>
            </>
          ) : (
            <>
              <Form className="d-flex gap-3">
                <Button className="login" onClick={() => setModalLogin(true)}>
                  Login
                </Button>
                <Button
                  className="register"
                  onClick={() => setModalRegister(true)}
                >
                  Register
                </Button>
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>

      <ModalLogin
        show={showLogin}
        onHide={() => setModalLogin(false)}
        toRegister={() => [setModalLogin(false), setModalRegister(true)]}
        setIsAdmin={setIsAdmin}
        linkToUser={() => navigate("/profile")}
        linkToAdmin={() => navigate("/list-product")}
        setIsUser={setIsUser}
      />

      <ModalRegister
        show={showRegister}
        onHide={() => setModalRegister(false)}
        toLogin={() => [setModalRegister(false), setModalLogin(true)]}
        toRegister={() => setModalRegister(false)}
      />
    </Navbar>
  );
};

export default Header;
