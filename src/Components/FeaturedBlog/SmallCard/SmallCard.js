import { CgArrowTopRight } from "react-icons/cg";
import style from "./smallcard.module.css";
const SmallCard = () => {
  return (
    <div className={style.small_wrapper}>
      <h3>GET INSPIRED</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        fringil. lacus eget consequat tincidunt, lectus ex.
      </p>
      <div>
        <CgArrowTopRight />
        Explore More
      </div>
    </div>
  );
};

export default SmallCard;
