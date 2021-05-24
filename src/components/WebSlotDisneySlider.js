import React, { useState } from "react";
import "../css/Website.css";
import "../css/Slider.css";
import ImgComp from "./ImgComp";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import Disney1 from "../assets/Disney1.png";
import Disney2 from "../assets/Disney2.png";
import Disney3 from "../assets/Disney3.png";
import Disney4 from "../assets/Disney4.png";
import Disney5 from "../assets/Disney5.png";

function WebSlotDisneySlider() {
  let disneyArray = [
    <ImgComp src={Disney1} />,
    <ImgComp src={Disney2} />,
    <ImgComp src={Disney3} />,
    <ImgComp src={Disney4} />,
    <ImgComp src={Disney5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log(x);
    setX(x + 100);
    x === 0 ? setX(-100 * (disneyArray.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    console.log(x);
    x === -100 * (disneyArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div>
      <div className="slider-2">
        {disneyArray.map((item, index) => {
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

export default WebSlotDisneySlider;
