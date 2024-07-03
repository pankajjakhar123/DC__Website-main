import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "./iitjcampus1.jpg";
const sliderImages = [
  {
    // url: "https://iitj.ac.in/plasma2022/images/iitjcampus.jpg",
    url : img1,
  },
  {
    url: "https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_28072023.jpg",
  },
  {
    url: "https://iitj.ac.in/uploaded_docs/1_21072022.jpg",
  },
];

const App = () => {
  return (
    <div className="slider-wrapper">
      <div className="slider-overlay"></div>
      <SimpleImageSlider
        width={'100%'}  
        height={'65vh'}
        images={sliderImages}
        showNavs={true}
      ></SimpleImageSlider>
       
    </div>
    
  );
};

export default App;
