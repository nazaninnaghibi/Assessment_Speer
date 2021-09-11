import React from "react";
import "./Button.scss";

const STYLES = [
    "imgBtn--primary--solid",
    "imgBtn--warning--solid",
    "imgBtn--danger--solid",
    "imgBtn--success--solid",
    "imgBtn--primary--outline",
    "imgBtn--warning--outline",
    "imgBtn--danger--outline",
    "imgBtn--success--outline",
]

const SIZES = ["imgBtn--medium", "imgBtn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
          {children}
      </button>
  )
};