import style from "./commentcard.module.css";
import { IoPersonCircle } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { ImBubble } from "react-icons/im";
import { useState } from "react";
import CommentBox from "../CommentBox/CommentBox";

const CommentCard = ({ commentName, commentMessage }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [reply, setReply] = useState({
    name: "",
    message: "",
  });
  const [totalReply, setTotalReply] = useState([]);
  const [likeCount, setLikeCount] = useState(0);

  const handleReplyBox = () => {
    setShowReplyBox((prev) => !prev);
  };

  const handleTotalReply = () => {
    if (reply) {
      setTotalReply([{ ...reply }, ...totalReply]);
      setReply({
        name: "",
        message: "",
      });
    }
    setShowReplyBox(false);
  };

  const handleLikeCount = () => {
    setLikeCount((prev) => (prev += 1));
  };

  return (
    <>
      <>
        <section className={style.comment_container}>
          <div className={style.dummy_avatar}>
            <IoPersonCircle />
          </div>

          <section className={style.comment_wrapper}>
            <div className={style.comment_body}>
              <p>
                {commentName}
                <span>Jul4</span>
              </p>
              <p>{commentMessage}</p>
            </div>

            <section className={style.reactions_wrapper}>
              <div onClick={handleLikeCount}>
                <GiSelfLove /> {likeCount} Likes
              </div>

              <div onClick={handleReplyBox}>
                <ImBubble /> Reply
              </div>
            </section>
          </section>
        </section>

        {totalReply.length > 0 && (
          <div className={style.comment_wrapper}>
            {totalReply.map((item, index) => (
              <CommentCard
                key={index}
                commentName={item.name}
                commentMessage={item.message}
              />
            ))}
          </div>
        )}
      </>

      {/* comment box for sending a reply to a comment  */}
      {showReplyBox && (
        <CommentBox
          btnText="Reply"
          cancelText="Cancel"
          handleReplyBox={handleReplyBox}
          comment={reply}
          setComment={setReply}
          handleComment={handleTotalReply}
        />
      )}
    </>
  );
};
export default CommentCard;
