"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./settings.module.css";
import axios from "axios";
import io from "socket.io-client";

const Settings = ({ data }) => {
  const socket = useRef(null);

  const [chatMode, setChatMode] = useState();

  const [error, setError] = useState(false);
  const toggleSlowMode = () => {
    setChatMode({
      ...chatMode,
      slowMode: { ...chatMode.slowMode, value: !chatMode?.slowMode?.value },
    });
  };
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
      socket.current.emit(`chat mode`, chatMode);
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
  useEffect(() => {
    if (!socket.current || !socket?.current?.connected) {
      socket.current = io(`${process.env.STATIC_SERVER}`, {
        autoConnect: false,
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
      });

      socket.current.connect();
    }

    socket.current.on("connect", () => {
      console.log("Connected to socket server");
    });
    socket.current.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [socket]);
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatMode = await axios.get(
          `${process.env.BACKEND_SERVER}/chat/chatMode`
        );
        setChatMode(chatMode?.data?.data?.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatData();
  }, []);

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
                    <input
                      readOnly
                      checked={item === chatMode?.mode}
                      type="checkbox"
                    />
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
