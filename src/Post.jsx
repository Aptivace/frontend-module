import { useState } from "react";
import { $fetch } from "./api";
import { Link } from "react-router-dom";

const Post = ({
  id,
  title,
  description,
  img,
  liked_it,
  count_likes,
  created_at,
  post_maker_id,
}) => {
  const [isLiked, setIsLiked] = useState(liked_it);
  const [countLikes, setCountLikes] = useState(count_likes);

  const addLike = async () => {
    const res = await $fetch(`/posts/${id}/like`, "POST");

    console.log(res);
    if (res) {
      setCountLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const removeLike = async () => {
    const res = await $fetch(`/posts/${id}/like`, "DELETE");

    console.log(res);
    if (res) {
      setCountLikes((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="post-card">
      {img && (
        <img src={img} alt="Изображение публикации" className="post-image" />
      )}
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <p className="post-text">{description}</p>
        <div className="post-meta">
          <span className="post-date">
            <i className="far fa-calendar"></i> {created_at}
          </span>
          <span className="post-likes">
            <i className="fas fa-heart"></i> {countLikes}
          </span>
        </div>
        <div className="post-actions">
          {isLiked ? (
            <button className="like-btn liked" onClick={removeLike}>
              <i className="far fa-heart"></i> Убрать лайк
            </button>
          ) : (
            <button className="like-btn" onClick={addLike}>
              <i className="far fa-heart"></i> Лайк
            </button>
          )}
          <Link to={`/user/${post_maker_id}`} className="author-btn">
            <i className="fas fa-user-edit"></i> Автор
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
