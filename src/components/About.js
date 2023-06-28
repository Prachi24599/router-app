import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function clickHandler() {
    //move to support page
    navigate("/support");
  }

  return (
    <div>
      About
      <button onClick={clickHandler}>Move to support Page</button>
    </div>
  );
};

export default About;
