import Carousel from 'react-bootstrap/Carousel';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Codev from '/src/assets/codev.png';
import CvSUWeb from '/src/assets/CvSU-Website.png';
import HotelReserve from '/src/assets/hotel reservation/1.png';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={Codev} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={CvSUWeb} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={HotelReserve} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;