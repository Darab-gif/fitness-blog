//import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import style from "./latestpost.module.css";
import fitness1 from "../../../images/fitness1.jpg";
import fitness7 from "../../../images/fitness7.jpg";
import fitness9 from "../../../images/fitness9.jpg";

const info = [
  {
    image: fitness1,
    header: "How to build a Muscle as a Woman",
    para: "I overcame an eating disorder, discovered a love for heavy strength training, and now I help women",
  },
  {
    image: fitness7,
    header: "How to build a Muscle as a man",
    para: "I overcame an eating disorder, discovered a love for heavy strength training, and now I help man",
  },
  {
    image: fitness9,
    header: "How to build a Muscle as a Woman",
    para: "I overcame an eating disorder, discovered a love for heavy strength training, and now I help women",
  },
];

const LatestPostCard = () => {
  // let navigate=useNavigate();
  const handleClick = () => {
    // navigate('/')
  };
  return (
    <section className={style.container}>
      {info.map((item, index) => (
        <section key={index}>
          <div className={style.img_wrapper}>
            <img src={item.image} alt="post-img" />
          </div>

          <div className={style.details_container}>
            <h5>{item.header}</h5>

            <p>{item.para}</p>

            <Button text="Read More" handleClick={handleClick} />
          </div>
        </section>
      ))}
    </section>
  );
};

export default LatestPostCard;
