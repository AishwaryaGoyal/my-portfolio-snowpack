import React from "react";

function Button(props) {
  return (
    <button className={props.className} type="button" id={props.id}>
      {props.text}
    </button>
  );
}

export default Button;
