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
import ArrowDown from "./arrowDown/ArrowDown";

const Chat = ({ chatFilteredWords, chatMessages, mode }) => {
  const scrollToBottom = () => {
    const chatContainer = messagesRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  const socket = useRef(null);

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
  const [showArrowDown, setShowArrowDown] = useState(false);
  const inputRef = useRef(null);
  const oldScrollHeightRef = useRef(0);
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  // make sending effect
  const [isSending, setIsSending] = useState(false);
  const handleClick = async () => {
    try {
      // if (chatMode?.mode !== "Anyone Can Send") {
      //   return;
      // }
      await axios.post(`${process.env.BACKEND_SERVER}/chat`, {
        message: message,
      });
      socket.current.emit(`chat message English (Default)`, message);

      setMessages((prevState) => {
        return [...prevState, message];
      });
      setMessage({
        ...message,
        message: "",
      });
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
    socket.current.on(`chat message English (Default)`, (msg) => {
      setMessages((prevState) => {
        return [...prevState, msg];
      });
      console.log("message recieved", msg);
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
          `${process.env.BACKEND_SERVER}/chat/chatPoll`,
          {
            sort: { createdAt: -1 },
          }
        );
        const response = await axios.get(`${process.env.BACKEND_SERVER}/chat`, {
          params: {
            limit: 20,
            room: "English (Default)",
            sort: { _id: -1 },
            mode: "normal",
          },
        });
        setMessages(response?.data?.data?.data.reverse());

        const chatMode = await axios.get(
          `${process.env.BACKEND_SERVER}/chat/chatMode`
        );
        setChatMode(chatMode?.data?.data?.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatData();
    const intervalId = setInterval(fetchChatData, 60000);

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const ref = messagesRef.current;
    const getPrevMessages = async () => {
      const response = await axios.get(`${process.env.BACKEND_SERVER}/chat`, {
        params: {
          limit: 20,
          skip: messages.length,
          room: "English (Default)",
          sort: { _id: -1 },
          mode: "normal",
        },
      });
      console.log("response?.data?.data?.data.reverse", response?.data?.data);
      setMessages((prev) => {
        return [...response?.data?.data?.data.reverse(), ...prev];
      });
    };

    const handleScroll = async () => {
      if (
        messagesRef.current.scrollHeight - messagesRef.current.scrollTop >
        700
      ) {
        setShowArrowDown(true);
      } else {
        setShowArrowDown(false);
      }
      if (messagesRef.current.scrollTop === 0) {
        oldScrollHeightRef.current = messagesRef.current.scrollHeight;
        await getPrevMessages();
      }
    };

    if (ref) {
      ref.scrollTop = ref.scrollHeight;
      // Attach the scroll event handler
      ref.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, [messages]);
  useEffect(() => {
    // Adjust the scroll position after messages are updated
    if (messagesRef.current) {
      const newScrollHeight = messagesRef.current.scrollHeight;
      if (
        newScrollHeight - oldScrollHeightRef.current < 200 &&
        messagesRef.current.scrollHeight - messagesRef.current.scrollTop < 500
      ) {
        {
          scrollToBottom();
        }
      } else {
        messagesRef.current.style.scrollBehavior = "auto";
        messagesRef.current.scrollTop =
          newScrollHeight - oldScrollHeightRef.current;
        messagesRef.current.style.scrollBehavior = "smooth";
      }
    }
  }, [messages]);

  // Empty array ensures that effect is only run on mount and unmount

  return (
    <div className={classes["chat"]}>
      {showArrowDown && <ArrowDown scrollDown={scrollToBottom} />}
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
