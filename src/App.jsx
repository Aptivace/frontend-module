import { createContext } from "react";
import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Register from "./Register";

export const userContext = createContext();
function App() {
  const [user, setUser] = useState();

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <HashRouter>
          <Routes>
            <Route path="/" Component={Layout}>
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />
            </Route>
          </Routes>
        </HashRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
