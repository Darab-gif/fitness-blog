import BlogPost from "../BlogPost/BlogPost";
import HeadCategory from "../Head_category/HeadCategory";
import style from "./latestpost.module.css";

const LatestPost = () => {
  const items = [1, 2, 3];
  return (
    <section className={style.container}>
      <HeadCategory title="Latest Posts" />

      <BlogPost data={items} />
    </section>
  );
};

export default LatestPost;
