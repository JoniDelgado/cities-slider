import { useEffect, useState } from "react";
import "./postInfo.scss";

const PostInfo = () => {
  const [comments, setComments] = useState(0);
  const [likes, setLikes] = useState(0);

  const randomNumber = (type) => {
    return Math.floor(Math.random() * type);
  };

  useEffect(() => {
    setComments(randomNumber(300));
    setLikes(randomNumber(50));
  }, []);

  return (
    <>
      <div className="info-container">
        <img className="info-container__image" src="../../icons/like.png" />
        <p className="info-container__data">{likes}</p>
      </div>
      <div className="info-container">
        <img className="info-container__image" src="../../icons/comment.png" />
        <p className="info-container__data">{comments}</p>
      </div>
    </>
  );
};

export default PostInfo;
