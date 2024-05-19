import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./editors/pages/Register.jsx";
import Signin from "./editors/pages/Signin.jsx";
import Home from "./editors/pages/Home.jsx";
import PostWork from "./editors/pages/PostWork.jsx";
import Main from "./editors/pages/Main.jsx";
import Profile from "./editors/pages/Profile.jsx";
import ProtectRoute from "./components/ProtectRoute.jsx";
import RegisterPage from "./influencer/pages/Register.jsx";
import Login from "./influencer/pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editor/register" element={<Register />} />
        <Route path="/editor/login" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/editor/postWork" element={<PostWork />} />
        <Route path="/editor/home" element={<Main />} />
        <Route path="/editor/profile" element={<Profile />} />
        <Route path="/influencer/register" element={<RegisterPage />} />
        <Route path="/influencer/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
