import React from "react";
import classes from "./mainEvent.module.css";
const MainEvent = ({ mainEvent, dispatchMainEvent }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["toggler"]}>
        <h3 className={classes["toggle-label"]}>{"MAIN EVENT"}</h3>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              checked={mainEvent.checked}
              onChange={() => {
                dispatchMainEvent({
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
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <input
            className={classes["name-input"]}
            value={mainEvent.players[0].name}
            onChange={(e) => {
              dispatchMainEvent({
                type: "name",
                player: { index: 0, value: e.target.value },
              });
            }}
            placeholder="first player"
          />
          <input
            className={classes["name-input"]}
            value={mainEvent.players[1].name}
            onChange={(e) => {
              dispatchMainEvent({
                type: "name",
                player: { index: 1, value: e.target.value },
              });
            }}
            placeholder="second player"
          />
        </div>
        <div className={classes["body"]}>
          {["age", "height", "weight", "reach", "record"].map((item, index) => (
            <div key={index} className={classes["data-item"]}>
              <input
                className={classes["num-input"]}
                value={mainEvent.players[0][item]}
                onChange={(e) => {
                  dispatchMainEvent({
                    type: item,
                    player: { index: 0, value: e.target.value },
                  });
                }}
                placeholder="val"
              />
              <p className={classes["middle"]}>{item}</p>
              <input
                className={classes["num-input"]}
                value={mainEvent.players[1][item]}
                onChange={(e) => {
                  dispatchMainEvent({
                    type: item,
                    player: { index: 1, value: e.target.value },
                  });
                }}
                placeholder="val"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainEvent;
