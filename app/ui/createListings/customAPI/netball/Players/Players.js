import Image from "next/image";
import React from "react";
import classes from "./players.module.css";
const Players = ({ players, dispatchAction }) => {
  const classNames = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
  ];
  return (
    <div className={classes["stadium"]}>
      {players.firstTeam.map((player, index) => (
        <div key={index} className={classes[classNames[index]]}>
          <Image
            className={classes["team-shirt"]}
            src="/svg/watch/netball/red-player.svg"
            alt="helmet"
            width="37"
            height="35"
          />
          {/* <Image
              className={classes["team-shirt"]}
              src="/svg/watch/netball/blue-player.svg"
              alt="helmet"
              width="37"
              height="35"
            /> */}
          <input
            className={classes["input"]}
            value={player.name}
            onChange={(e) => {
              dispatchAction({
                type: "PLAYER-NAME",
                team: "firstTeam",
                player: {
                  index: index,
                  name: e.target.value,
                },
              });
            }}
            placeholder=" player name"
          />
        </div>
      ))}
      {players.secondTeam.map((player, index) => (
        <div key={index} className={classes[classNames[index + 7]]}>
          <Image
            className={classes["team-shirt"]}
            src="/svg/watch/netball/blue-player.svg"
            alt="helmet"
            width="37"
            height="35"
          />
          <input
            className={classes["input"]}
            value={player.name}
            onChange={(e) => {
              dispatchAction({
                type: "PLAYER-NAME",
                team: "secondTeam",
                player: {
                  index: index,
                  name: e.target.value,
                },
              });
              console.log("index sent", index);
            }}
            placeholder=" player name"
          />
        </div>
      ))}
    </div>
  );
};

export default Players;
