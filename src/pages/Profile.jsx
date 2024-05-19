import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/postwork", {
          method: "GET",
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        });
        const jsonResponse = await response.json();
        setProfile(jsonResponse.posts);
        console.log(jsonResponse.posts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const getYoutubeVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
  };

  const handleDelete = async (id) => {
    try {
      console.log("deleting", id);
      await fetch(`http://localhost:5000/api/postwork/${id}`, {
        method: "DELETE",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });

      setProfile(profile.filter((post) => post._id != id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Posted Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {profile.map((post) => (
            <div
              key={post._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.Title}</h2>
              <p className="text-gray-400 mb-4">{post.Description}</p>
              <p className="text-lg font-medium text-blue-400 mb-4">
                Price: ${post.Price}
              </p>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                    post.Link
                  )}`}
                  title={post.Title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
