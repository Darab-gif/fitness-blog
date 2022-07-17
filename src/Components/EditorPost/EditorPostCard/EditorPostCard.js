import img from "../../../images/fit.jfif";
import Button from "../../Button/Button";
import style from "./editorpostcard.module.css";
const EditorPostCard = () => {
  return (
    <section className={style.container}>
      <div className={style.img_wrapper}>
        <img src={img} alt="post-img" />
      </div>

      <div className={style.details_container}>
        <h5>THE BEST FOODS TO REFUEL WITH AFTER A HIIT WORKOUT</h5>

        <p>
          With benefits such as weight loss, improved stamina and endurance, and
          stronger muscles, it&apos;s no surprise that HIIT workouts are so in
          demand.
        </p>

        <Button text="Read More" />
      </div>
    </section>
  );
};

export default EditorPostCard;
