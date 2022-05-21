import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import Cards from "../../components/Card/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { ShowCarousel } from "../../components/Carousel/ShowCarousel";
import FirstImg from "../../assets/CarouselImages/first.jpg";
import SecontImg from "../../assets/CarouselImages/second.png";
import ThirdImg from "../../assets/CarouselImages/third.jpg";

const Home = () => {
  const carouselModel = [
    { img: FirstImg, header: "First Image", body: "Kampanya", id: 1 },
    { img: SecontImg, header: "Second Image", body: "Kampanya", id: 2 },
    { img: ThirdImg, header: "Third Image", body: "Kampanya", id: 3 },
  ];
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.categoryId) {
      let productService = new ProductService();
      productService.getCategoryProducts(params.categoryId).then((x) => {
        if (!x.isFailed) {
          setProducts(x.result);
        }
      });
    }
  }, [params.categoryId]);

  return (
    <Container className="home">
      <br />
      <Row>
        <Col className="col-md-2"></Col>
        <Col className="col-md-8">
          <ShowCarousel datas={carouselModel} />
        </Col>
        <Col className="col-md-2"></Col>
      </Row>
      {products.length > 0 && (
        <>
          <br />
          <Row>
            <Col className="col-md-12 ">
              <Row className="col-md-4">
                <Cards model={products} />
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Home;
