import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ProductAdd = (props) => {
  const { addProductSubmit,addProductOnChange,addProductValue } = props
  return (
    <Container className="detail col-9 productadd">
      <Row className="d-flex justify-content-between">
        <Col className="header col-6 d-flex justify-content-center align-items-center">
          <div className="col-12">
            <h2 style={{ color: "#613D2B", fontWeight: "900", marginBottom: "1.5rem" }}>Add Product</h2>
            <Form onSubmit={addProductSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" onChange={addProductOnChange} value={addProductValue.name} placeholder="Name" className="formInputProduct"/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" onChange={addProductOnChange} value={addProductValue.stock} placeholder="Stock" className="formInputProduct"/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Control type="text" onChange={addProductOnChange} value={addProductValue.price} placeholder="Price" className="formInputProduct"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" onChange={addProductOnChange} rows={4} value={addProductValue.description} placeholder="Description Product" className="formInputTextarea"/>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 col-6">
                <Form.Control type="file" style={{backgroundColor: "#613D2B40", border: "2px solid #613D2B"}} placeholder="Upload"/>
              </Form.Group>
              <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
                <Button variant="secondary col-6" type="submit" style={{ backgroundColor: "#613D2B" }}>
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
