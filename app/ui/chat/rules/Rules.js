"use client";
import axios from "axios";
import React, { useState } from "react";
import Popup from "../../popupWrapper/Popup";
import AddNew from "../addNew/AddNew";
import { handleSelectItem } from "../chatFunctions/ChatFunctions";
import classes from "./rules.module.css";
const Rules = ({ data }) => {
  const chatRulesId = data?._id;
  console.log("rules", data);
  const [selectedRules, setSelectedRules] = useState([]);
  const [rules, setRules] = useState(data?.rules);
  const [newRuleVal, setNewRuleVal] = useState("");
  const [showAddPopup, setShowPopup] = useState(false);

  const handleChange = (val) => {
    setNewRuleVal(val);
  };
  const togglePopup = () => {
    setShowPopup(!showAddPopup);
    setNewRuleVal("");
  };
  const onDelete = async () => {
    try {
      const resultArray = rules.filter((item) => !selectedRules.includes(item));

      const response = await axios.patch(
        `${process.env.BACKEND_SERVER}/chat/chatRules/${chatRulesId}`,
        { rules: resultArray }
      );
      setRules(resultArray);
      setSelectedRules([]);

      console.log("respose", response);
    } catch (err) {
      console.log(err);
    }
  };
  const onSelect = (item) => {
    handleSelectItem(item, selectedRules, setSelectedRules);
  };
  const onAdd = async () => {
    try {
      const response = await axios.patch(
        `${process.env.BACKEND_SERVER}/chat/chatRules/${chatRulesId}`,
        { rules: [...rules, newRuleVal] }
      );
      setRules((prevVal) => {
        return [...prevVal, newRuleVal];
      });
      togglePopup();

      console.log("respose", response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Chat Rules</h2>
        <div className={classes["actions"]}>
          <button
            onClick={() => {
              togglePopup();
            }}
            className={classes["add"]}
          >
            Add
          </button>
          <button onClick={onDelete} className={classes["delete"]}>
            Delete
          </button>
        </div>
      </div>
      <div className={classes["rules"]}>
        {rules &&
          rules.length > 0 &&
          rules.map((item, index) => (
            <div key={index + item} className={classes["rule"]}>
              <label
                onChange={() => {
                  onSelect(item);
                }}
                className={classes["custom-checkbox"]}
              >
                <input type="checkbox" />
                <span className={classes["checkmark"]}></span>
              </label>
              <p className={classes["rule-para"]}>
                <span className={classes["num"]}>{index + 1}.</span> {item}
              </p>
            </div>
          ))}
      </div>
      {showAddPopup && (
        <Popup>
          <AddNew
            togglePopup={togglePopup}
            newRuleVal={newRuleVal}
            handleChange={handleChange}
            handleAddItem={onAdd}
          />
        </Popup>
      )}
      {/* <PAginations /> */}
    </div>
  );
};

export default Rules;
