import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();
  function clickHandler() {
    //move to about page
    navigate("/about");
  }
  return (
    <div>
      Labs
      <button onClick={clickHandler}>Move to about Page</button>
    </div>
  );
};

export default Labs;
