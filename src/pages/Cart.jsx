import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../assets/json/products.json"
import ProductCart from "../components/ProductCart";

const Cart = () => {
  const [qty, setQty] = useState(0);
  const handleQty = (count) => {
    setQty(qty + count );
  };

  const [total, setTotal] = useState(0);
  const handleTotal = (count ,price) => {
    setTotal(total + count * price );
  };

  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    setDataProducts(data);
  }, []);
  const handleRemove = (id) => {
    const newData = dataProducts.filter((item) => item.id !== id);
    setDataProducts(newData);
  };

  return (
    <Container className="detail col-9">
      <Row className="d-flex justify-content-between">
        <h2
          style={{
            color: "#613D2B",
            fontWeight: "900",
            marginBottom: "1.5rem",
            padding: "0",
            fontSize: "24px",
          }}
        >
          My Cart
        </h2>
        <p className="m-0 p-0">Review Your Order</p>
        <Col className="header col-7 d-flex justify-content-center">
          <div className="col-12">
            {dataProducts.map((item) => {
              return (
                <ProductCart key={item.id} product={item} handleQty={handleQty} handleTotal={handleTotal} handleRemove={handleRemove}/>
              )
            })}

            <hr style={{ height: "2px", backgroundColor: "black" }} />
          </div>
        </Col>
        <Col className="header col-4 d-flex justify-content-end">
          <div className="col-12">
            <hr style={{ height: "2px", backgroundColor: "black" }} />
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>{total}</p>
            </div>
            <div className="d-flex justify-content-between">
              <span>Qty</span>
              <span>{qty}</span>
            </div>
            <hr style={{ height: "2px", backgroundColor: "black" }} />
            <div className="d-flex justify-content-between">
              <p>
                <b>Total</b>
              </p>
              <p>
                <b>{total}</b>
              </p>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <Button
                variant="secondary col-6"
                style={{ backgroundColor: "#613D2B" }}
              >
                Pay
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
