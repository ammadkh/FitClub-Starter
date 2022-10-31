import React from "react";
import classes from "./Join.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Join() {
  const emailRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wg4s74",
        "template_l3lz7os",
        emailRef.current,
        "ccUce_meObL7_VYdO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.join}>
      <div className={classes.left}>
        <hr></hr>
        <div>
          <span className="strokeText">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="strokeText">WITH US</span>
        </div>
      </div>
      <div className={classes.right}>
        <form
          ref={emailRef}
          className={classes.emailContainer}
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter you emai l address"
          />
          <button className={`btn ${classes["btn-j"]}`}>Join Now</button>
        </form>
      </div>
    </div>
  );
}
