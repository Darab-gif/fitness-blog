import { useState } from "react";
import CommentBox from "./CommentBox/CommentBox";
import CommentCard from "./CommentCard/CommentCard";

import style from "./comments.module.css";

const Comments = () => {
  // state
  const [comment, setComment] = useState({
    name: "",
    message: "",
  });
  const [totalComments, setTotalComments] = useState([]);
  const commentCount = totalComments.length;

  const handleTotalComments = () => {
    if (comment) {
      setTotalComments([{ ...comment }, ...totalComments]);
    }
    setComment({
      name: "",
      message: "",
    });
  };

  return (
    <section className={style.comment_container}>
      <h5>Comment ({commentCount})</h5>
      <CommentBox
        btnText="Submit"
        comment={comment}
        setComment={setComment}
        handleComment={handleTotalComments}
      />

      {totalComments.length > 0 && (
        <>
          {totalComments.map((item, index) => (
            <CommentCard
              key={index}
              commentName={item.name}
              commentMessage={item.message}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Comments;
