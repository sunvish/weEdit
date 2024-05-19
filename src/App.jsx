import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";
import PostWork from "./pages/PostWork.jsx";
import Main from "./pages/Main.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/postWork" element={<PostWork />} />
        <Route path="/home" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
