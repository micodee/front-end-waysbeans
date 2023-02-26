import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalLogin = (props) => {
  const {showModal, hideModal, toRegister} = props
  // agar submit tidak merefresh
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      // kondisi login admin
      if (email === "admin@gmail.com" && password === "admin") {
        hideModal();
        props.setIsAdmin(true);
        props.linkToAdmin()
        setEmail("")
        setPassword("")
      } else {
        setErrorMessage("Invalid email or password");
      }
    } else {
      // kondisi login user
      if (email === "user@gmail.com" && password === "user") {
        hideModal();
        props.setIsUser(true);
        props.linkToUser()
        setEmail("")
        setPassword("")
      } else {
        setErrorMessage("Invalid email or password");
      }
    }
  };

  return (
    <div>
      <Modal show={showModal} onHide={hideModal} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#613D2B", fontWeight: "900" }}>
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" className="formInput" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control type="password" placeholder="Password" className="formInput" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <Button variant="secondary col-12 mb-3" onClick={handleLogin} type="submit" style={{ backgroundColor: "#613D2B" }}>
              Login
            </Button>
            {errorMessage && (
              <p style={{ color: "red", textAlign: "center" }}>
                {errorMessage}
              </p>
            )}
            <p style={{ textAlign: "center", fontSize: ".9rem" }}>
              Don't have an account ?{" "}
              <span
                onClick={toRegister}
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