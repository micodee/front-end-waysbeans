import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "../assets/json/products.json"

const ProductDetail = () => {
  const params = useParams();
  const id = parseInt(params.id);
  return (
   <Container className="detail col-9">
   <Row className="d-flex justify-content-between">
     <Col className="header col-4">
       <img src={`/img/${data[id].image}`} alt="" />
     </Col>
     <Col className="header col-7 d-flex justify-content-center align-items-center">
       <div className="col-10">
         <h3 className="mt-2 mb-0" style={{ fontWeight: "900", fontSize: "48px", color: "#613D2B" }}>{data[id].title}</h3>
         <p className="mt-0 mb-5" style={{ color: "#974A4A" }}>
           Stock : {data[id].stock}
         </p>
         <p style={{ textAlign: "justify" }}>
         Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.
         </p>
         <p style={{ textAlign: "right", fontWeight: "900", fontSize: "24px", color: "#974A4A", marginBottom: "3rem", marginTop: "2rem" }}>Rp.{data[id].price}</p>
         <Button className="col-12" style={{ backgroundColor: "#613D2B", color: "#fff", border: "none" }}>Add Cart</Button>{' '}
       </div>
     </Col>
   </Row>
   </Container>
  )
}

export default ProductDetail