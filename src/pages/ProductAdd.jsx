import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ProductAdd = () => {
  return (
    <Container className="detail col-9">
      <Row className="d-flex justify-content-between">
        <Col className="header col-6 d-flex justify-content-center align-items-center">
          <div className="col-12">
            <h2 style={{ color: "#613D2B", fontWeight: "900", marginBottom: "1.5rem" }}>Add Product</h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  style={{
                    backgroundColor: "#613D2B40",
                    border: "2px solid #613D2B",
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Stock"
                  style={{
                    backgroundColor: "#613D2B40",
                    border: "2px solid #613D2B",
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Price"
                  style={{
                    backgroundColor: "#613D2B40",
                    border: "2px solid #613D2B",
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={4}
                  style={{
                    backgroundColor: "#613D2B40",
                    border: "2px solid #613D2B",
                    resize: "none",
                  }}
                  placeholder="Description Product"
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 col-6">
                <Form.Control type="file" style={{
                    backgroundColor: "#613D2B40",
                    border: "2px solid #613D2B"
                  }}
                  placeholder="Upload"/>
              </Form.Group>
              <div
                className="d-flex justify-content-center"
                style={{ marginTop: "3rem" }}
              >
                <Button
                  variant="secondary col-6"
                  style={{ backgroundColor: "#613D2B" }}
                >
                  Add Product
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col className="header col-4 d-flex justify-content-end">
          <img src={`/img/product4.png`} alt="product" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductAdd;
