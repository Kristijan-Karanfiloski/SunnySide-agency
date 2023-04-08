import { useState, useRef } from "react";
import style from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={style.header}>
      <nav className={style["header__nav"]}>
        <section className={style["header__title-section"]}>
          <p className={style["header__p"]}>sunnyside</p>

          <button onClick={handleMenuClick} className={style["menu-button"]}>
            <div className={style["menu-icon"]}></div>
          </button>
        </section>

        <ul
          className={`${style["header__ul"]} ${
            isMenuOpen ? style["active"] : style["inactive"]
          }`}
        >
          <li className={style["header__li"]}>About</li>
          <li className={style["header__li"]}>Services</li>
          <li className={style["header__li"]}>Projects</li>
          <li className={style["header__li"]}>CONTACT</li>
        </ul>
      </nav>
      <h1 className={style["header__h1"]}>We are creatives</h1>
      <section className={style["header__arrow"]}>
        <img src="./img/arrow.png" alt="down-arrow" />
      </section>
    </header>
  );
};

export default Header;
