import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h2 className={style["footer-h2"]}>sunnyside</h2>
      <div className={style["footer__link-us"]}>
        {/* <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a> */}

        <ul className={style["footer__link-us"]}>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className={style["footer__socials"]}>
        <ul className={style["footer__social--ul"]}>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kikaccc29"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kristijan-karanfiloski-267747250/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
      <div className={style["footer__attribution"]}>
        Challenge by
        <span
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </span>
        . Coded by{" "}
        <a target="_blank" href="https://github.com/kikaccc29">
          Kristijan K
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
