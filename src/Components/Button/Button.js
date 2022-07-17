import style from "./button.module.css";

const Button = ({ text, disable, handleClick }) => {
  return (
    <button className={style.button} disabled={disable} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
