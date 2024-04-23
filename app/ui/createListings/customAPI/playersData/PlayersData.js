import React from "react";
import classes from "./playersData.module.css";
const PlayersData = ({ togglerLabel, label, items, dispatchAction }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["toggler"]}>
        <h3 className={classes["toggle-label"]}>{togglerLabel}</h3>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              checked={items.checked}
              onChange={() => {
                dispatchAction({
                  type: "CHECK",
                });
              }}
              className={classes["toggle-checkbox"]}
              type="checkbox"
            />
            <div className={classes["toggle-switch"]}></div>
          </label>
        </div>
      </div>
      <form className={classes["form"]}>
        {items.players.map((player, index) => (
          <div key={index} className={classes["input-group"]}>
            <label
              htmlFor={`Player ${index + 1}`}
              className={classes["label"]}
            >{`${label} ${index + 1}`}</label>
            <input
              id={`Player ${index + 1}`}
              className={classes["input"]}
              value={player.name}
              onChange={(e) => {
                dispatchAction({
                  type: "PLAYER-NAME",
                  player: {
                    index: index,
                    name: e.target.value,
                  },
                });
              }}
              placeholder=" eneter player name"
            />
          </div>
        ))}
      </form>
      <div className={classes["action-buttons"]}>
        <button
          onClick={() => {
            dispatchAction({
              type: "INCREMENT",
            });
          }}
          className={classes["add-button"]}
        >
          Add player
        </button>
        <button
          onClick={() => {
            dispatchAction({
              type: "DECREMENT",
            });
          }}
          className={classes["remove-button"]}
        >
          Remove player
        </button>
      </div>
    </div>
  );
};

export default PlayersData;
