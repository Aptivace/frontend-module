import { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./App";
import { $fetch } from "./api";

const Login = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const logForm = useRef();

  const submitForm = async (e) => {
    e.preventDefault();
    setError();
    const res = await $fetch("/login", "POST", new FormData(logForm.current));
    if (res) {
      console.log(res);
      if (res?.errors) {
        setError(res?.errors);
      } else {
        localStorage.setItem("token", res?.credentials?.token);
        setUser(true);
        navigate("/");
      }
    }
  };

  const { user, setUser } = useContext(userContext);
  return (
    <div id="login-page" className="page">
      <div className="form-container">
        <h2 className="form-title">С возвращением!</h2>
        <form id="login-form" ref={logForm} onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
              name="email"
              type="email"
              id="login-email"
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
            <label htmlFor="login-password">Пароль</label>
            <input
              name="password"
              type="password"
              id="login-password"
              className="form-control"
              placeholder="Введите ваш пароль"
            />
            {error?.email && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {error?.email}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-block">
            <i className="fas fa-sign-in-alt"></i> Войти
          </button>
          <div className="text-center mt-3">
            <Link to="/register">Нет аккаунта? Зарегистрируйтесь</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
