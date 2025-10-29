import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="#" className="logo">
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
              <NavLink to="/user">
                <i className="fas fa-user"></i> Мой профиль
              </NavLink>
            </li>
            <li>
              <NavLink to="/post/create">
                <i className="fas fa-plus-circle"></i> Создать пост
              </NavLink>
            </li>
          </ul>
          <div className="user-actions">
            <Link to="/login" className="btn btn-outline">
              <i className="fas fa-sign-in-alt"></i> Войти
            </Link>
            <Link to="/register" className="btn">
              <i className="fas fa-user-plus"></i> Регистрация
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
