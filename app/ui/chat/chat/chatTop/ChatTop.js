import Image from "next/image";
import React from "react";
import classes from "./chatTop.module.css";
const ChatTop = ({ contollChatRoom, chatRoomSelection }) => {
  return (
    <div className={classes["chat-top"]}>
      <div className={classes["chat-top-text"]}>
        Chat
        <Image
          src="/svg/chat/down-arrow.svg"
          alt="extend"
          width="14"
          height="10"
        />
        <div className={classes["chat-rooms"]}>
          {["English (Default)", "Espain", "العربية", "Français"].map(
            (i, index) => (
              <p
                onClick={() => {
                  contollChatRoom(i);
                }}
                key={index}
                className={classes[i == "العربية" ? "arabic" : "chat-room"]}
                style={{
                  background: chatRoomSelection === i ? "#03A1CD" : "inherit",
                }}
              >
                {i}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatTop;
