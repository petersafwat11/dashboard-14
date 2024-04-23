"use client";
import React, { useState } from "react";
import classes from "./settings.module.css";
import axios from "axios";
import io from "socket.io-client";

const Settings = ({ data }) => {
  const [chatMode, setChatMode] = useState(data[0]);

  const [error, setError] = useState(false);
  const toggleSlowMode = () => {
    setChatMode({
      ...chatMode,
      slowMode: { ...chatMode.slowMode, value: !chatMode?.slowMode?.value },
    });
  };
  const socket = io(`${process.env.STATIC_SERVER}`);

  const onSave = async () => {
    if (chatMode?.slowMode?.value && chatMode?.slowMode?.time < 1) {
      setError(true);
      return;
    }
    try {
      const response = await axios.patch(
        `${process.env.BACKEND_SERVER}/chat/chatMode/${data[0]?._id}`,
        chatMode
      );
      socket.emit(`chat mode`, chatMode);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to remove any non-digit characters
    const sanitizedValue = inputValue.replace(/\D/g, "");
    setChatMode({
      ...chatMode,
      slowMode: { ...chatMode.slowMode, time: sanitizedValue },
    });
  };

  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Chat settings</h2>
      <div className={classes["settings"]}>
        <div className={classes["first"]}>
          <div className={classes["toggle-slow-mode"]}>
            <p>Slow Mode</p>
            <div className={classes["toggler-wrapper"]}>
              <label className={classes["toggle"]}>
                <input
                  checked={chatMode?.slowMode?.value}
                  onChange={toggleSlowMode}
                  className={classes["toggle-checkbox"]}
                  type="checkbox"
                />
                <div className={classes["toggle-switch"]}></div>
              </label>
            </div>
          </div>
          <input
            value={chatMode?.slowMode?.time}
            placeholder="Enter seconds"
            onChange={handleChange}
            className={classes["input"]}
            disabled={!chatMode?.slowMode?.value ? true : false}
          />
          {error && (
            <p className={classes["error"]}> please enter the num of seconds</p>
          )}
          <button onClick={onSave} className={classes["save-button"]}>
            Save changes
          </button>
        </div>
        <div className={classes["second"]}>
          <h4 className={classes["sub-title"]}>Mode</h4>
          <div className={classes["options"]}>
            {["Anyone Can Send", "Only Moderators", "No One"].map(
              (item, index) => (
                <div key={index + index} className={classes["option-group"]}>
                  <label
                    onClick={() => {
                      setChatMode({ ...chatMode, mode: item });
                      console.log("checked");
                    }}
                    className={classes["custom-checkbox"]}
                  >
                    <input checked={item === chatMode?.mode} type="checkbox" />
                    <span className={classes["checkmark"]}></span>
                  </label>
                  <label className={classes["label"]}>{item} </label>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
