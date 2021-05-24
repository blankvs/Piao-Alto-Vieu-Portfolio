import React from "react";

function SliderImage({ src }) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
  };
  return <img src={src} className="image__edit" style={imgStyles} alt="slide-img" />;
}

export default SliderImage;

//className="image__edit"