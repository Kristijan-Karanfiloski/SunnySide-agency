import React from "react";
import style from "./Main.module.css";
import Testimonials from "./testemonials/Testimonials";
import Clipper from "./cliper/Clipper";

const Main = () => {
  return (
    <React.Fragment>
      <main>
        <section className={style.collage}>
          {/* 1 item */}
          <div className={style["grid-item"]}>
            {/*  */}
            <div className={style["main__text"]}>
              <h3 className={style["collage__h3"]}>Transform your brand</h3>
              <p className={style["collage__p--top--text"]}>
                We are a full-serivce creative agency specializing in helping
                brands grow fast.Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <p className={style["collage__p--bott--text"]}>LEARN MORE</p>
            </div>
            {/*  */}
          </div>
          {/* 2 item */}
          <div className={style["grid-item"]}></div>

          {/* 3 item */}
          <div className={style["grid-item"]}></div>

          {/* 4 item*/}
          <div className={style["grid-item"]}>
            {/*  */}
            <div className={style["main__text"]}>
              <h3 className={style["collage__h3"]}>Transform your brand</h3>
              <p className={style["collage__p--top--text"]}>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places
              </p>
              <p className={style["collage__p--bott--text"]}>LEARN MORE</p>
            </div>
            {/*  */}
          </div>
          {/* 5 item*/}
          <div className={style["grid-item"]}>
            <div className={style["img-text"]}>
              <h3 className={style["graphic_design-h3"]}>Graphic Design</h3>
              <p className={style["graphic_design-p"]}>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          {/* 6 item */}
          <div className={style["grid-item"]}>
            <div className={style["img-text"]}>
              <h3 className={style["photography-h3"]}>Photography</h3>
              <p className={style["photography-p"]}>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </section>
        <Testimonials />
        <Clipper />
      </main>
    </React.Fragment>
  );
};

export default Main;
