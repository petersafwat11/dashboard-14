"use client";

import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Popup from "../../popupWrapper/Popup";
import MakePoll from "../makePoll/MakePoll";
import classes from "./poll.module.css";
import PollItem from "./PollItem";
import io from "socket.io-client";

const intialValue = [
  { name: "Time", value: "" },
  { name: "Question", value: "" },
  { name: "Input 1", value: "", votes: 0 },
  { name: "Input 2", value: "", votes: 0 },
];

const newPollsReducers = (prevState, action) => {
  if (action.type === "CLEARDATA") {
    return intialValue;
  }
  if (action.type === "INPUTCHANGE") {
    let newState = [...prevState];
    const itemChanged = prevState.findIndex(
      (item) => item.name === action.data.name
    );
    newState[itemChanged] = action.data;

    return newState;
  } else if (action.type === "ADDINPUT") {
    let newState = [...prevState];
    newState.push({
      name: `Input ${prevState.length - 1}`,
      value: "",
      votes: 0,
    });
    return newState;
  } else {
    if (prevState.length < 4) {
      return;
    }
    let newState = [...prevState];
    newState.pop();
    return newState;
  }
};

const Poll = ({ data }) => {
  // const socket = io(`${process.env.BACKEND_SERVER}`);
  const socket = useRef(null);
  const [activePolls, setActivePolls] = useState(data || []);
  const [selectedPolls, setSelectedPolls] = useState([]);
  const [showAddPopup, setShowPopup] = useState(false);
  const [Newpoll, dispatchAction] = useReducer(newPollsReducers, intialValue);

  const togglePopup = () => {
    setShowPopup(!showAddPopup);
    dispatchAction({ type: "CLEARDATA" });
  };
  const onDelete = async () => {
    try {
      const resultArray = activePolls.filter(
        (item) => !selectedPolls.includes(item._id)
      );

      const response = await axios.delete(
        `${process.env.BACKEND_SERVER}/chat/chatPoll`,
        { data: selectedPolls }
      );
      console.log("result", resultArray);
      setActivePolls(resultArray);
      socket.current.emit(`chat poll`, resultArray);
      setSelectedPolls([]);

      console.log("respose", response);
    } catch (err) {
      console.log(err);
    }
  };
  const onSelect = (ID) => {
    const isSelected = selectedPolls.includes(ID);
    console.log("clicked", ID);

    if (isSelected) {
      setSelectedPolls((prevVal) =>
        prevVal.filter((selectedRuleId) => selectedRuleId !== ID)
      );
      console.log("removed");
    } else {
      setSelectedPolls((prevVal) => [...prevVal, ID]);
      console.log("added");
    }
  };
  const onAdd = async () => {
    try {
      const formattedPoll = {
        time: Newpoll[0].value,
        question: Newpoll[1].value,
        inputs: Newpoll.slice(2),
        createdAt: new Date(),
      };

      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/chat/chatPoll`,
        formattedPoll
      );
      console.log("response.data.data.data", response.data.data.data);
      setActivePolls([response.data.data.data, ...activePolls]);
      socket.current.emit(`chat poll`, [
        response.data.data.data,
        ...activePolls,
      ]);

      togglePopup();

      console.log("respose", response.data.data.data);
    } catch (err) {
      console.log(err);
    }
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
        const chatPolls = await axios.get(
          `${process.env.BACKEND_SERVER}/chat/chatPoll`
        );
        setActivePolls(chatPolls?.data?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatData();
  }, []);

  return (
    <div className={classes["container"]}>
      {showAddPopup && (
        <Popup>
          <MakePoll
            togglePopup={togglePopup}
            Newpoll={Newpoll}
            dispatchAction={dispatchAction}
            confirm={onAdd}
          />
        </Popup>
      )}
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Poll</h2>
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
      <div className={classes["poll-items"]}>
        {activePolls &&
          activePolls.length > 0 &&
          activePolls.map((item, index) => (
            // <div key={item._id} className={classes["poll-item"]}>
            //   <label
            //     onClick={(e) => {
            //       onSelect(item._id);
            //       e.preventDefault();
            //     }}
            //     className={classes["custom-checkbox"]}
            //   >
            //     <input
            //       type="checkbox"
            //       checked={selectedPolls.find(
            //         (selected) => selected === item._id
            //       )}
            //     />
            //     <span className={classes["checkmark"]}></span>
            //   </label>
            //   <p className={classes["question-name"]}> {item?.question}</p>
            //   <p className={classes["text"]}>
            //     {getTimeRemainingInMinutes(item?.createdAt, item?.time)} mins
            //     remaining
            //   </p>
            // </div>
            <PollItem
              key={item._id}
              item={item}
              onSelect={onSelect}
              selectedPolls={selectedPolls}
            />
          ))}
      </div>
    </div>
  );
};

export default Poll;
