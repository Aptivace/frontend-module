import { $fetch } from "./api.js";
import { useState } from "react";
import Post from "./Post";
import { useEffect } from "react";

const Posts = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchData = async (pageNum, searchText = "") => {
    const params = {
      page: pageNum.toString(),
    };

    if (searchText) {
      params.search = searchText;
    }

    const res = await $fetch(`/posts`, "GET", params);
    if (res) {
      setPosts(res.data);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      fetchData(1, search);
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search]);

  return (
    <>
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          name="search"
          type="text"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по заголовку..."
        />
      </div>

      <div className="posts-grid">
        {posts && posts.map((post) => <Post key={post?.id} {...post} />)}
      </div>

      <ul className="pagination">
        <li>
          <button href="#" className="active">
            1
          </button>
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
    </>
  );
};

export default Posts;
