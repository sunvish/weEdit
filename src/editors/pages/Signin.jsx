import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const formData = { email, password };
      const response = await fetch("http://localhost:5000/api/creator/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEmail("");
        setPassword("");
        const jsonData = await response.json();

        console.log(jsonData.token);
        localStorage.setItem("token", jsonData.token);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg p-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-200">
          Login as Editor
        </h2>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            className="bg-red-500 text-white py-3 px-6 rounded focus:outline-none focus:ring focus:ring-red-600"
          >
            Login
          </button>
          <Link to="/">
            <button className="bg-gray-700 text-white py-3 px-6 rounded focus:outline-none focus:ring focus:ring-blue-500">
              Cancel
            </button>
          </Link>
        </div>
        <div>
          <p className="text-sm font-semibold mb-6 text-gray-100 mt-5">
            Dont have an account?{" "}
            <Link to={"/editor/register"} className="text-blue-500 underline">
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
