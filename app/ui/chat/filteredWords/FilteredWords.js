"use client";
import axios from "axios";
import React, { useState } from "react";
import AddNew from "../addNew/AddNew";
import { handleSelectItem } from "../chatFunctions/ChatFunctions";
import classes from "./style.module.css";
import Popup from "../../popupWrapper/Popup";
const FilteredWords = ({ data }) => {
  const arrayId = data?._id;
  console.log("filtered", data);

  const [forbiddenWords, setForbiddenWords] = useState(data?.words);
  const [selectedWords, setSelectedWords] = useState([]);
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
      const resultArray = forbiddenWords.filter(
        (item) => !selectedWords.includes(item)
      );

      const response = await axios.patch(
        `${process.env.BACKEND_SERVER}/chat/chatFilteredWords/${arrayId}`,
        { words: resultArray }
      );
      setForbiddenWords(resultArray);
      setSelectedWords([]);
      console.log("response", response);
    } catch (err) {
      console.log("error", err);
    }
  };
  const onSelect = (item) => {
    handleSelectItem(item, selectedWords, setSelectedWords);
  };
  const onAdd = async () => {
    try {
      const response = await axios.patch(
        `${process.env.BACKEND_SERVER}/chat/chatFilteredWords/${arrayId}`,
        { words: [...forbiddenWords, newRuleVal] }
      );
      setForbiddenWords((prevVal) => {
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

      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Filtered Words</h2>
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
      <div className={classes["forbidden-words"]}>
        {forbiddenWords &&
          forbiddenWords.length > 0 &&
          forbiddenWords.map((item, index) => (
            <div key={index + item} className={classes["group"]}>
              <label
                onChange={() => {
                  onSelect(item);
                }}
                className={classes["custom-checkbox"]}
              >
                <input type="checkbox" />
                <span className={classes["checkmark"]}></span>
              </label>
              <p className={classes["forbidden-word"]}>{item}</p>
            </div>
          ))}
      </div>

      {/* <Paginations /> */}
    </div>
  );
};

export default FilteredWords;
