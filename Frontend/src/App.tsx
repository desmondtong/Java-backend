import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "./context/user";

import { UserInfo } from "./interfaces";
import AdminOnly from "./pages/AdminOnly";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [token, setToken] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  return (
    <div>
      <UserContext.Provider value={{ token, setToken, userInfo, setUserInfo }}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          {/* only allow access if login/have token */}
          {token != "" && (
            <Route path="/homepage" element={<HomePage />}></Route>
          )}

          {/* restricted access for ADMIN only */}
          {token != "" && userInfo.role === "ADMIN" && (
            <Route path="/adminonly" element={<AdminOnly />}></Route>
          )}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
