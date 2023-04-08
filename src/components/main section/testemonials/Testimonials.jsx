import style from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <article className={style["client-testimonials"]}>
      <h2 className={style["testimonial-header"]}>CLIENT TESTIMONIALS</h2>
      <div className={style["testimonial-wrapper"]}>
        <div className={style["testimonial-card"]}>
          <img src="./img/image-emily.jpg" alt="emily" />
          <p className={style["testimonial__p"]}>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit
          </p>
          <h2 className={style["testimonial__h2"]}>Emily R.</h2>
          <span className={style["testimonial__span"]}>Marketing Director</span>
        </div>
        <div className={style["testimonial-card"]}>
          <img src="./img/image-thomas.jpg" alt="thomas" />
          <p className={style["testimonial__p"]}>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit
          </p>
          <h2 className={style["testimonial__h2"]}>Thomas S.</h2>
          <span className={style["testimonial__span"]}>
            Chief Operating Office
          </span>
        </div>
        <div className={style["testimonial-card"]}>
          <img src="./img/image-jennie.jpg" alt="jennie" />
          <p className={style["testimonial__p"]}>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit
          </p>
          <h2 className={style["testimonial__h2"]}>Jennie F.</h2>
          <span className={style["testimonial__span"]}>Bussines Owner</span>
        </div>
      </div>
      {/*  */}
    </article>
  );
};

export default Testimonials;
