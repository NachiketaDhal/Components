import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);

  const { rgb, weight } = color;
  const hexValue = rgbToHex(...rgb);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className={" percent-value"}>{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
