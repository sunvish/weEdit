import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />
      <header className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="bg-slate-100 text-black rounded-lg px-2">
              WeEdit
            </span>
          </h1>
          <p className="text-lg mb-6">
            Connect with Content Creators and Earn Money by Editing Videos
          </p>
          <div className="mb-6">
            <p className="text-lg mb-4">
              Are you an editor looking to offer your services or a content
              creator looking to hire editors?
            </p>
            <Link to="/editor/login">
              <button className="bg-red-500 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 mr-4">
                🎬 Login as Editor
              </button>
            </Link>
            <Link to="/influencer/login">
              <button className="bg-red-500 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
                📹 Login as Content Creator
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main className="px-8 py-4 text-center">
        <section className="my-8">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-lg mb-6">
            Our platform connects talented video editors with content creators
            looking to enhance their video projects. Post your work, get hired,
            and start earning.
          </p>
        </section>
        <section className="my-8">
          <Link to="/add-content">
            <button className="bg-green-500 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
              ➕ Add Content
            </button>
          </Link>
        </section>
      </main>
      <footer className="text-center py-4">
        <p>&copy; 2024 WeEdit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Main;
