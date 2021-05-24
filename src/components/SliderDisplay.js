import React, { useState } from "react";

import SliderImage from "./SliderImage";
import Disney1 from "../assets/Disney1.png";
import Disney2 from "../assets/Disney2.png";
import Disney3 from "../assets/Disney3.png";
import Disney4 from "../assets/Disney4.png";
import Disney5 from "../assets/Disney5.png";

const SliderDisplay = () => {
  let sliderArr = [
    <SliderImage src={Disney1} />,
    <SliderImage src={Disney2} />,
    <SliderImage src={Disney3} />,
    <SliderImage src={Disney4} />,
    <SliderImage src={Disney5} />,
  ];
  const [x, setX] = useState(0);

  const slideLeft = () => {
    console.log(x);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const slideRight = () => {
    console.log(x);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div>
      <div className="slider__container">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slider__slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="slider__buttonWrap">
        <button className="slider__buttonLeft" onClick={slideLeft}>
          LEFT
        </button>
        <button className="slider__buttonRight" onClick={slideRight}>
          RIGHT
        </button>
      </div>
    </div>
  );
};

export default SliderDisplay;
