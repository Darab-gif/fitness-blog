import PathPost from "../../Components/PathPost/PathPost";
import RelatedPost from "../../Components/RelatedPost/RelatedPost";
import style from "./pathpostpage.module.css";

const PathPostPage = () => {
  return (
    <section className={style.container}>
      <main>
        <PathPost />
      </main>

      <aside>
        <RelatedPost />
      </aside>
    </section>
  );
};

export default PathPostPage;
