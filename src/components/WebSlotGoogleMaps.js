import React, { useState } from "react";
import "../css/Website.css";
import "../css/Slider.css";
import ImgComp from "./ImgComp";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import GM1 from "../assets/GM1.png";
import GM2 from "../assets/GM2.png";
import GM3 from "../assets/GM3.png";
import GM4 from "../assets/GM4.png";
import GM5 from "../assets/GM5.png";



function WebSlotAmazonSlider() {
  let amazonArray = [
      <ImgComp src={GM1} />,
      <ImgComp src={GM2} />,
      <ImgComp src={GM3} />,
      <ImgComp src={GM4} />,
      <ImgComp src={GM5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log(x);
    setX(x + 100);
    x === 0 ? setX(-100 * (amazonArray.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    console.log(x);
    x === -100 * (amazonArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div>
      <div className="slider-2">
        {amazonArray.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateY(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="slider__buttonWrap">
        <FaArrowAltCircleLeft className="slider__buttonLeft" onClick={goLeft} />
        <FaArrowAltCircleRight
          className="slider__buttonRight"
          onClick={goRight}
        />
      </div>
    </div>
  );
}

export default WebSlotAmazonSlider;
