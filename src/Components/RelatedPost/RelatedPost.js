import RelatedPostCard from "./RelatedPostCard/RelatedPostCard";
import style from "./relatedpost.module.css";
const RelatedPost = () => {
  return (
    <aside className={style.container}>
      <h4>Related Posts</h4>

      <section>
        <RelatedPostCard />
        <RelatedPostCard />
        <RelatedPostCard />
        <RelatedPostCard />
        <RelatedPostCard />
      </section>
    </aside>
  );
};

export default RelatedPost;
