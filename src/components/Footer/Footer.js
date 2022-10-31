import React from "react";
import classes from "./Footer.module.css";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div className={classes.container}>
      <hr></hr>
      <div className={classes.footer}>
        <div className={classes.socialLinks}>
          <img src={GitHub} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className={classes.logo}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={`blur ${classes.b1}`}></div>
      <div className={`blur ${classes.b2}`}></div>
    </div>
  );
}
