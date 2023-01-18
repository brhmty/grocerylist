import React from "react";
import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin2 } from "react-icons/im";

function ListItem() {
  return (
    <div className="flex justify-between md:w-11/12 w-10/12 mx-auto mt-8 px-5 ">
      <p>listItem</p>
      <div className="flex justify-between md:w-1/12 w-2/12">
        <TfiPencilAlt className="text-green-500" />
        <ImBin2 className="text-red-500" />
      </div>
    </div>
  );
}

export default ListItem;
