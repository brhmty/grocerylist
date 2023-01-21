import React, { useContext } from "react";
import { MainContext } from "./MainContainer";
import * as data from "../utilities/data";

const ClearList = () => {
  const { dispatch, state, resetPage } = useContext(MainContext);

  const handleClick = () => {
    dispatch({ type: "setMainList", payload: [] });
    dispatch({ type: "setClearList", payload: true });
    dispatch({ type: "setAlertType", payload: data.alertTypeClear });
    dispatch({ type: "setAlertColor", payload: data.colorDeleteClear });
    dispatch({ type: "setShowAlert", payload: true });
    resetPage();
  };
  return (
    <>
      {state.showClearList && (
        <div className="w-full h-12 mt-4 flex justify-center">
          <button
            onClick={handleClick}
            className="w-min h-0 whitespace-nowrap mx-auto text-red-500"
          >
            Clear Items
          </button>
        </div>
      )}
    </>
  );
};

export default ClearList;
