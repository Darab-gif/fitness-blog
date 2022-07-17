import style from "./bigcard.module.css";
import img from "../../../images/fitness.jfif";
import Button from "../../Button/Button";
const BigCard = () => {
  return (
    <section className={style.big_wrapper}>
      <div className={style.big_details}>
        <div>
          <h1>4 WEEK</h1>
          <h4>WORKOUT PLAN</h4>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          fringilla, lacus eget consequat tincidunt, lectus ex bibendum libero,
          eget iaculis quam arcu quis mauris. Donec ex neque, egestas in
          faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas
        </p>
        <Button text={"Read More"} />
      </div>

      <div className={style.big_imgWrapper}>
        <img src={img} alt="featured" />
      </div>
    </section>
  );
};

export default BigCard;
