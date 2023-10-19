import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminOnly from "./pages/AdminOnly";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        
        <Route path="/adminonly" element={<AdminOnly />}></Route>
      </Routes>
    </div>
  );
}

export default App;
