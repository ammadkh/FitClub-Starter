import React from "react";
import { programsData } from "../../data/programsData";
import classes from "./Programs.module.css";
import RightArrow from "../../assets/rightArrow.png";

export default function Programs() {
  return (
    <div className={classes.programs} id="programs">
      <div className={classes.header}>
        <span className="strokeText">Explore our</span>
        <span>Programs</span>
        <span className="strokeText">to shape you</span>
      </div>
      <div className={classes.categories}>
        {programsData.map((program) => (
          <div className={classes.category}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className={classes.joinNow}>
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
