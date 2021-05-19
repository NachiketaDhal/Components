import React from "react";

const Alert = ({ alert }) => {
  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
};

export default Alert;
