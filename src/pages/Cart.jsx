import { Container, Row, Col, Button } from "react-bootstrap";
import Crash from "../assets/img/crash.png";
import { useState } from "react";
import data from "../assets/json/products.json"

const Cart = () => {
  const [count, setCount] = useState(0);
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
        <Col className="header col-7 d-flex justify-content-center">
          <div className="col-12">
            <p>Review Your Order</p>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <hr style={{ height: "2px", backgroundColor: "black" }} />
              <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src={`/img/${item.image}`}
                  alt="product"
                  height={80}
                  style={{ width: "80px" }}
                />
                <div>
                  <h6 style={{ fontWeight: "900", color: "#613D2B" }}>
                    {item.title}
                  </h6>
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="lessQty"
                      onClick={() => {
                        if (count === 0) return;
                        setCount(count - 1);
                      }}
                    ></span>
                    <span
                      style={{
                        backgroundColor: "#F6E6DA",
                        padding: "0rem .75rem",
                        borderRadius: "5px",
                      }}
                    >
                      {count}
                    </span>
                    <span
                      className="addQty"
                      onClick={() => setCount((count) => count + 1)}
                    ></span>
                  </div>
                </div>
              </div>
              <div>
                <p>Rp.{item.price}</p>
                <div className="d-flex justify-content-end">
                  <img
                    src={Crash}
                    alt="crash"
                    height={20}
                    style={{ width: "17px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            </div>
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
              <p>300.900</p>
            </div>
            <div className="d-flex justify-content-between">
              <span>Qty</span>
              <span>{count}</span>
            </div>
            <hr style={{ height: "2px", backgroundColor: "black" }} />
            <div className="d-flex justify-content-between">
              <p>
                <b>Total</b>
              </p>
              <p>
                <b>{count * 300900}</b>
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
