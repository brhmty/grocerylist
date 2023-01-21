import React, { useEffect, useContext } from "react";
import * as data from "./../utilities/data";
import { MainContext } from "./MainContainer";

const Alert = () => {
  const { dispatch, state } = useContext(MainContext);

  //showingAlert
  useEffect(() => {
    if (state.alertType === data.alertTypeAdd) {
      dispatch({ type: "setAlertText", payload: data.alertItemAdded });
    } else {
      dispatch({ type: "setAlertText", payload: data.alertItemRemoved });
    }

    const showAlert = setTimeout(() => {
      dispatch({ type: "setShowAlert", payload: false });
    }, 3000);

    return () => {
      clearTimeout(showAlert);
    };
  }, [state.mainList]);

  return (
    <>
      {state.showAlert &&
        (state.alertType === data.alertTypeAdd ? (
          <p className="w-4/6 text-center mx-auto bg-green-300">
            {state.alertText}
          </p>
        ) : (
          <p className="w-4/6 text-center mx-auto bg-red-300">
            {state.alertText}
          </p>
        ))}
    </>
  );
};

export default Alert;
