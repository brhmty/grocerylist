import React from "react";
import Title from "./Title";
import FormAdd from "./FormAdd";
import Alert from "./Alert";
import ListItem from "./ListItem";
import ClearList from "./ClearList";

const MainContainer = () => {
  return (
    <div className="main-container md:w-5/12 w-10/12 min-h-[9rem] bg-white mx-auto my-36 drop-shadow-xl">
      <Alert />
      <Title />
      <FormAdd />
      <ListItem />
      <ClearList />
    </div>
  );
};

export default MainContainer;
