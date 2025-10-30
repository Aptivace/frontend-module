import { Link } from "react-router-dom";
import { useState } from "react";
import { $fetch } from "./api";
import Posts from "./Posts";

const Home = () => {
  return (
    <div id="home-page" className="page">
      <div className="hero">
        <h1>Поделитесь своими мыслями с миром</h1>
        <p>
          Присоединяйтесь к сообществу авторов и читателей. Находите
          вдохновение, делитесь идеями и открывайте новые горизонты.
        </p>
        <Link to="/post/create" className="btn btn-secondary">
          <i className="fas fa-pen-fancy"></i> Начать писать
        </Link>
      </div>

      <Posts />
    </div>
  );
};

export default Home;
