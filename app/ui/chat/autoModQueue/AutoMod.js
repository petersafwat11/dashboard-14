// "use client";
// import React, { useEffect, useState } from "react";
// import classes from "./autoMode.module.css";
// import io from "socket.io-client";
// import axios from "axios";

// const AutoMod = ({ data }) => {
//   const getSubString = (string) => {
//     let i = string.indexOf(" ");
//     let rest = string.substring(i);
//     return rest;
//   };
//   const socket = io(`${process.env.BACKEND_SERVER}`);

//   const [messages, setMessages] = useState(data);

//   useEffect(() => {
//     // Event listeners can be added here
//     socket.on(`slow mode`, (msg) => {
//       setMessages((prevState) => {
//         return [...prevState, msg];
//       });
//       console.log("message ", msg);
//     });

//     // Clean up the socket connection when the component unmounts
//     return () => {
//       socket.disconnect();
//     };
//   }, [socket]);

//   const onAllowMessage = async (messageClicked) => {
//     try {
//       const response = await axios.patch(
//         `${process.env.BACKEND_SERVER}/chat/${messageClicked._id}`,
//         {
//           mode: "normal",
//         }
//       );
//       console.log("edit message", response);
//       const newMessages = messages.filter((message) => {
//         message?._id !== messageClicked?._id;
//       });
//       setMessages(newMessages);
//       socket.emit(`chat message ${messageClicked?.room}`, messageClicked);
//     } catch (err) {
//       console.log("Error :", err);
//     }
//   };
//   const ondenyMessage = async () => {
//     try {
//       const response = await axios.delete(
//         `${process.env.BACKEND_SERVER}/chat`,
//         { data: [messageClicked._id] }
//       );
//       console.log("message deleted", response);
//       const newMessages = messages.filter((message) => {
//         message?._id !== messageClicked?._id;
//       });
//       setMessages(newMessages);
//     } catch (err) {
//       console.log("Error :", err);
//     }
//   };
//   const onAllowAllMessages = async () => {
//     try {
//       const response = await axios.patch(
//         `${process.env.BACKEND_SERVER}/chat`,

//         {
//           idsToUpdate: messages.map((message) => {
//             return message._id;
//           }),
//           updateData: {
//             mode: "normal",
//           },
//         }
//       );
//       console.log("edit message", response);

//       const messagesByRoom = {};

//       // Group messages by room
//       messages.forEach((message) => {
//         const room = message.room;
//         if (!messagesByRoom[room]) {
//           messagesByRoom[room] = [];
//         }
//         messagesByRoom[room].push(message);
//       });

//       // Emit messages to their corresponding rooms in bulk
//       Object.entries(messagesByRoom).forEach(([room, roomMessages]) => {
//         console.log('roomMessages',roomMessages)
//         socket.emit(`chat message ${room}`, roomMessages);
//       });
//       setMessages([]);
//     } catch (err) {
//       console.log("Error :", err);
//     }
//   };
//   const ondenyAllMessages = async () => {
//     try {
//       const response = await axios.delete(
//         `${process.env.BACKEND_SERVER}/chat`,
//         {
//           data: messages.map((message) => {
//             return message._id;
//           }),
//         }
//       );
//       setMessages([]);
//     } catch (err) {
//       console.log("Error :", err);
//     }
//   };
//   return (
//     <div className={classes["container"]}>
//       <div className={classes["top"]}>
//         <h2 className={classes["title"]}>Auto Mod Queue</h2>
//         <div className={classes["actions"]}>
//           <button onClick={onAllowAllMessages} className={classes["allow-all"]}>
//             Allow ALL
//           </button>
//           <button onClick={ondenyAllMessages} className={classes["deny-all"]}>
//             Deny ALL
//           </button>
//         </div>
//       </div>
//       <div className={classes["messages-wrapper"]}>
//         {messages?.map((message, index) => (
//           <div key={message?._id} className={classes["message-wrapper"]}>
//             <div className={classes["message-data"]}>
//               <div className={classes["message-details"]}>
//                 <p className={classes["message-username"]}>
//                   {message.username}
//                 </p>
//                 {/* <p className={classes["message-time"]}>{message.time}</p> */}
//               </div>
//               <div className={classes["message-content"]}>
//                 {message.message.charAt(0) === "@" && (
//                   <span className={classes["mention-user"]}>
//                     {message.message.split(" ")[0]}
//                   </span>
//                 )}
//                 {getSubString(message.message)}
//               </div>
//             </div>
//             <div className={classes["messages-actions"]}>
//               <button
//                 onClick={() => {
//                   onAllowMessage(message);
//                 }}
//                 className={classes["add"]}
//               >
//                 Allow
//               </button>
//               <button
//                 onClick={() => {
//                   ondenyMessage(message);
//                 }}
//                 className={classes["delete"]}
//               >
//                 Deny
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AutoMod;
import React from "react";

const AutoMod = () => {
  return <div>AutoMod</div>;
};

export default AutoMod;
