import Carousel from 'react-bootstrap/Carousel';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '/src/assets/student records management/1.png';
import img2 from '/src/assets/student records management/2.png';
import img3 from '/src/assets/student records management/3.png';
import img4 from '/src/assets/student records management/4.png';
import img5 from '/src/assets/student records management/5.png';
import img6 from '/src/assets/student records management/6.png';
import img7 from '/src/assets/student records management/7.png';
import img8 from '/src/assets/student records management/8.png';


function StudentRecordsSlider() {
    return (
        <div id='carousel-div'>
            <button id='close-carousel'>x</button>
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
            </Carousel>
        </div>


    );
}

export default StudentRecordsSlider;