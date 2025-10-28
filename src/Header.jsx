const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <i className="fas fa-pen-nib"></i>
            <span>БлогПлатформа</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#" className="active">
                <i className="fas fa-home"></i> Главная
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user"></i> Мой профиль
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-plus-circle"></i> Создать пост
              </a>
            </li>
          </ul>
          <div className="user-actions">
            <a href="#" className="btn btn-outline">
              <i className="fas fa-sign-in-alt"></i> Войти
            </a>
            <a href="#" className="btn">
              <i className="fas fa-user-plus"></i> Регистрация
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
