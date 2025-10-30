import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userContext } from "./App";
import { $fetch } from "./api";

const Header = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const logOut = async () => {
    $fetch("/logout");

    localStorage.removeItem("token");
    setUser(false);
    navigate("/login");
  };

  console.log(user);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="#" className="logo">
            <i className="fas fa-pen-nib"></i>
            <span>БлогПлатформа</span>
          </Link>
          <ul className="nav-links">
            <li>
              <NavLink to="/">
                <i className="fas fa-home"></i> Главная
              </NavLink>
            </li>
            <li>
              <Link to="/user">
                <i className="fas fa-user"></i> Мой профиль
              </Link>
            </li>
            <li>
              <NavLink to="/post/create">
                <i className="fas fa-plus-circle"></i> Создать пост
              </NavLink>
            </li>
          </ul>
          <div className="user-actions">
            {user ? (
              <button onClick={logOut} className="btn btn-outline">
                <i className="fas fa-sign-in-alt"></i> Выйти
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline">
                  <i className="fas fa-sign-in-alt"></i> Войти
                </Link>
                <Link to="/register" className="btn">
                  <i className="fas fa-user-plus"></i> Регистрация
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
