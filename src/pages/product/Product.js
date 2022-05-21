import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Product = () => {
  const location = useLocation();
  const product = location.state.product;
  return (
    <Container>
      <Row xs={1} md={1}>
        <Col >
        <br />
          <Table striped bordered hover size="xs">
            <thead>
              <tr>
                <th>Name</th>
                <th>Marka</th>
                <th>Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
