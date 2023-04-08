import style from "./Clipper.module.css";

const Clipper = () => {
  return (
    <article className={style.clipper}>
      <div className={style["img-item"]}></div>
      <div className={style["img-item"]}></div>
      <div className={style["img-item"]}></div>
      <div className={style["img-item"]}></div>
    </article>
  );
};

export default Clipper;
