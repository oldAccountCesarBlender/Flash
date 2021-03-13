import { Button as BTN } from "@material-ui/core";
import React from "react";

function Button({ children, href, onClick, block }) {
  return (
    <BTN
      style={{
        border: "#3D00EA 1px solid",
        color: "#3D00EA",
        width: block ? "100%" : "auto",
      }}
      {...{ href, onClick }}
    >
      {children}
    </BTN>
  );
}

export default Button;
