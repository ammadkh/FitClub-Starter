import React from "react";
import classes from "./header.module.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

export const Header = () => {
  const isMobile = window.innerWidth <= 860 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo} />
      {!menuOpened && isMobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            alt=""
            style={{
              width: "1rem",
              height: "1rem",
            }}
          />
        </div>
      ) : (
        <ul className={classes.menu}>
          <li>
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why us?
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
