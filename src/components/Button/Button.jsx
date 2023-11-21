import PropTypes from "prop-types";
import React from "react";
import { IconRelume17 } from "../../icons/IconRelume17";
import "./style.css";

export const Button = ({ style, small, darkMode, iconPosition, className, divClassName, text = "Button" }) => {
  return (
    <button className={`button ${iconPosition} ${style} small-${small} dark-mode-${darkMode} ${className}`}>
      {iconPosition === "no-icon" && <div className={`text-wrapper ${divClassName}`}>{text}</div>}

      {iconPosition === "trailing" && <div className="text-wrapper-2">{text}</div>}

      {["leading", "trailing"].includes(iconPosition) && (
        <IconRelume17
          className="icon-relume"
          color={
            (darkMode && style === "primary") || (!darkMode && style === "link") || (!darkMode && style === "secondary")
              ? "black"
              : "white"
          }
        />
      )}

      {iconPosition === "leading" && <div className="text-wrapper-3">{text}</div>}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary", "link", "secondary"]),
  small: PropTypes.bool,
  darkMode: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["no-icon", "trailing", "leading"]),
  text: PropTypes.string,
};
