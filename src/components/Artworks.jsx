import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import va1 from '/src/assets/artworks/1.jpg';
import va2 from '/src/assets/artworks/2.jpg';
import va3 from '/src/assets/artworks/3.jpg';
import va4 from '/src/assets/artworks/4.jpg';
import va5 from '/src/assets/artworks/5.jpg';
import va6 from '/src/assets/artworks/6.jpg';
import va7 from '/src/assets/artworks/7.jpg';
import va8 from '/src/assets/artworks/8.jpg';
import va9 from '/src/assets/artworks/9.jpg';

function Artworks() {
    return (
        <Carousel indicators={false} fade interval={2000} className='aspect-square w-[90%] flex items-center justify-center overflow-hidden mt-3 md:w-[70%] xl:w-[45%]'>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va1} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va2} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va3} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va4} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va5} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va6} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va7} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va8} alt="" />
            </Carousel.Item>
            <Carousel.Item className="flex items-center justify-center h-full">
                <img className='max-h-full max-w-full object-cover' src={va9} alt="" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Artworks;
