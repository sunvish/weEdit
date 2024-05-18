import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      <aside className="w-1/4 bg-gray-800 p-6">
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="text-lg font-semibold hover:text-gray-300">
            Home
          </Link>
          <Link
            to="/profile"
            className="text-lg font-semibold hover:text-gray-300"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="text-lg font-semibold hover:text-gray-300"
          >
            Settings
          </Link>
          <Link
            to="/help"
            className="text-lg font-semibold hover:text-gray-300"
          >
            Help
          </Link>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="bg-slate-100 text-black rounded-lg px-2">
              WeEdit
            </span>
          </h1>
          <p className="text-lg mb-6">Post Your Work - Get Hired</p>
        </header>

        <section className="mb-12">
          <Link to="/postwork">
            <button className="bg-red-500 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
              Post Content
            </button>
          </Link>
        </section>

        <section className="flex space-x-4">
          <span className="text-6xl">🎥</span>
          <span className="text-6xl">✂️</span>
          <span className="text-6xl">💼</span>
          <span className="text-6xl">💰</span>
        </section>
      </main>
    </div>
  );
};

export default Main;
