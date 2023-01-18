import React from "react";
import * as variables from "../utilities/variables.js";

const Title = () => {
  return (
    <h2 className="title_main_container w-48 leading-10 text-center mx-auto pt-3 md:text-3xl text-xl text-[#063251] font-bold ">
      {variables.title_mainContainer}
    </h2>
  );
};

export default Title;
