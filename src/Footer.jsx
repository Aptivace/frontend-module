import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <Link to="#" className="footer-logo">
            <i className="fas fa-pen-nib"></i>
            <span>БлогПлатформа</span>
          </Link>
          <ul className="footer-links">
            <li>
              <Link to="#">О нас</Link>
            </li>
            <li>
              <Link to="#">Правила</Link>
            </li>
            <li>
              <Link to="#">Контакты</Link>
            </li>
            <li>
              <Link to="#">Помощь</Link>
            </li>
          </ul>
          <p className="copyright">
            © 2023 БлогПлатформа. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
