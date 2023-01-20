import React, { useContext } from "react";
import { MainContext } from "./MainContainer";

const ClearList = () => {
  const { setMainList, setClearList } = useContext(MainContext);
  const handleClick = () => {
    setMainList([]);
    setClearList(true);
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
