import BlogPost from "../../../Components/BlogPost/BlogPost";
import RelatedPost from "../../../Components/RelatedPost/RelatedPost";
import style from "../pagecategories.module.css";

const Keto = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className={style.container}>
      <BlogPost data={items} />

      <aside>
        <RelatedPost />
      </aside>
    </section>
  );
};

export default Keto;
