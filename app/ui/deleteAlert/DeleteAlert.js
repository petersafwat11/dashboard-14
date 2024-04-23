import React from "react";
import classes from "./deleteAlert.module.css";
const DeleteAlert = ({ cancelFunc, deleteFunc }) => {
  return (
    <div className={classes["container"]}>
      <p className={classes["warning-messag"]}>
        are you sure u want to delete the selected elements?{" "}
      </p>
      <div className={classes["actions"]}>
        <button onClick={deleteFunc} className={classes["delete"]}>
          Delete
        </button>
        <button onClick={cancelFunc} className={classes["cancel"]}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
