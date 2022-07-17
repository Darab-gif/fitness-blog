import HeadCategory from "../Head_category/HeadCategory";
import EditorPostCard from "./EditorPostCard/EditorPostCard";
import style from "./editorpost.module.css";
const EditorPost = () => {
  return (
    <section className={style.container}>
      <HeadCategory title="Editor's Pick" />

      <div className={style.post_list}>
        <EditorPostCard />
        <EditorPostCard />
        <EditorPostCard />
      </div>
    </section>
  );
};

export default EditorPost;
