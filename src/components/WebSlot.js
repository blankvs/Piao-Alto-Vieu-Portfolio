import React from "react";
import "../css/WebSlot.css";
// import WebSlotDisneySlider from "./WebSlotDisneySlider";
// import WebSlotAmazonSlider from "./WebSlotAmazonSlider";


function WebSlot({
  title,
  techUsed,
  description,
  gitLink,
  webLink,
  a,
  b,
  view,
}) {
  return (
    <div className="slot__container">
      <div className="slot__outerTitleFormatter">
        <h1 className="slot__outerTitle">{title}</h1>
      </div>

      <div className="slot__innerContainer">
        <div className="slot__containerLeft">
          <h1 className="slot__innerTitle">{title}</h1>
          <div>{view}</div>
          <div className="slot__buttonWrap"></div>
        </div>

        <div className="slot__containerRight">
          <div className="slot__top">
            <h1 className="slot__topOne">TECHNOLOGY USED: </h1>
            <p className="slot__topTwo">{techUsed}</p>
          </div>
          <div className="slot__mid">
            <h1 className="slot__midOne">
              DESCRIPTION: <p className="slot__midTwo">{description}</p>
            </h1>
          </div>
          <div className="slot__bottom">
            <h1 className="slot__bottomTitles">
              GITHUB REPOSITORY:
              <a className="slot__botLink" href={a}>
                {gitLink}
              </a>
            </h1>
            <div className="slot__bottomOrganizer">
              <h1 className="slot__bottomTitles">
                WEBSITE LINK:
                <a className="slot__botLink" href={b}>
                  {webLink}
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebSlot;
