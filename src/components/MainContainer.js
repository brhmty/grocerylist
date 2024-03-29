import React, { createContext, useEffect, useReducer } from "react";
import Title from "./Title";
import FormAdd from "./FormAdd";
import Alert from "./Alert";
import ListItem from "./ListItem";
import ClearList from "./ClearList";
import * as data from "../utilities/data";

export const MainContext = createContext();

const MainContainer = () => {
  //ResettingUi
  const resetPage = () => {
    dispatch({ type: "setEdit", payload: false });
    dispatch({ type: "setInputText", payload: "" });
    dispatch({ type: "setButtonText", payload: data.submit });
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setMainList": {
        return { ...state, mainList: action.payload };
      }
      case "setItem": {
        return { ...state, item: action.payload };
      }
      case "setItemId": {
        return { ...state, itemId: action.payload };
      }
      case "setEdit": {
        return { ...state, edit: action.payload };
      }
      case "setFocus": {
        return { ...state, focus: action.payload };
      }
      case "setEditId": {
        return { ...state, editId: action.payload };
      }
      case "setInputText": {
        return { ...state, inputText: action.payload };
      }
      case "setButtonText": {
        return { ...state, buttonText: action.payload };
      }
      case "setDeleteId": {
        return { ...state, deleteId: action.payload };
      }
      case "setDeleteItem": {
        return { ...state, deleteItem: action.payload };
      }
      case "setShowClearList": {
        return { ...state, showClearList: action.payload };
      }
      case "setClearList": {
        return { ...state, clearList: action.payload };
      }
      case "setAlertType": {
        return { ...state, alertType: action.payload };
      }
      case "setAlertText": {
        return { ...state, alertText: action.payload };
      }
      case "setAlertColor": {
        return { ...state, alertColor: action.payload };
      }
      case "setShowAlert": {
        return { ...state, showAlert: action.payload };
      }
      default:
        throw new Error();
    }
  };
  const defaultState = {
    mainList: [],
    item: "",
    itemId: 0,
    edit: false,
    editId: -1,
    focus: "",
    inputText: "",
    buttonText: data.submit,
    deleteId: -1,
    deleteItem: false,
    showClearList: false,
    clearList: false,
    alertType: "",
    alertColor: "",
    alertText: "",
    showAlert: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    //updatingMainList
    if (state.mainList.length > 0) {
      localStorage.setItem("mainList", JSON.stringify([...state.mainList]));
      //showingClearListButton
      dispatch({ type: "setShowClearList", payload: true });
    }
    //clearingMainList
    if (state.clearList) {
      localStorage.setItem("mainList", JSON.stringify([...state.mainList]));
      data.groceryList.length = 0;
      dispatch({ type: "setClearList", payload: false });
      //hidingClearListButton
      dispatch({ type: "setShowClearList", payload: false });
    }
  }, [state.mainList]);

  return (
    <div className="main-container md:w-5/12 w-10/12 min-h-[9rem] max-h-[25rem] overflow-y-auto bg-white mx-auto my-36 drop-shadow-xl">
      <Title />
      <MainContext.Provider
        value={{
          dispatch,
          state,
          resetPage,
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
