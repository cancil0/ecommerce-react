import Carousel from "react-bootstrap/Carousel";
import "./ShowCarousel.css"

/**
 * 
 * @param {string} img image src 
 * @param {string} header image header text 
 * @param {string} body image body text
 */
export const ShowCarousel = ({ datas }) => {
  return (
    <Carousel className="carousel">
      {
        datas?.map((data) => {
          return (
            <Carousel.Item key={data?.id}>
              <img
                className="d-block w-100"
                src={data?.img}
                alt="Slider images"
              />
              <Carousel.Caption>
                <h3>{data?.header}</h3>
                <p>{data?.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  );
};
