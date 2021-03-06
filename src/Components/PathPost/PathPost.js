import style from "./pathpost.module.css";
import coverPhoto from "../../images/fitness.jfif";
import authorImg from "../../images/fit.jfif";
import Comments from "./Comments/Comments";

const PathPost = () => {
  return (
    <section className={style.container}>
      <div className={style.img_wrapper}>
        <img src={coverPhoto} alt="cover-pohot" />
      </div>

      <div className={style.author_details}>
        <div className={style.author_img}>
          <img src={authorImg} alt="author" />
        </div>

        <div>
          <h5>John kim</h5>
          <p>Posted on 3 Jul</p>
        </div>
      </div>

      <article className={style.article}>
        <h1>Crypto hedge fund Three Arrows files for bankruptcy</h1>

        <p>
          ⚡ This post contains all the living emoji's which you can use
          anywhere. 🤗 I have made it simple for you, so that you can easily
          embed these emoji to you GitHub readme profile.
        </p>

        <p>
          All you need to do is to follow the below steps: STEP 1: Copy and
          paste the below syntax to your Markdown fileEMOJI TABLE 🚨 Attention:
          Some of the emojis may look big, because it's not rendered properly by
          the DEV. 🚨 When using in you GitHub profile, you can adjust the size
          using height and width tags.
        </p>
      </article>

      <Comments />
    </section>
  );
};

export default PathPost;
