import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Hero.css';

const Hero = () => {
    const images = [
        'https://www.onlinemanipal.com/wp-content/uploads/2024/07/banner1-home-desktop.webp',
        'https://www.onlinemanipal.com/wp-content/uploads/2024/07/banner2-home-desktop.webp',
        'https://www.onlinemanipal.com/wp-content/uploads/2024/09/OM-Home-page-banner3-desktop.jpg',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="hero-section">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="hero-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;

