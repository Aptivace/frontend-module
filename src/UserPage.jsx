import { useParams } from "react-router-dom";
import { $fetch } from "./api";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

const UserPage = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [nickname, setNickname] = useState();

  const fetchData = async () => {
    console.log(userId);
    const res = await $fetch(`/user/${userId}`);
    if (res) {
      if (res?.data) {
        setPosts(res?.data?.posts);
        setNickname(res?.data?.nickname);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="profile-page" className="page">
      <div className="profile-header">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          alt="Аватар пользователя"
          className="profile-avatar"
        />
        <h2 className="profile-username">{nickname}</h2>
        <div className="profile-stats">
          <div className="stat">
            <div className="stat-value">364</div>
            <div className="stat-label">Публикации</div>
          </div>
          <div className="stat">
            <div className="stat-value">1.2K</div>
            <div className="stat-label">Лайки</div>
          </div>
          <div className="stat">
            <div className="stat-value">356</div>
            <div className="stat-label">Подписчики</div>
          </div>
        </div>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
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
      </ul>
    </div>
  );
};

export default UserPage;
