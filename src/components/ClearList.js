import React, { useContext } from "react";
import { MainContext } from "./MainContainer";

const ClearList = () => {
  const { dispatch } = useContext(MainContext);
  const handleClick = () => {
    dispatch({ type: "setMainList", payload: [] });
    dispatch({ type: "setClearList", payload: true });
  };
  return (
    <div className="w-full h-12 mt-4 flex justify-center">
      <button
        onClick={handleClick}
        className="w-min h-0 whitespace-nowrap mx-auto text-red-500"
      >
        Clear Items
      </button>
    </div>
  );
};

export default ClearList;
