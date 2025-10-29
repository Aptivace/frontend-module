import { $fetch } from "./api.js";
import { useState } from "react";
import Post from "./Post";
import { useEffect } from "react";

const Posts = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchData = async (pageNum, searchText = "") => {
    const params = new URLSearchParams({
      page: pageNum.toString(),
    });

    if (searchText) {
      params.append("search", searchText);
    }

    const res = await $fetch(`/posts?${params}`);
    console.log(res);
    if (res) {
      setPosts(res?.data);
    }
  };

  useEffect(() => {
    fetchData(page, search);
  }, [page]);

  console.log(posts);

  return (
    <>
      <div className="posts-grid">
        {posts && posts.map((post) => <Post key={post?.id} {...post} />)}
      </div>

      <ul className="pagination">
        <li>
          <a href="#" className="active">
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
    </>
  );
};

export default Posts;
