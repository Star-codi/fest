// src/components/Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgImage1 from '../bg1.jpg'; // Replace with the actual image file names and extensions
import bgImage2 from '../bg2.jpg';
import bgImage3 from '../bg3.jpg';
import bgImage4 from '../bg4.jpg';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <Slider {...sliderSettings}>
      <div className="slide">
        <div className="overlay-text">
          <h1 className="ignite-text">IGNITE</h1>
          <h2>February 4, 5</h2>
        </div>
        <img src={bgImage1} alt="Background 1" className="slider-image" />
      </div>
      <div className="slide">
        <div className="overlay-text">
          <h1 className="ignite-text">IGNITE</h1>
          <h2>February 4, 5</h2>
        </div>
        <img src={bgImage2} alt="Background 2" className="slider-image" />
      </div>
      <div className="slide">
        <div className="overlay-text">
          <h1 className="ignite-text">IGNITE</h1>
          <h2>February 4, 5</h2>
        </div>
        <img src={bgImage3} alt="Background 3" className="slider-image" />
      </div>
      <div className="slide">
        <div className="overlay-text">
          <h1 className="ignite-text">IGNITE</h1>
          <h2>February 4, 5</h2>
        </div>
        <img src={bgImage4} alt="Background 4" className="slider-image" />
      </div>
    </Slider>
  );
};

export default Home;
