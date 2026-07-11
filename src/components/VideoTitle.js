import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white aspect-video w-screen bg-gradient-to-tr from-black/20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 p-4 px-10 text-xl text-white rounded-lg bg-opacity-50">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 p-4 px-10 text-xl text-white rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
