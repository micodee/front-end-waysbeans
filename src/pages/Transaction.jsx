import { Container, Row, Col } from "react-bootstrap";
import ImgProfile from "../assets/img/profile1.png";
import ImgP1 from "../assets/img/product1.png";
import ImgP2 from "../assets/img/product2.png";
import ImgP3 from "../assets/img/product3.png";
import ImgWays from "../assets/img/icon3.png";
import ImgQr from "../assets/img/qrcode.png";

const transaction = [
 {
   image: ImgP1,
   title: "RWANDA Beans",
   price: 299900,
   qty: 2,
   status: "Success" 
 },
 {
   image: ImgP2,
   title: "GUETEMALA Beans",
   price: 240900,
   qty: 4,
   status: "Waiting Approve" 
 },
 {
   image: ImgP3,
   title: "ETHOPIA Beans",
   price: 400900,
   qty: 3,
   status: "Complete" 
 },
];

const Transaction = () => {
  return (
    <Container className="detail col-9">
      <Row className="d-flex justify-content-between">
        <Col className="header col-6">
          <h2
            style={{
              color: "#613D2B",
              fontWeight: "900",
              marginBottom: "1.5rem",
              padding: "0",
              fontSize: "24px",
            }}
          >
            My Profile
          </h2>
          <div className="d-flex">
            <img
              src={ImgProfile}
              alt="profle"
              style={{ width: "180px", marginRight: "1.5rem" }}
            />
            <div>
              <p className="mb-1">
                <b>Full Name</b>
              </p>
              <span>Marcel Ganteng</span>
              <p className="mb-1 mt-4">
                <b>Email</b>
              </p>
              <span>tommymh21@gmail.com</span>
            </div>
          </div>
        </Col>
        <Col className="header col-6">
          <h2
            style={{
              color: "#613D2B",
              fontWeight: "900",
              marginBottom: "1.5rem",
              padding: "0",
              fontSize: "24px",
            }}
          >
            My Transaction
          </h2>
          <div className="d-flex flex-column gap-2">
          {transaction.map(({ id, image, title, price, qty, status}) => {
           let style;
           if (status === "Success") {
             style = {
               backgroundColor: "#e4e8c6",
               width: "112px",
               height: "19px",
               fontSize: "10px",
               color: "#78A85A"
             };
           } else if (status === "Waiting Approve") {
             style = {
               backgroundColor: "#f7dec4",
               width: "112px",
               height: "19px",
               fontSize: "10px",
               color: "#FF9900"
             };
           } else if (status === "Complete") {
             style = {
               backgroundColor: "#613d2b",
               width: "112px",
               height: "19px",
               fontSize: "10px",
               color: "#FFF"
             };
           }
           return(
            <div key={id} style={{ backgroundColor: "#F6E6DA", padding: "1rem 1.5rem" }} className="d-flex justify-content-between gap-3">
           <div style={{ display: "flex", gap: "1rem" }}>
            <img src={image} alt="product" height={120} style={{ width: "80px" }} />
            <div className="d-flex justify-content-center flex-column">
             <p className="mb-1" style={{ fontSize: "14px" }}><b>{title}</b></p>
             <span style={{ fontSize: "9px" }}><b>Saturday</b>, 5 March 2020</span>
             <p className="mb-1" style={{ fontSize: "10px", fontWeight: "400", marginTop: "1rem" }}>Price : Rp.{price}</p>
             <p className="mb-1" style={{ fontSize: "10px", fontWeight: "400", }}>Qty : {qty}</p>
             <p className="mb-1" style={{ fontSize: "10px", fontWeight: "400", }}><b>Sub Total : {price*qty}</b></p>
            </div>
           </div>
           <div className="d-flex justify-content-center align-items-center flex-column col-3">
           <img src={ImgWays} alt="product" height={22} style={{ width: "73px" }} />
           <img src={ImgQr} alt="product" height={50} style={{ width: "50px", margin: ".7rem" }} />
           <div style={style} className="d-flex justify-content-center align-items-center">{status}</div>
           </div>
          </div>
           )
          } )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Transaction;
