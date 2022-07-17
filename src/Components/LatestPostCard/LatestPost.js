import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import style from "./latestpost.module.css";
import img from "../../images/fit.jfif";

const LatestPost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/1");
  };

  return (
    <section className={style.wrapper}>
      <div className={style.img_wrapper}>
        <img src={img} alt="post-img" />
      </div>

      <div className={style.details_wrapper}>
        <h5>How to Build Muscle as a Woman</h5>
        <p>
          I overcame an eating disorder, discovered a love for heavy strength
          training, and now I help women
        </p>

        <Button text="Read More" handleClick={handleClick} />
      </div>
    </section>
  );
};

export default LatestPost;
