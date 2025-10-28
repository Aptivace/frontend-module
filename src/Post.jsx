const Post = ({ title, description, img, likedIt, countLikes, createdAt }) => {
  return (
    <div class="post-card">
      <img src={img} alt="Изображение публикации" class="post-image" />
      <div class="post-content">
        <h3 class="post-title">{title}</h3>
        <p class="post-text">{description}</p>
        <div class="post-meta">
          <span class="post-date">
            <i class="far fa-calendar"></i> {createdAt}
          </span>
          <span class="post-likes">
            <i class="fas fa-heart"></i> {countLikes}
          </span>
        </div>
        <div class="post-actions">
          {likedIt ? (
            <button class="like-btn liked">
              <i class="far fa-heart"></i> Убрать лайк
            </button>
          ) : (
            <button class="like-btn">
              <i class="far fa-heart"></i> Лайк
            </button>
          )}
          <a href="#" class="author-btn">
            <i class="fas fa-user-edit"></i> Автор
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
