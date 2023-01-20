import React, { useState, createContext, useEffect } from "react";
import Title from "./Title";
import FormAdd from "./FormAdd";
import Alert from "./Alert";
import ListItem from "./ListItem";
import ClearList from "./ClearList";
import * as data from "../utilities/data";

export const MainContext = createContext();

const MainContainer = () => {
  const [mainList, setMainList] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState(-1);
  const [edit, setEdit] = useState(false);
  const [buttonText, setButtonText] = useState(data.submit);
  const [deleteItem, setDeleteItem] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [clearList, setClearList] = useState(false);
  const [alertType, setAlertType] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  useEffect(() => {
    //updatingMainList
    if (mainList.length > 0) {
      localStorage.setItem("mainList", JSON.stringify([...mainList]));
    }
    //clearingMainList
    if (clearList) {
      localStorage.setItem("mainList", JSON.stringify([...mainList]));
      data.groceryList.length = 0;
      setClearList(false);
    }
  }, [mainList]);

  return (
    <div className="main-container md:w-5/12 w-10/12 min-h-[9rem] bg-white mx-auto my-36 drop-shadow-xl">
      <Title />
      <MainContext.Provider
        value={{
          mainList,
          setMainList,
          itemId,
          setItemId,
          setClearList,
          inputText,
          setInputText,
          edit,
          setEdit,
          editId,
          setEditId,
          buttonText,
          setButtonText,
          deleteId,
          setDeleteId,
          deleteItem,
          setDeleteItem,
          alertType,
          setAlertType,
          showAlert,
          setShowAlert,
          alertText,
          setAlertText,
        }}
      >
        <Alert />
        <FormAdd />
        <ListItem />
        <ClearList />
      </MainContext.Provider>
    </div>
  );
};

export default MainContainer;
