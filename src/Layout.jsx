import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { userContext } from "./App";
import { useEffect } from "react";

const Layout = () => {
  const { setUser } = useContext(userContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(`Токен: ${localStorage.getItem("token")}`);
      setUser(true);
    } else setUser(false);
  });

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
