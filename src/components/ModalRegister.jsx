import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalRegister = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleRegisterClick = () => {
    const userData = {
      email: email,
      password: password,
      fullName: fullName,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    props.toLogin();
    props.onHide();
  };

  const handleLoginClick = () => {
    props.toLogin();
    props.onHide();
    setEmail('')
    setPassword('')
    setFullName('')
  };

  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  return (
    <div>
      <Modal {...props} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#613D2B", fontWeight: "900" }}>
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
                required
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="fullName">
              <Form.Control
                type="text"
                placeholder="Full Name"
                style={{
                  backgroundColor: "#613D2B40",
                  border: "2px solid #613D2B",
                }}
                required
                value={fullName}
                onChange={handleFullNameChange}
              />
            </Form.Group>
            <Button
              variant="secondary col-12 mb-3"
              onClick={handleRegisterClick}
              style={{ backgroundColor: "#613D2B" }}
            >
              Register
            </Button>
            <p style={{ textAlign: "center", fontSize: ".9rem" }}>
              Already have an account ?{" "}
              <span onClick={handleLoginClick} style={{ cursor: "pointer" }}>
                Klik <b>Here</b>
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalRegister;
