import style from "./featureblog.module.css";
import BigCard from "./BigCard/BigCard";
import SmallCard from "./SmallCard/SmallCard";
const FeaturedBlog = () => {
  return (
    <section className={style.featured_container}>
      <BigCard />

      <div className={style.small_container}>
        <SmallCard />
        <SmallCard />
      </div>
    </section>
  );
};

export default FeaturedBlog;
