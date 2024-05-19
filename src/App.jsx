import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./editors/pages/Register.jsx";
import Signin from "./editors/pages/Signin.jsx";
import Home from "./editors/pages/Home.jsx";
import PostWork from "./editors/pages/PostWork.jsx";
import Main from "./editors/pages/Main.jsx";
import Profile from "./editors/pages/Profile.jsx";

import InfluencerRegisterPage from "./influencer/pages/Register.jsx";
import InfluencerLoginPage from "./influencer/pages/Login.jsx";
import InfluencerHomePage from "./influencer/pages/Home.jsx";

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
        <Route
          path="/influencer/register"
          element={<InfluencerRegisterPage />}
        />
        <Route path="/influencer/login" element={<InfluencerLoginPage />} />
        <Route path="/influencer/home" element={<InfluencerHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
