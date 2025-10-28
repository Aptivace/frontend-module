import { useState } from "react";
import { $fetch } from "./api";
import Posts from "./Posts";

const Home = () => {
  const [posts, setPosts] = useState();

  const fetchData = async () => {
    const res = await $fetch("/posts");
    console.log(res);
    if (res) {
      setPosts(res?.data);
    }
  };

  return (
    <div id="home-page" class="page">
      <div class="hero">
        <h1>Поделитесь своими мыслями с миром</h1>
        <p>
          Присоединяйтесь к сообществу авторов и читателей. Находите
          вдохновение, делитесь идеями и открывайте новые горизонты.
        </p>
        <a href="#" class="btn btn-secondary">
          <i class="fas fa-pen-fancy"></i> Начать писать
        </a>
      </div>

      <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input
          type="text"
          class="search-input"
          placeholder="Поиск по заголовку..."
        />
      </div>

      <Posts {...posts} />

      <ul class="pagination">
        <li>
          <a href="#" class="active">
            1
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
