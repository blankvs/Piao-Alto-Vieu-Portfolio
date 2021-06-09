import React, { useState } from "react";
import "../css/Website.css";
import "../css/Slider.css";
import ImgComp from "./ImgComp";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import NNN1 from "../assets/NNN1.png";
import NNN2 from "../assets/NNN2.png";
import NNN3 from "../assets/NNN3.png";
import NNN4 from "../assets/NNN4.png";
import NNN5 from "../assets/NNN5.png";
import NNN6 from "../assets/NNN6.png";

function NoteNetWebSlider() {
  let nnArray = [
    <ImgComp loading="lazy" src={NNN5} />,
    <ImgComp loading="lazy" src={NNN6} />,
    <ImgComp loading="lazy" src={NNN1} />,
    <ImgComp loading="lazy" src={NNN2} />,
    <ImgComp loading="lazy" src={NNN3} />,
    <ImgComp loading="lazy" src={NNN4} />,
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
