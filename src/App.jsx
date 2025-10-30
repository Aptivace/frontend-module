import { createContext } from "react";
import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import PostForm from "./PostForm";
import UserPage from "./UserPage";

export const userContext = createContext();
function App() {
  const [user, setUser] = useState();

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <HashRouter>
          <Routes>
            <Route path="/" Component={Layout}>
              <Route index Component={Home} />
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />
              <Route path="/post/create" Component={PostForm} />
              <Route path="/user/:userId" Component={UserPage} />
            </Route>
          </Routes>
        </HashRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
