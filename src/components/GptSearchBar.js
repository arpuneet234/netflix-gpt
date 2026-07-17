import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid-cols-12 grid">
        <input
          type="text"
          placeholder="What would like to watch today?"
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-700 p-2 m-4 rounded-lg text-white col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
