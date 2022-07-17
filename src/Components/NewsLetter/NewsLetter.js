import Button from "../Button/Button";
import style from "./newsletter.module.css";

const NewsLetter = () => {
  return (
    <form className={style.form_container}>
      <h3>Subscribe to our newsletter</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum. text of the <br /> printing and typesetting
      </p>

      <div className={style.form_wrapper}>
        <input type="text" placeholder="Enter Your Email" />
      </div>

      <Button text="Subscribe" />
    </form>
  );
};

export default NewsLetter;
