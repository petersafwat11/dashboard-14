import React from "react";
import classes from "./teamsNames.module.css";
const TeamsNames = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Event team names</h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="first-team" className={classes["label-0"]}>
            TITLE
          </label>
          <input
            value={data.teamsTitle}
            id="first-team"
            onChange={(e) => {
              dispatchDetail({
                type: "TEAMS-TITLE",
                value: e.target.value,
              });
            }}
            placeholder="Teams Title"
            className={classes["input-0"]}
          />
        </div>
        <div className="or-wrapper">
          <span>Or</span>
        </div>

        <div className={classes["input-group"]}>
          <label htmlFor="first-team" className={classes["label-1"]}>
            Team 1
          </label>
          <input
            value={data.firstTeamName}
            id="first-team"
            onChange={(e) => {
              dispatchDetail({
                type: "FIRST-TEAM-NAME",
                value: e.target.value,
              });
            }}
            placeholder="team 1"
            className={classes["input-1"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="second-team" className={classes["label-2"]}>
            Team 2
          </label>
          <input
            value={data.secondTeamName}
            id="second-team"
            onChange={(e) => {
              dispatchDetail({
                type: "SECOND-TEAM-NAME",
                value: e.target.value,
              });
            }}
            placeholder="team 2"
            className={classes["input-2"]}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamsNames;
