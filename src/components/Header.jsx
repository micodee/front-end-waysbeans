import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Modal,
  Dropdown,
} from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Icon.png";
import Profile from "../assets/img/Profile.png";
import iconLogout from "../assets/img/logout.png"
import iconUser from "../assets/img/user.png"
import iconBeans from "../assets/img/biji.png"

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
          <img src={Logo} alt="icon" />
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
              <Form className="d-flex align-items-center gap-3">
                <Dropdown className="dropdown">
                  <Dropdown.Toggle className="profile">
                    <img
                      src={Profile}
                      alt="icon"
                      style={{
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/add" className="menu">
                      <img src={iconBeans} alt="user" />
                        Add Product
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <Link to="/list-product" className="menu">
                      <img src={iconBeans} alt="user" />
                        List Product
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => setIsLogin(false)} className="menu">
                      <img src={iconLogout} alt="logout" />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form>
            </>
          ) : IsLogin === "cust" ? (
            <>
              <Form className="d-flex align-items-center gap-3">
              <Link to="/cart">
                <img
                  src={`img/Cart.png`}
                  alt="icon"
                  style={{ width: "35px", height: "32px", cursor: "pointer" }}
                />
                </Link>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle className="profile">
                    <img
                      src={Profile}
                      alt="icon"
                      style={{
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/profile" className="menu">
                      <img src={iconUser} alt="user" />
                        Profile
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => setIsLogin(false)} className="menu">
                      <img src={iconLogout} alt="logout" />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form>
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
          )
          }
        </Navbar.Collapse>
      </Container>

      <Modal show={login} onHide={() => setLogin(false)} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#613D2B", fontWeight: "900" }}>
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
              />
            </Form.Group>
            <Button
              variant="secondary col-12 mb-3"
              onClick={() => [setLogin(false), setIsLogin(true)]}
              style={{ backgroundColor: "#613D2B" }}
            >
              Login
            </Button>
            <p style={{ textAlign: "center", fontSize: ".9rem" }}>
              Don't have an account ?{" "}
              <span
                onClick={() => [setLogin(false), setRegister(true)]}
                style={{ cursor: "pointer" }}
              >
                Klik <b>Here</b>
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={register}
        onHide={() => setRegister(false)}
        centered
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#613D2B", fontWeight: "900" }}>
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Full Name"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
              />
            </Form.Group>
            <Button
              variant="secondary col-12 mb-3"
              onClick={() => setRegister(false)}
              style={{ backgroundColor: "#613D2B" }}
            >
              Register
            </Button>
            <p style={{ textAlign: "center", fontSize: ".9rem" }}>
              Already have an account ?{" "}
              <span
                onClick={() => [setLogin(true), setRegister(false)]}
                style={{ cursor: "pointer" }}
              >
                Klik <b>Here</b>
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Header;
