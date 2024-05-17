"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./chat.module.css";
import ChatBody from "./chatBody/ChatBody";
import ChatBottom from "./chatBottom/ChatBottom";
import ChatTop from "./chatTop/ChatTop";
// import { getData } from "@/utils/dashboardTablePagesFunctions";
import Cookies from "js-cookie";
// import { useSession } from "next-auth/react";
import io from "socket.io-client";
import axios from "axios";

const Chat = ({ chatFilteredWords, chatMessages, mode }) => {
  console.log("chatMode", mode);
  // const { data: session, status } = useSession();

  const scrollToBottom = () => {
    const chatContainer = messagesRef.current;
    console.log(
      "chatContainer chatContainer chatContainerchatContainer",
      chatContainer.scrollHeight
    );
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  const socket = io(`${process.env.BACKEND_SERVER}`);

  //chat mode
  const [chatMode, setChatMode] = useState(mode);

  const [chatRoomSelection, setChatRoomSelection] =
    useState("English (Default)");

  // message state
  const messageDefaultState = {
    username: "AJ Sports Moderator",
    message: "",
    image: "/svg/admin-profile.svg",
    room: chatRoomSelection,
    color: "#fff",
  };
  const [message, setMessage] = useState(messageDefaultState);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState(chatMessages);
  const messagesRef = useRef(null);

  // make sending effect
  const [isSending, setIsSending] = useState(false);
  const handleClick = async () => {
    try {
      // if (chatMode?.mode !== "Anyone Can Send") {
      //   return;
      // }
      const response = await axios.post(`${process.env.BACKEND_SERVER}/chat`, {
        message: message,
      });
      console.log("response", response);
      socket.emit(`chat message ${chatRoomSelection}`, message);
      setMessages((prevState) => {
        return [...prevState, message];
      });
      setMessage({
        ...message,
        message: "",
      });
      scrollToBottom();
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false);
      }, 500);
    } catch (err) {
      console.log("error", err);
    }
  };
  const inputMessageChange = (textMessage, emojie) => {
    if (!emojie) {
      setMessage({ ...message, message: textMessage });
    } else {
      setMessage({ ...message, message: message.message + textMessage });
    }
  };
  const setMentionSomeone = (mention) => {
    // setMentions((prevState)=>[...prevState, mention]);
    console.log("mention", mention);
    if (message.message.includes(`@${mention}`)) {
      return;
    }
    setMessage((prevState) => {
      if (!prevState.message.startsWith("@")) {
        return { ...prevState, message: `@${mention} ${prevState.message} ` };
      } else {
        const match = prevState.message.match(/@[^\s]+(\s+[^\s]+)*/);

        const taggedName = match[0];
        const indexOfLastSpace = taggedName.lastIndexOf(" ");
        console.log("indexOfLastSpace", indexOfLastSpace);
        if (indexOfLastSpace === -1) {
          return { ...prevState, message: `${prevState.message} @${mention} ` };
        } else {
          // Insert something after the last space
          const modifiedString =
            prevState.message.slice(0, indexOfLastSpace + 1) +
            `@${mention} ` +
            prevState.message.slice(indexOfLastSpace + 1);
          console.log("modifiedString", modifiedString);
          return { ...prevState, message: modifiedString };
        }
        return prevState;
      }
    });

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const contollChatRoom = async (room) => {
    try {
      const roomMessages = await axios.get(
        `${process.env.BACKEND_SERVER}/chat`,
        {
          params: {
            limit: 40,
            room: room,
            sort: { eventDate: 1 },
          },
        }
      );
      console.log("roomMessages", roomMessages?.data?.data?.data);
      setChatRoomSelection(room);

      setMessages([]);
      setMessage({ ...messageDefaultState, room: room });
    } catch (err) {
      console.log("error happed while loading message", err);
    }
  };

  useEffect(() => {
    // Event listeners can be added here
    socket.on(`chat message ${chatRoomSelection}`, (msg) => {
      setMessages((prevState) => {
        return [...prevState, msg];
      });

      scrollToBottom();
      console.log("message recieved", msg);
    });
    socket.on(`chat mode`, (data) => {
      console.log("chat mode updated", data);
      setChatMode(data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [socket, chatRoomSelection]);

  useEffect(() => {
    setMessage({
      message: "",
      image: "/svg/admin-profile.svg",
      room: chatRoomSelection,
      username: "AJ Sports Moderator",
      color: "#fff",
    });
  }, [chatRoomSelection]);
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatPolls = await axios.get(
          `${process.env.BACKEND_SERVER}/chat/chatPoll`,
          {
            sort: { createdAt: -1 },
          }
        );

        const chatMode = await axios.get(
          `${process.env.BACKEND_SERVER}/chat/chatMode`
        );
        setChatMode(chatMode?.data?.data?.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    const intervalId = setInterval(fetchChatData, 60000);

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div className={classes["chat"]}>
      <ChatTop
        chatRoomSelection={chatRoomSelection}
        contollChatRoom={contollChatRoom}
      />
      <ChatBody
        chatFilteredWords={chatFilteredWords}
        messagesRef={messagesRef}
        username={"AJ Sports Moderator"}
        messages={messages}
        setMentionSomeone={setMentionSomeone}
      />
      <ChatBottom
        chatMode={chatMode}
        message={message.message}
        setInputMessage={inputMessageChange}
        setMentionSomeone={setMentionSomeone}
        handleClick={handleClick}
        isSending={isSending}
        inputRef={inputRef}
      />
    </div>
  );
};

export default Chat;
