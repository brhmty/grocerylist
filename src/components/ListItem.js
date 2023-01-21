import React, { useContext } from "react";
import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin2 } from "react-icons/im";
import { MainContext } from "./MainContainer";
import * as data from "../utilities/data";

function ListItem() {
  const { dispatch, state } = useContext(MainContext);

  const handleEdit = (event) => {
    switch (event.target.getAttribute("name")) {
      case "edit_icon":
        {
          const specificItem = state.mainList.find(
            (listItem) => listItem.itemId === Number(event.currentTarget.id)
          );
          dispatch({ type: "setInputText", payload: specificItem.item });
          dispatch({ type: "setEdit", payload: true });
          dispatch({ type: "setEditId", payload: event.currentTarget.id });
        }
        break;
      case "delete_icon":
        {
          dispatch({ type: "setDeleteId", payload: event.currentTarget.id });
          dispatch({ type: "setDeleteItem", payload: true });
          dispatch({ type: "setAlertType", payload: data.alertTypeRemove });
          dispatch({ type: "setAlertColor", payload: data.colorDeleteClear });
          dispatch({ type: "setShowAlert", payload: true });
        }
        break;
      default: {
        throw new Error();
      }
    }
  };
  return (
    <>
      {state.mainList.map((listItem) => {
        return (
          <div
            key={listItem.itemId}
            id={listItem.itemId}
            onClick={handleEdit}
            className="flex justify-between md:w-11/12 w-10/12 h-8 mx-auto mt-8 px-5"
          >
            <p>{listItem.item}</p>
            <div className="flex justify-between md:w-1/12 w-2/12">
              <button name="edit_icon" className="w-fit h-fit">
                <TfiPencilAlt
                  name="edit_icon"
                  className="text-green-500 pointer-events-none"
                />
              </button>
              <button name="delete_icon" className="w-fit h-fit">
                <ImBin2 className="text-red-500 pointer-events-none" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListItem;
