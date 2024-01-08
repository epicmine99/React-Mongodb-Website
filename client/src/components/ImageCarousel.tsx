import React from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings}>
      {/* Map your images here */}
      <div>
        <img src="/avatars-KHCJysyj9xSJNBhs-hTFe8g-t500x500.jpg" alt="Image 1" />
        <div className="text-overlay">Text for Image 1</div>
      </div>
      {/* Repeat for other images */}
    </Slider>
  );
}

export default ImageCarousel;