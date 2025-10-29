import { useState } from "react";
import { $fetch } from "./api";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const [error, setError] = useState();
  const postForm = useRef();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setError();
    const res = await $fetch("/posts", "POST", new FormData(postForm.current));
    if (res) {
      console.log(res);
      if (res?.errors) {
        setError(res?.errors);
      } else {
        navigate("/");
      }
    }
  };

  const resetForm = () => {
    postForm.reset();
  };
  return (
    <div id="post-form-page" className="page">
      <div className="post-form">
        <h2 className="form-title">Создание публикации</h2>
        <form id="create-post-form" ref={postForm} onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="title">Заголовок</label>
            <input
              name="title"
              type="text"
              id="title"
              className="form-control"
              placeholder="Введите заголовок"
            />
            {error?.title && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {error?.title}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="post-text">Текст публикации</label>
            <textarea
              name="description"
              id="post-text"
              className="form-control"
              rows="5"
              placeholder="Введите текст публикации"
            ></textarea>
            {error?.description && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>{" "}
                {error?.description}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="post-image">Изображение (опционально)</label>
            <div className="file-upload">
              <input name="img" type="file" id="post-image" accept="image/*" />
              <label htmlFor="post-image" className="file-upload-label">
                <i className="fas fa-cloud-upload-alt"></i>
                <span>Перетащите изображение сюда или нажмите для выбора</span>
              </label>
            </div>
            {error?.img && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {error?.img}
              </div>
            )}
          </div>
          <div className="form-group text-right">
            <button
              onClick={resetForm}
              type="button"
              className="btn btn-outline"
            >
              <i className="fas fa-times"></i> Отмена
            </button>
            <button type="submit" className="btn">
              <i className="fas fa-paper-plane"></i> Опубликовать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
