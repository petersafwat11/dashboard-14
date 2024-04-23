import React from "react";
import classes from "./featuredFighters.module.css";
const FeaturedFighters = ({ featuredFighters, dispatchfeaturedFighters }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["toggler"]}>
        <h3 className={classes["toggle-label"]}>FEATURED FIGHERS</h3>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              checked={featuredFighters.checked}
              onChange={() => {
                dispatchfeaturedFighters({
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
      <div className={classes["players-data"]}>
        {featuredFighters.players.map((player, index) => (
          <div key={index} className={classes["player-data"]}>
            <input
              id={`Player ${index + 1}`}
              className={classes["name-input"]}
              value={player.name}
              onChange={(e) => {
                dispatchfeaturedFighters({
                  type: "PLAYER-NAME",
                  player: {
                    index: index,
                    name: e.target.value,
                  },
                });
              }}
              placeholder=" player-name"
            />
            <input
              onChange={(e) => {
                dispatchfeaturedFighters({
                  type: "PLAYER-AGE",
                  player: {
                    index: index,
                    age: e.target.value,
                  },
                });
              }}
              id={`Player ${index + 1}`}
              className={classes["age-input"]}
              value={player.age || ""}
              placeholder=" player-age"
            />
          </div>
        ))}
      </div>
      <div className={classes["action-buttons"]}>
        <button
          onClick={() => {
            dispatchfeaturedFighters({
              type: "INCREMENT",
            });
          }}
          className={classes["add-button"]}
        >
          Add player
        </button>
        <button
          onClick={() => {
            dispatchfeaturedFighters({
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

export default FeaturedFighters;
