import EditorPost from "../../Components/EditorPost/EditorPost";
import FeaturedBlog from "../../Components/FeaturedBlog/FeaturedBlog";
import LatestPost from "../../Components/LatestPost/LatestPost";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <section className="mt-[12rem]">
      <FeaturedBlog />
      <LatestPost />
      <EditorPost />
      <NewsLetter />
    </section>
  );
};

export default Home;
