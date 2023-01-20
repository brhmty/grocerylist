import React, { useContext, useRef } from "react";
import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin2 } from "react-icons/im";
import { MainContext } from "./MainContainer";
import { alertTypeRemove } from "../utilities/data";

function ListItem() {
  const {
    mainList,
    setInputText,
    setEdit,
    setEditId,
    setDeleteItem,
    setDeleteId,
    setAlertType,
    setShowAlert,
  } = useContext(MainContext);

  const handleEdit = (event) => {
    switch (event.target.getAttribute("name")) {
      case "edit_icon":
        {
          const specificItem = mainList.find(
            (listItem) => listItem.itemId === Number(event.currentTarget.id)
          );
          setInputText(specificItem.item);
          setEdit(true);
          setEditId(event.currentTarget.id);
        }
        break;
      case "delete_icon":
        {
          setDeleteId(event.currentTarget.id);
          setDeleteItem("true");
          setAlertType(alertTypeRemove);
          setShowAlert(true);
        }
        break;
    }
  };
  return (
    <>
      {mainList.map((listItem) => {
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
