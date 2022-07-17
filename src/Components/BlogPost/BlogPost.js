import LatestPost from "../LatestPostCard/LatestPost";
import style from "./blogpost.module.css";
const BlogPost = ({ data }) => {
  return (
    <main className={style.blog_wrapper}>
      {data.map((item, index) => (
        <LatestPost key={index} />
      ))}
    </main>
  );
};

export default BlogPost;
