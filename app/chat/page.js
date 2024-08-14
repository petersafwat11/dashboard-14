import React from "react";
import classes from "./page.module.css";
import Settings from "../ui/chat/settings/Settings";
import Poll from "../ui/chat/poll/Poll";
import ChatUsers from "../ui/chat/chatUsers/ChatUsers";
import UserActions from "../ui/chat/userActions/UserActions";
import FilteredWords from "../ui/chat/filteredWords/FilteredWords";
import Rules from "../ui/chat/rules/Rules";
import Chat from "../ui/chat/chat/Chat";
import axios from "axios";
const page = async () => {
  const chatRules = await axios.get(
    `${process.env.BACKEND_SERVER}/chat/chatRules`
  );
  const chatFilteredWords = await axios.get(
    `${process.env.BACKEND_SERVER}/chat/chatFilteredWords`
  );
  const chatPolls = await axios.get(
    `${process.env.BACKEND_SERVER}/chat/chatPoll`
  );
  const chatMode = await axios.get(
    `${process.env.BACKEND_SERVER}/chat/chatMode`
  );
  const chatMessages = await axios.get(`${process.env.BACKEND_SERVER}/chat`, {
    params: {
      limit: 0,
      room: "English (Default)",
      sort: { eventDate: 1 },
      mode: "normal",
    },
  });

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Chat Settings</h1>
      <div className={classes["wrapper"]}>
        <div className={classes["first"]}>
          <Chat
            mode={chatMode?.data?.data?.data}
            chatFilteredWords={chatFilteredWords?.data?.data?.data[0]?.words}
            chatMessages={chatMessages?.data?.data?.data}
          />
          <Settings data={chatMode?.data?.data?.data} />
          {/* <AutoMod data={chatMessages?.data?.data} /> */}
          <Poll data={chatPolls?.data?.data?.data} />
        </div>
        <div className={classes["second"]}>
          <ChatUsers />

          <FilteredWords data={chatFilteredWords?.data?.data?.data[0]} />
          <Rules data={chatRules?.data?.data?.data[0]} />
        </div>
      </div>
    </div>
  );
};

export default page;
