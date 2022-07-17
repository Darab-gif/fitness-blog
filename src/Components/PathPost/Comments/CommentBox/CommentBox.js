import { useState } from "react";
import Button from "../../../Button/Button";
import style from "./commentbox.module.css";
const CommentBox = (props) => {
  let name = "";
  let messages = "";
  const [comment, setComment] = useState([name, messages]);

  // pdestructured props
  const { btnText, cancelText, handleReplyBox, handleComment } = props;

  // change the button state when the comment box state changes
  const disableBtn = comment ? false : true;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleComment();
  };

  return (
    <form className={style.commentBox_container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment.name}
        placeholder="Enter your name"
        required
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
      />

      <textarea
        rows={10}
        onChange={(e) => setComment({ ...comment, messages: e.target.value })}
        value={comment.message}
      />

      <Button text={btnText} disable={disableBtn} />

      {cancelText && (
        <button
          onClick={handleReplyBox}
          type="button"
          className={style.cancel_Btn}
        >
          {cancelText}
        </button>
      )}
    </form>
  );
};

export default CommentBox;
