import React, { useState } from "react";
import "../css/Website.css";
import "../css/Slider.css";
import ImgComp from "./ImgComp";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import VV1 from "../assets/VV1.png";
import VV2 from "../assets/VV2.png";
import VV3 from "../assets/VV3.png";
import VV4 from "../assets/VV4.png";


function NoteNetWebSlider() {
  let nnArray = [
    <ImgComp src={VV1} />,
    <ImgComp src={VV2} />,
    <ImgComp src={VV3} />,
    <ImgComp src={VV4} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log(x);
    setX(x + 100);
    x === 0 ? setX(-100 * (nnArray.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    console.log(x);
    x === -100 * (nnArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div>
      <div className="slider-2">
        {nnArray.map((item, index) => {
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

export default NoteNetWebSlider;
