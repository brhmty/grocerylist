import React, { useEffect, useContext } from "react";
import * as data from "./../utilities/data";
import { MainContext } from "./MainContainer";

const Alert = () => {
  const { dispatch, state } = useContext(MainContext);

  //showingAlert
  useEffect(() => {
    if (state.alertType === data.alertTypeAdd) {
      dispatch({ type: "setAlertText", payload: data.alertItemAdded });
    } else if (state.alertType === data.alertTypeRemove) {
      dispatch({ type: "setAlertText", payload: data.alertItemRemoved });
    } else if (state.alertType === data.alertTypeClear) {
      dispatch({ type: "setAlertText", payload: data.alertListCleared });
    } else if (state.alertType === data.alertTypeEdit) {
      dispatch({ type: "setAlertText", payload: data.alertItemEdited });
    } else if (state.alertType === data.alertTypeEmpty) {
      dispatch({ type: "setAlertText", payload: data.alertItemEmpty });
    }

    const showAlert = setTimeout(() => {
      dispatch({ type: "setShowAlert", payload: false });
    }, 3000);

    return () => {
      clearTimeout(showAlert);
    };
  }, [state.alertType]);

  return (
    <>
      {state.showAlert && (
        <p className={`w-4/6 text-center mx-auto ${state.alertColor}`}>
          {state.alertText}
        </p>
      )}
    </>
  );
};

export default Alert;
