import React from "react";
import imageHome from "../assets/imageHome.png";
import image1 from "../assets/carouselPhone1.png";
import image2 from "../assets/carouselPhone2.png";
import image3 from "../assets/carouselPhone3.png";
import image4 from "../assets/carouselPhone4.png";

import "../styles/_main.scss";

function BoxRight() {
  return (
    <div className="padding-left box-right">
      <img src={imageHome} />
    </div>
  );
}

export default BoxRight;

/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide widthContainerCarousel position-image"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="image1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="image2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="image3" />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="image4" />
          </div>
        </div>
      </div> */
