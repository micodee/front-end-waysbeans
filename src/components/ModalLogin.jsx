import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalLogin = (rest) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    rest.forLogin(email, password);
  };

  return (
    <div>
      <Modal {...rest} centered size="sm">
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
                value={email}
                onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button
              variant="secondary col-12 mb-3"
              onClick={handleLogin}
              style={{ backgroundColor: "#613D2B" }}
            >
              Login
            </Button>
            <p style={{ textAlign: "center", fontSize: ".9rem" }}>
              Don't have an account ?{" "}
              <span
                onClick={rest.toRegister}
                style={{ cursor: "pointer" }}
              >
                Klik <b>Here</b>
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalLogin;