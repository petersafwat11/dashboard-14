import React from "react";
import classes from "./poll.module.css";

const Poll = ({ setPoll, poll }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Poll</h2>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              checked={poll.enabled}
              onChange={() => {
                setPoll({
                  ...poll,
                  enabled: !poll.enabled,
                });
              }}
              className={classes["toggle-checkbox"]}
              type="checkbox"
            />
            <div className={classes["toggle-switch"]}></div>
            <span className={classes["toggle-label"]}>
              {poll.enabled ? "ON" : "OFF"}
            </span>
          </label>
        </div>
      </div>
      <div className={classes["details"]}>
        {poll?.inputs &&
          poll?.inputs?.length > 0 &&
          poll?.inputs?.map((item, index) => (
            <div key={item.name} className={classes["input-group"]}>
              <label className={classes["label"]}>{`Team ${index}`}</label>
              <input
                value={item.value}
                onChange={(e) => {
                  let inputIndex = poll.inputs.findIndex(
                    (item) => item.name === `input ${index + 1}`
                  );
                  let newinput = {
                    name: `input ${inputIndex + 1}`,
                    value: e.target.value,
                  };
                  let newInputs = [...poll.inputs];
                  newInputs[inputIndex] = newinput;
                  setPoll({
                    ...poll,
                    inputs: newInputs,
                  });
                  console.log({
                    ...poll,
                    inputs: newInputs,
                  });
                }}
                placeholder={`option ${index + 1}`}
                className={classes["input"]}
              />
            </div>
          ))}
        {/* <div className={classes["input-group"]}>
          <label htmlFor="second-team" className={classes["label"]}>
            Team 2
          </label>
          <input
            value={data.secondTeamPoll}
            id="second-team"
            onChange={(e) => {
              dispatchDetail({
                type: "SECOND-TEAM-POLL",
                value: e.target.value,
              });
            }}
            placeholder="team 2"
            className={classes["input"]}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Poll;
