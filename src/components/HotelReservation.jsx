import Carousel from 'react-bootstrap/Carousel';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '/src/assets/hotel reservation/1.png';
import img2 from '/src/assets/hotel reservation/2.png';
import img3 from '/src/assets/hotel reservation/3.png';
import img4 from '/src/assets/hotel reservation/4.png';
import img5 from '/src/assets/hotel reservation/5.png';
import img6 from '/src/assets/hotel reservation/6.png';
import img7 from '/src/assets/hotel reservation/7.png';
import img8 from '/src/assets/hotel reservation/8.png';
import img9 from '/src/assets/hotel reservation/9.png';

function HotelReservation() {
    return (
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img className='d-block w-100' src={img1} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img4} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img5} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img6} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img7} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img8} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={img9} alt="" />
                </Carousel.Item>
            </Carousel>

    );
}

export default HotelReservation;