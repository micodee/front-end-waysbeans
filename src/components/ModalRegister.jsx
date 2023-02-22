import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalRegister = (rest) => {
  return (
    <div>
      <Modal {...rest} centered size="sm">
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
              onClick={rest.toRegister}
              style={{ backgroundColor: "#613D2B" }}
            >
              Register
            </Button>
            <p style={{ textAlign: "center", fontSize: ".9rem" }}>
              Already have an account ?{" "}
              <span
                onClick={rest.toLogin}
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

export default ModalRegister;
