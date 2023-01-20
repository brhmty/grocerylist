import React, { useState, useContext, useEffect, useRef } from "react";
import { groceryList } from "./../utilities/data";
import { MainContext } from "./MainContainer";
import { arrayChange, arrayDelete } from "./../utilities/functions";
import * as data from "./../utilities/data";

const FormAdd = () => {
  const {
    mainList,
    setMainList,
    inputText,
    itemId,
    setItemId,
    edit,
    setEdit,
    editId,
    buttonText,
    setButtonText,
    deleteItem,
    deleteId,
    setDeleteItem,
    setClearList,
    setAlertType,
    setShowAlert,
  } = useContext(MainContext);
  const [item, setItem] = useState("");
  const inputField = useRef();

  //saveLocalStorageToAnotherArrayForNotLosingTheContentAndShowingListAtStart
  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("mainList"));
    const check = localList !== null && localList.length > 0;
    if (check) {
      setItemId(localList.length);
      setMainList([...localList]);
      groceryList.push(...localList);
    }
  }, []);

  //toUpdateInputFieldAndButtonTextWhenEditing
  useEffect(() => {
    inputField.current.value = inputText;
    if (inputText !== "") setButtonText(data.edit);
  }, [inputText]);

  //toDeleteItemFromMainList
  useEffect(() => {
    if (deleteItem) {
      arrayDelete(groceryList, deleteId);
      arrayDelete(mainList, deleteId);
      setMainList([...mainList]);
      setDeleteItem(false);
      //toClearLocalStorageToo
      if (mainList.length === 0) setClearList(true);
    }
  }, [deleteItem]);

  //addingNewItemAndUpdateMainList
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      groceryList.push({ itemId, item });
      setItemId(itemId + 1);
      setMainList([...groceryList]);
      setAlertType(data.alertTypeAdd);
      setShowAlert(true);
    }
    //toEditInputFieldAndListİtemAndUpdateMainList
    else {
      arrayChange(mainList, editId, item);
      setMainList([...mainList]);
      setEdit(false);
      setButtonText(data.submit);
    }
    inputField.current.value = "";
  };

  //toGetInput
  const handleChange = (event) => {
    setItem(event.target.value);
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
        {buttonText}
      </button>
    </form>
  );
};

export default FormAdd;
