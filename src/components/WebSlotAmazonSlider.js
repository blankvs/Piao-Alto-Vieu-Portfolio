import React, { useState } from "react";
import "../css/Website.css";
import "../css/Slider.css";
import ImgComp from "./ImgComp";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";


function WebSlotAmazonSlider() {
  let amazonArray = [
      <ImgComp src={A1} />,
      <ImgComp src={A2} />,
      <ImgComp src={A3} />,
      <ImgComp src={A4} />,
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
