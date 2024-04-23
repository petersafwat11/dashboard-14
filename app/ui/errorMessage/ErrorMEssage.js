import Link from "next/link";
import React from "react";
import classes from "./errorMessage.module.css";
const ErrorMEssage = ({ message, pathname }) => {
  return (
    <div className={classes["container"]}>
      <p className={classes["error-message"]}>{message}</p>
      <Link
        href={pathname.slice(0, pathname.lastIndexOf("/"))}
        className={classes["link"]}
    >
      back
    </Link>
    </div>
  );
};

export default ErrorMEssage;
