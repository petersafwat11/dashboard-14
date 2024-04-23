import React from "react";
import classes from "./addNew.module.css";
const AddNew = ({ newRuleVal, handleChange, togglePopup, handleAddItem }) => {
  return (
    <div className={classes["container"]}>
      <h3 className={classes["title"]}>Add New Rule</h3>
      <input
        className={classes["input"]}
        value={newRuleVal}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder={`enter the new rule`}
      />
      <div className={classes["actions"]}>
        <button onClick={handleAddItem} className={classes["confirm"]}>
          Confirm
        </button>
        <button onClick={togglePopup} className={classes["cancel"]}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNew;
