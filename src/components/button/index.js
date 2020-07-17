import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.btnClick();
      }}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
