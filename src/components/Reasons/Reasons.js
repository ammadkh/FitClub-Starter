import React from "react";
import classes from "./Reasons.module.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

export default function Reasons() {
  return (
    <div className={classes.reasons} id="reasons">
      <div className={classes.leftSide}>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <div className={classes.rightSide}>
        <span>some reason</span>
        <div>
          <span className="strokeText">why </span>
          <span>choose us?</span>
        </div>
        <div className={classes.details}>
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER</span>
          </div>{" "}
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMEBER</span>
          </div>{" "}
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <div className={classes.partners}>
          <span>Our partners</span>
          <div className={classes.partner}>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
