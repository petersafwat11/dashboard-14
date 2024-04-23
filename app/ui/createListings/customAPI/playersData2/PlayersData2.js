import React from "react";
import classes from "./playersData2.module.css";
const PlayersData2 = ({ togglerLabel, items, dispatchAction }) => {
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
      <div className={classes["wrapper"]}>
        <div className={classes["team"]}>
          <h3 className={classes["team-name"]}>Team 1</h3>
          <form className={classes["form"]}>
            {items.firstTeam.players.map((player, index) => (
              <div key={index} className={classes["player-data"]}>
                <div className={classes["input-group"]}>
                  <input
                    id={`Player ${index + 1}`}
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
                <div className={classes["genders"]}>
                  <div
                    onClick={() => {
                      dispatchAction({
                        type: "GENDER",
                        team: "firstTeam",

                        player: {
                          index: index,
                          gender: "Male",
                        },
                      });
                    }}
                    className={classes["male"]}
                  >
                    <p className={classes["gender-text"]}>Male</p>
                    <span
                      className={
                        classes[
                          player.gender == "Male" ? "checked" : "not-checked"
                        ]
                      }
                    ></span>
                  </div>
                  <div
                    onClick={() => {
                      dispatchAction({
                        type: "GENDER",
                        team: "firstTeam",

                        player: {
                          index: index,
                          gender: "Female",
                        },
                      });
                    }}
                    className={classes["female"]}
                  >
                    <p className={classes["gender-text"]}>Female</p>
                    <span
                      className={
                        classes[
                          player.gender == "Female" ? "checked" : "not-checked"
                        ]
                      }
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </form>
          <div className={classes["action-buttons"]}>
            <button
              onClick={() => {
                dispatchAction({
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
                dispatchAction({
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
        <div className={classes["team"]}>
          <h3 className={classes["team-name"]}>Team 2</h3>
          <form className={classes["form"]}>
            {items.secondTeam.players.map((player, index) => (
              <div key={index} className={classes["player-data"]}>
                <div className={classes["input-group"]}>
                  <input
                    id={`Player ${index + 1}`}
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
                    }}
                    placeholder=" player name"
                  />
                </div>
                <div className={classes["genders"]}>
                  <div
                    onClick={() => {
                      dispatchAction({
                        type: "GENDER",
                        team: "secondTeam",

                        player: {
                          index: index,
                          gender: "Male",
                        },
                      });
                    }}
                    className={classes["male"]}
                  >
                    <p className={classes["gender-text"]}>Male</p>
                    <span
                      className={
                        classes[
                          player.gender == "Male" ? "checked" : "not-checked"
                        ]
                      }
                    ></span>
                  </div>
                  <div
                    onClick={() => {
                      dispatchAction({
                        type: "GENDER",
                        team: "secondTeam",

                        player: {
                          index: index,
                          gender: "Female",
                        },
                      });
                    }}
                    className={classes["female"]}
                  >
                    <p className={classes["gender-text"]}>Female</p>
                    <span
                      className={
                        classes[
                          player.gender == "Female" ? "checked" : "not-checked"
                        ]
                      }
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </form>
          <div className={classes["action-buttons"]}>
            <button
              onClick={() => {
                dispatchAction({
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
                dispatchAction({
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
    </div>
  );
};

export default PlayersData2;
