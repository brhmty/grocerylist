import React, { useEffect, useContext } from "react";
import * as data from "./../utilities/data";
import { MainContext } from "./MainContainer";

const Alert = () => {
  const {
    mainList,
    alertType,
    alertText,
    showAlert,
    setAlertText,
    setShowAlert,
  } = useContext(MainContext);

  //showingAlert
  useEffect(() => {
    if (alertType === data.alertTypeAdd) {
      setAlertText(data.alertItemAdded);
    } else {
      setAlertText(data.alertItemRemoved);
    }

    const showAlert = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => {
      clearTimeout(showAlert);
    };
  }, [mainList]);

  return (
    <>
      {showAlert &&
        (alertType === data.alertTypeAdd ? (
          <p className="w-4/6 text-center mx-auto bg-green-300">{alertText}</p>
        ) : (
          <p className="w-4/6 text-center mx-auto bg-red-300">{alertText}</p>
        ))}
    </>
  );
};

export default Alert;
