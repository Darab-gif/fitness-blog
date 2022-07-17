import Button from "../../Button/Button";
import style from "./editorpostcard.module.css";
import fitness5 from "../../../images/fitness5.jpg";
import fitness10 from "../../../images/fitness10.jpg";
import fitness6 from "../../../images/fitness6.jpg";

const info = [
  {
    image: fitness5,
    header: "THE BEST FOODS TO REFUEL WITH AFTER A HIIT WORKOUT",
    para: " With benefits such as weight loss, improved stamina and endurance, and stronger muscles, it&apos;s no surprise that HIIT workouts are so in demand.",
  },
  {
    image: fitness10,
    header: "THE BEST FOODS TO REFUEL WITH AFTER A HIIT WORKOUT",
    para: " With benefits such as weight loss, improved stamina and endurance, and stronger muscles, it&apos;s no surprise that HIIT workouts are so in demand.",
  },
  {
    image: fitness6,
    header: "THE BEST FOODS TO REFUEL WITH AFTER A HIIT WORKOUT",
    para: " With benefits such as weight loss, improved stamina and endurance, and stronger muscles, it&apos;s no surprise that HIIT workouts are so in demand.",
  },
];

const EditorPostCard = () => {
  return (
    <section className={style.container}>
      {info.map((item, index) => (
        <section>
          <div className={style.img_wrapper}>
            <img src={item.image} alt="post-img" />
          </div>

          <div className={style.details_container}>
            <h5>{item.header}</h5>

            <p>{item.para}</p>

            <Button text="Read More" />
          </div>
        </section>
      ))}
    </section>
  );
};

export default EditorPostCard;
