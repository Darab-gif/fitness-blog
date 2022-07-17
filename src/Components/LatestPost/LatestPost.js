import HeadCategory from "../Head_category/HeadCategory";
import LatestPostCard from "./LatestPostCard/LatestPost";
import style from "./latestpost.module.css";

const LatestPost = () => {
  return (
    <section className={style.container}>
      <HeadCategory title="Latest Post" />

      <div className={style.post_list}>
        <LatestPostCard />
        <LatestPostCard />
        <LatestPostCard />
      </div>
    </section>
  );
};

export default LatestPost;
