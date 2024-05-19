import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

const PostWork = () => {
  const [showNote, setShowNote] = useState(false);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Link, setLink] = useState("");
  const Navigate = useNavigate();

  const formData = { Title, Description, Price, Link };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/postwork", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setDescription("");
        setLink("");
        setPrice("");
        setTitle("");
        Navigate("/profile");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleNote = () => {
    setShowNote(!showNote);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Post Your Work</h1>
          <p className="text-lg mb-4">🎥 Share your video editing skills</p>
          <p className="text-lg mb-4">✂️ Describe your services in detail</p>
          <p className="text-lg mb-4">💼 Set your price and get hired</p>
          <p className="text-lg mb-4">💰 Earn money by doing what you love</p>
        </div>
        <form
          className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="title" className="block text-sm font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your work"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description of your work"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-semibold mb-2">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter the price per 1min video"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-semibold mb-2">
              Link
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                id="image"
                name="image"
                value={Link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Share the link of the Youtube video"
                className="w-full px-4 py-3 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
              />
              <button
                type="button"
                onClick={toggleNote}
                className="ml-2 p-3 bg-gray-500 text-white rounded-full focus:outline-none"
              >
                i
              </button>
            </div>
            {showNote && (
              <div className="mt-2 p-2 bg-gray-800 text-white rounded">
                Please ensure the link is a valid YouTube URL so clients can
                view your edited videos as demos before hiring you."
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 transition duration-300"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostWork;
