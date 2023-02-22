import { Container, Row, Col, Table, Button } from "react-bootstrap";

const ListProduct = () => {
  return (
    <Container className="detail col-9">
      <Row className="d-flex justify-content-between">
        <Col className="header col-12">
          <h2
            style={{
              color: "#613D2B",
              fontWeight: "900",
              marginBottom: "2rem",
              padding: "0",
              fontSize: "24px",
            }}
          >
            List Product
          </h2>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th className="text-center">Image</th>
                <th className="text-center">Name</th>
                <th className="text-center">Stock</th>
                <th className="text-center">Price</th>
                <th className="text-center">Description</th>
                <th className="text-center" width={100}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ verticalAlign: "middle" }}>1</td>
                <td></td>
                <td style={{ verticalAlign: "middle" }}>RWANDA Beans</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>120</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>150000</td>
                <td></td>
                <td className="d-flex justify-content-evenly align-content-center gap-2"><Button variant="danger">Delete</Button><Button variant="success">Update</Button></td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "middle" }}>2</td>
                <td></td>
                <td style={{ verticalAlign: "middle" }}>ETHIOPIA Beans</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>11</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>450000</td>
                <td></td>
                <td className="d-flex justify-content-evenly align-content-center gap-2"><Button variant="danger">Delete</Button><Button variant="success">Update</Button></td>
              </tr>
              <tr>
              <td style={{ verticalAlign: "middle" }}>3</td>
                <td></td>
                <td style={{ verticalAlign: "middle" }}>GUETEMALA Beans</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>23</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>230000</td>
                <td></td>
                <td className="d-flex justify-content-evenly align-content-center gap-2"><Button variant="danger">Delete</Button><Button variant="success">Update</Button></td>
              </tr>
              <tr>
              <td style={{ verticalAlign: "middle" }}>4</td>
                <td></td>
                <td style={{ verticalAlign: "middle" }}>NICARAGUA Beans</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>46</td>
                <td className="text-center" style={{ verticalAlign: "middle" }}>220000</td>
                <td></td>
                <td className="d-flex justify-content-evenly align-content-center gap-2"><Button variant="danger">Delete</Button><Button variant="success">Update</Button></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ListProduct;
