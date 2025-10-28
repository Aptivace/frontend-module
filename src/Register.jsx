import { useState, useRef } from "react";
import { $fetch } from "./api";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
    <div id="register-page" class="page" style="display: none;">
      <div class="form-container">
        <h2 class="form-title">Присоединяйтесь к нам!</h2>
        <form id="register-form" ref={regForm} onSubmit={submitForm}>
          <div class="form-group">
            <label for="register-email">Email</label>
            <input
              name="email"
              type="email"
              id="register-email"
              class="form-control"
              placeholder="Введите ваш email"
            />
            {error?.email && (
              <div class="error-message">
                <i class="fas fa-exclamation-circle"></i> {error?.email}
              </div>
            )}
          </div>
          <div class="form-group">
            <label for="register-username">Никнейм</label>
            <input
              name="nickname"
              type="text"
              id="register-username"
              class="form-control"
              placeholder="Введите ваш никнейм"
            />
            {error?.nickname && (
              <div class="error-message">
                <i class="fas fa-exclamation-circle"></i> {error?.nickname}
              </div>
            )}
          </div>
          <div class="form-group">
            <label for="register-password">Пароль</label>
            <input
              name="password"
              type="password"
              id="register-password"
              class="form-control"
              placeholder="Придумайте надежный пароль"
            />
            {error?.password && (
              <div class="error-message">
                <i class="fas fa-exclamation-circle"></i> {error?.password}
              </div>
            )}
          </div>
          <button type="submit" class="btn btn-block">
            <i class="fas fa-user-plus"></i> Зарегистрироваться
          </button>
          <div class="text-center mt-3">
            <a href="#">Уже есть аккаунт? Войдите</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
