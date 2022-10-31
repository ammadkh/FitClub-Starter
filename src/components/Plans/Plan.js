import React from "react";
import classes from "./Plan.module.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

export default function Plan() {
  return (
    <div className={classes.planContainer} id="plans">
      <div className={`blur ${classes.planBlur1}`}></div>
      <div className={`blur ${classes.planBlur2}`}></div>
      <div className={classes.header}>
        <span className="strokeText">Ready to Start</span>
        <span>Your journey</span>
        <span className="strokeText">Now With US</span>
      </div>
      <div className={classes.plans}>
        {plansData.map((plan, i) => (
          <div className={classes.plan} key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className={classes.features}>
              {plan.features.map((feature, index) => (
                <div className={classes.feature} key={index}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>{"See more benefits ->"}</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
