import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../assets/img/header.png";
import Logo from "../assets/img/icon2.png";
import Waves from "../assets/img/Waves.png";
import P1 from "../assets/img/product4.png";
import P2 from "../assets/img/product1.png";
import P3 from "../assets/img/product2.png";
import P4 from "../assets/img/product3.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: P1,
    title: "RWANDA Beans",
    price: "299.900",
    stock: "200"
  },
  {
    image: P2,
    title: "ETHIOPIA Beans",
    price: "109.900",
    stock: "99"
  },
  {
    image: P3,
    title: "GUETEMALA Beans",
    price: "300.900",
    stock: "500"
  },
  {
    image: P4,
    title: "NICARAGUA Beans",
    price: "250.900",
    stock: "352"
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="home col-9">
      <Row>
        <Col className="header col-11">
          <div className="col-6">
            <img src={Logo} alt="logo" className="logo" />
            <h3 className="mt-2">BEST QUALITY COFFEE BEANS</h3>
            <p className="mt-4">
              Quality freshly roasted coffee made just for you. Pour, brew and
              enjoy
            </p>
          </div>
          <div>
            <img src={Waves} alt="waves" className="waves" />
          </div>
        </Col>
      </Row>
      <img src={Header} alt="header" className="img" />
      <Row
        style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
      >
        {data.map(({ image, title, price, stock }) => {
          return (
            <Card style={{ padding: "0", cursor: 'pointer' }} onClick={() => navigate("/detail")}>
              <Card.Img variant="top" src={image} />
              <Card.Body style={{ backgroundColor: "#F6E6DA" }}>
                <Card.Title style={{ color: "#613D2B", fontWeight: "900", fontSize: "18px" }}>{title}</Card.Title>
                <Card.Text>
                  <p style={{ margin: "0", padding: "0", color: "#974A4A", fontSize: "14px" }}>Rp.{price}</p>
                  <p style={{ margin: "0", padding: "0", color: "#974A4A", fontSize: "14px" }}>Stock : {stock}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
