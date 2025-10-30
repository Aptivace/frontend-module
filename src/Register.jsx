import { useState, useRef, useContext, useEffect } from "react";
import { $fetch } from "./api";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "./App";

const Register = () => {
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const [error, setError] = useState();
  const regForm = useRef();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setError();
    const res = await $fetch(
      "/register",
      "POST",
      new FormData(regForm.current),
    );
    if (res) {
      console.log(res);
      if (res?.errors) {
        setError(res?.errors);
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <div id="register-page" className="page">
      <div className="form-container">
        <h2 className="form-title">Присоединяйтесь к нам!</h2>
        <form id="register-form" ref={regForm} onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input
              name="email"
              type="email"
              id="register-email"
              className="form-control"
              placeholder="Введите ваш email"
            />
            {error?.email && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {error?.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="register-username">Никнейм</label>
            <input
              name="nickname"
              type="text"
              id="register-username"
              className="form-control"
              placeholder="Введите ваш никнейм"
            />
            {error?.nickname && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {error?.nickname}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Пароль</label>
            <input
              name="password"
              type="password"
              id="register-password"
              className="form-control"
              placeholder="Придумайте надежный пароль"
            />
            {error?.password && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {error?.password}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-block">
            <i className="fas fa-user-plus"></i> Зарегистрироваться
          </button>
          <div className="text-center mt-3">
            <Link to="/login">Уже есть аккаунт? Войдите</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
