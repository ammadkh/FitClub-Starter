import React, { useState } from "react";
import classes from "./Testimonial.module.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const transition = { duration: 3, type: "spring" };
export default function Testimonial() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className={classes.testimonials} id="testimonials">
      <div className={classes.left}>
        <span>Testimonials</span>
        <span className="strokeText">What they</span>
        <span>say about us </span>
        <motion.span
          key={selected}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className={classes.name}>
            {testimonialsData[selected].name}{" "}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className={classes.right}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className={classes.arrows}>
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt=""
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
}
