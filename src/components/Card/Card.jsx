import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Card.css";
import CardImage from "../../assets/ProductImages/Image.jpg";
import { Link } from "react-router-dom";

const Cards = ({ model }) => {
  return (
    model?.map((product) => {
      return (
        <Col key={product.productId}>
          <Card
            as={Link}
            className="Card"
            to={`/products/${product.productId}`}
            state={{ product: product }}
          >
            <Card.Img
              variant="top"
              className="CardImage"
              as={Image}
              src={CardImage}
              fluid={true}
              alt="Card image"
            />
            <Card.Body>
              <Card.Text>{product.name}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <span>{product.productDetails[0]?.price ?? 0} ₺</span>
            </Card.Footer>
          </Card>
        </Col>
      );
    })
  );
};

export default Cards;
