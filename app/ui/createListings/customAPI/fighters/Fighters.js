import React from "react";
import classes from "./fighters.module.css";
const Fighters = ({ fighters, dispatchfighters }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["toggler"]}>
        <h3 className={classes["toggle-label"]}>{"FIGHTERS"}</h3>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              checked={fighters.checked}
              onChange={() => {
                dispatchfighters({
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
      <div className={classes["card"]}>
        <h3 className={classes["card-title"]}>MAIN CARD</h3>
        <div className={classes["players-data"]}>
          {fighters.firstTeam.players.map((player, index) => (
            <div key={index} className={classes["player-data"]}>
              <input
                className={classes["name-input"]}
                value={player.name}
                onChange={(e) => {
                  dispatchfighters({
                    type: "PLAYER-NAME",
                    team: "firstTeam",
                    player: {
                      index: index,
                      name: e.target.value,
                    },
                  });
                }}
                placeholder=" player-name"
              />
              <input
                value={player.result}
                onChange={(e) => {
                  dispatchfighters({
                    type: "RESULT",
                    team: "firstTeam",
                    player: {
                      index: index,
                      result: e.target.value,
                    },
                  });
                }}
                className={classes["age-input"]}
                placeholder=" player-age"
              />
            </div>
          ))}
        </div>
        <div className={classes["action-buttons"]}>
          <button
            onClick={() => {
              dispatchfighters({
                team: "firstTeam",

                type: "INCREMENT",
              });
            }}
            className={classes["add-button"]}
          >
            Add player
          </button>
          <button
            onClick={() => {
              dispatchfighters({
                team: "firstTeam",
                type: "DECREMENT",
              });
            }}
            className={classes["remove-button"]}
          >
            Remove player
          </button>
        </div>
      </div>
      <div className={classes["card"]}>
        <h3 className={classes["card-title"]}>PRELIMINARY CARD</h3>
        <div className={classes["players-data"]}>
          {fighters.secondTeam.players.map((player, index) => (
            <div key={index} className={classes["player-data"]}>
              <input
                className={classes["name-input"]}
                value={player.name}
                onChange={(e) => {
                  dispatchfighters({
                    type: "PLAYER-NAME",
                    team: "secondTeam",
                    player: {
                      index: index,
                      name: e.target.value,
                    },
                  });
                }}
                placeholder=" player-name"
              />
              <input
                value={player.result}
                onChange={(e) => {
                  dispatchfighters({
                    type: "RESULT",
                    team: "secondTeam",
                    player: {
                      index: index,
                      result: e.target.value,
                    },
                  });
                }}
                className={classes["age-input"]}
                placeholder=" player-age"
              />
            </div>
          ))}
        </div>
        <div className={classes["action-buttons"]}>
          <button
            onClick={() => {
              dispatchfighters({
                team: "secondTeam",
                type: "INCREMENT",
              });
            }}
            className={classes["add-button"]}
          >
            Add player
          </button>
          <button
            onClick={() => {
              dispatchfighters({
                team: "secondTeam",
                type: "DECREMENT",
              });
            }}
            className={classes["remove-button"]}
          >
            Remove player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fighters;
