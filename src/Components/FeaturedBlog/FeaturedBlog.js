import style from "./featureblog.module.css";
const { default: BigCard } = require("./BigCard/BigCard");
const { default: SmallCard } = require("./SmallCard/SmallCard");

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
