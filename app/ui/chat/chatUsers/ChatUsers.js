"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import classes from "./chatUsers.module.css";
import io from "socket.io-client";
import axios from "axios";
import UserActions from "../userActions/UserActions";
import Popup from "../../popupWrapper/Popup";

const ChatUsers = () => {
  const [membersType, setMembersType] = useState("active-members");
  const [members, setMembers] = useState([]);
  const [originalBannedChatMembers, setOriginalBannedChatMembers] = useState(
    []
  );
  const [bannedChatMembers, setBannedChatMembers] = useState([]);
  const [orignalMembers, setOriginalMembers] = useState([]);
  const [showUserAction, setShowUserAction] = useState(false);
  const [userData, setUserData] = useState({});
  const [search, setSearch] = useState("");
  const socket = useRef(null);

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
    socket.current.on(`register user`, (activeMembers) => {
      console.log("active members");
      console.log(activeMembers);
      // console.log(JSON.parse(activeMembers));
      setOriginalMembers(activeMembers);
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
        const chatMembers = await axios.get(
          `${process.env.BACKEND_SERVER}/chat/chatMembers`
        );
        const bannedChatMembers = await axios.get(
          `${process.env.BACKEND_SERVER}/chat/bannedChatMembers`
        );
        console.log(
          "bannedChatMembers?.data?.data",
          bannedChatMembers?.data?.data
        );
        setOriginalBannedChatMembers(bannedChatMembers?.data?.data);
        setBannedChatMembers(bannedChatMembers?.data?.data);
        setMembers(chatMembers?.data?.data);
        setOriginalMembers(chatMembers?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatData();
  }, []);
  useEffect(() => {
    if (search === "" || search === " ") {
      if (membersType === "active-members") {
        setMembers(orignalMembers);
      } else {
        setBannedChatMembers(originalBannedChatMembers);
      }
    } else {
      if (membersType === "active-members") {
        let newMembers = orignalMembers.filter((mem) =>
          mem.name.toLowerCase().includes(search.toLowerCase())
        );
        setMembers(newMembers);
      } else {
        let newMembers = originalBannedChatMembers.filter((mem) =>
          mem.name.toLowerCase().includes(search.toLowerCase())
        );
        setBannedChatMembers(newMembers);
      }
    }
  }, [
    search,
    orignalMembers,
    setMembers,
    membersType,
    originalBannedChatMembers,
  ]);
  const banIp = async () => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/chat/bannedChatMembers
`,
        userData
      );
      setShowUserAction(false);
      setOriginalBannedChatMembers(response?.data?.data);
      setBannedChatMembers(response?.data?.data);
      console.log("response", response);
    } catch (err) {
      console.log("Error happened please try again later ", err);
    }
  };
  const muteMember = async () => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/chat/muteChatMember
`,
        userData
      );
      setShowUserAction(false);
      console.log("response", response);
    } catch (err) {
      console.log("Error happened please try again later ", err);
    }
  };
  return (
    <div className={classes["container"]}>
      {showUserAction && (
        <Popup>
          {" "}
          <UserActions userData={userData} banIp={banIp} muteMember={muteMember} />
        </Popup>
      )}
      <h2 className={classes["title"]}>Users in Chat</h2>
      <div className={classes["members"]}>
        <p
          style={{ color: membersType === "active-members" ? "white" : "" }}
          onClick={() => {
            setMembersType("active-members");
          }}
          className={
            classes[
              members === "active-members"
                ? "active-members"
                : "selected-members"
            ]
          }
        >
          Active Members
        </p>
        <p
          style={{ color: membersType !== "active-members" ? "white" : "" }}
          onClick={() => {
            setMembersType("banned-members");
          }}
          className={
            classes[
              members === "banned-members"
                ? "banned-members"
                : "selected-members"
            ]
          }
        >
          Banned Members
        </p>
      </div>
      <div className={classes["search-wrapper"]}>
        <input
          value={search}
          placeholder="Search user"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className={classes["search"]}
        />
        <Image
          className={classes["search-icon"]}
          src="/svg/chat/search.svg"
          alt="seacrh"
          width="14"
          height="14"
        />
      </div>
      <p className={classes["num-of-active-users"]}>
        Active Users:{" "}
        {membersType === "active-members"
          ? members.length
          : bannedChatMembers.length}
      </p>
      <div className={classes["active-users"]}>
        {membersType === "active-members"
          ? members.map((member, index) => (
              <div
                onClick={() => {
                  setUserData(member);
                  setShowUserAction(true);
                }}
                key={index}
                className={classes["user"]}
              >
                <div className={classes["user-details"]}>
                  <Image
                    className={classes["avatar"]}
                    src="/svg/chat/avatars/Avatars/5.svg"
                    alt="avatar"
                    height="28"
                    width="23"
                  />
                  <p className={classes["user-name"]}>{member.name}</p>
                </div>
                <p className={classes["user-id"]}>{member.ip}</p>
              </div>
            ))
          : bannedChatMembers.map((member, index) => (
              <div key={index} className={classes["user"]}>
                <div className={classes["user-details"]}>
                  <Image
                    className={classes["avatar"]}
                    src="/svg/chat/avatars/Avatars/5.svg"
                    alt="avatar"
                    height="28"
                    width="23"
                  />
                  <p className={classes["user-name"]}>{member.name}</p>
                </div>
                <p className={classes["user-id"]}>{member.ip}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ChatUsers;
