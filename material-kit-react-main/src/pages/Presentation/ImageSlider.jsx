import React, { useState } from "react";
import "./ImageSlider.css";

const sliderImages = [
  {
    url: "https://iitj.ac.in/plasma2022/images/iitjcampus.jpg",
  },
  {
    url: "https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_28072023.jpg",
  },
  {
    url: "https://iitj.ac.in/uploaded_docs/1_21072022.jpg",
  },
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? sliderImages.length - 1 : prevImage - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === sliderImages.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-overlay">
        <img src={sliderImages[currentImage].url} alt={`Image ${currentImage + 1}`} />
        <button className="prev" onClick={handlePrev}>Previous</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
