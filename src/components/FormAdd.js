import React from "react";

const Search = () => {
  return (
    <form className="w-11/12 mx-auto">
      <input
        type="text"
        placeholder="e.g eggs"
        className="indent-4 md:10/12 w-9/12 leading-8 mt-4 bg-colorPrimary rounded-l placeholder:text-blue-500"
      ></input>
      <button
        type="submit"
        className="md:w-2/12 w-3/12 leading-8 bg-blue-300 rounded-r"
      >
        Submit
      </button>
    </form>
  );
};

export default Search;
