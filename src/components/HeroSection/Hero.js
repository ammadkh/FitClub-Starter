import React from "react";
import classes from "./Hero.module.css";
import { Header } from "../Header/Header";
import Heart from "../../assets/heart.png";
import HeroImg from "../../assets/hero_image.png";
import HeroBg from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { duration: 2, type: "tween" };
  const isMobile = window.innerWidth <= 850 ? true : false;
  return (
    <div className={classes.hero} id="home">
      <div className={`blur ${classes.blurHero}`}></div>
      <div className={classes["left-side"]}>
        <Header />
        <div className={classes.bestAd}>
          <motion.div
            initial={{ x: isMobile ? 170 : 230 }}
            whileInView={{ x: 0 }}
            transition={transition}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className={classes.heroText}>
          <div>
            <span className="strokeText">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body
            </span>
          </div>
        </div>
        <div className={classes.figures}>
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix={"+"} />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay={4} preFix={"+"} />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={100} start={30} delay={4} preFix={"+"} />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className={classes.heroBtn}>
          <button className={classes.btn}>Get Started</button>
          <button className={classes.btn}>Learn More</button>
        </div>
      </div>
      <div className={classes["right-side"]}>
        <button className={classes.btn}>Join Now</button>
        <motion.div
          initial={{ right: "-4rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...transition, type: "spring" }}
          className={classes.heartRate}
        >
          <img src={Heart} alt="heart-rate" />
          <span>Heart Rate</span>
          <span>116 Bpm</span>
        </motion.div>
        <img src={HeroImg} alt="" />
        <motion.img
          initial={{ right: "10rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={HeroBg}
          alt=""
        />
        <motion.div
          className={classes.calories}
          initial={{ right: "40rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
