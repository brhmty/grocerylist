import React, { useContext, useEffect, useRef } from "react";
import { groceryList } from "./../utilities/data";
import { MainContext } from "./MainContainer";
import { arrayChange, arrayDelete } from "./../utilities/functions";
import * as data from "./../utilities/data";

const FormAdd = () => {
  const { dispatch, state, resetPage } = useContext(MainContext);
  const inputField = useRef();

  //saveLocalStorageToAnotherArrayForNotLosingTheContentAndShowingListAtStart
  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("mainList"));
    const check = localList !== null && localList.length > 0;
    if (check) {
      dispatch({ type: "setItemId", payload: localList.length });
      dispatch({ type: "setMainList", payload: [...localList] });
      groceryList.push(...localList);
    }
  }, []);

  //toUpdateInputFieldAndButtonTextWhenEditing
  useEffect(() => {
    inputField.current.value = state.inputText;
    dispatch({ type: "setFocus", payload: inputField });
    if (state.inputText !== "") {
      dispatch({ type: "setButtonText", payload: data.edit });
      //activateFocus
      state.focus.current.focus();
    }
  }, [state.inputText]);

  //toDeleteItemFromMainList
  useEffect(() => {
    if (state.deleteItem) {
      arrayDelete(groceryList, state.deleteId);
      arrayDelete(state.mainList, state.deleteId);
      dispatch({ type: "setMainList", payload: [...state.mainList] });
      dispatch({ type: "setDeleteItem", payload: false });
      //toClearLocalStorageToo
      if (state.mainList.length === 0) {
        dispatch({ type: "setClearList", payload: true });
        resetPage();
      }
    }
  }, [state.deleteItem]);

  //addingNewItemAndUpdateMainList
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.edit && state.item.length > 0) {
      const itemId = state.itemId;
      const item = state.item;
      groceryList.push({ itemId, item });
      dispatch({ type: "setItemId", payload: state.itemId + 1 });
      dispatch({ type: "setMainList", payload: [...groceryList] });
      dispatch({ type: "setAlertType", payload: data.alertTypeAdd });
      dispatch({ type: "setAlertColor", payload: data.colorAddEdit });
      dispatch({ type: "setShowAlert", payload: true });
    }
    //toEditInputFieldAndListİtemAndUpdateMainList
    else if (state.edit && state.item.length > 0) {
      arrayChange(state.mainList, state.editId, state.item);
      dispatch({ type: "setMainList", payload: [...state.mainList] });
      dispatch({ type: "setAlertType", payload: data.alertTypeEdit });
      dispatch({ type: "setAlertColor", payload: data.colorAddEdit });
      dispatch({ type: "setShowAlert", payload: true });
      dispatch({ type: "setItem", payload: "" });
      resetPage();
    } else if (state.item.length === 0) {
      dispatch({ type: "setAlertType", payload: data.alertTypeEmpty });
      dispatch({ type: "setAlertColor", payload: data.colorEmptyWarning });
      dispatch({ type: "setShowAlert", payload: true });
    }
    inputField.current.value = "";
  };

  //toGetInput
  const handleChange = (event) => {
    dispatch({ type: "setItem", payload: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="w-11/12 mx-auto">
      <input
        type="text"
        placeholder="e.g eggs"
        ref={inputField}
        onChange={handleChange}
        className="indent-4 md:10/12 w-9/12 leading-8 mt-4 bg-colorPrimary rounded-l placeholder:text-blue-500"
      ></input>
      <button
        type="submit"
        className="md:w-2/12 w-3/12 leading-8 bg-blue-300 rounded-r"
      >
        {state.buttonText}
      </button>
    </form>
  );
};

export default FormAdd;
