import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    //move to labs page
    navigate("/labs");
  }
  return (
    <div>
      Support
      <button onClick={clickHandler}>Move to labs Page</button>
    </div>
  );
};

export default Support;
