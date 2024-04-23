import React from "react";
import classes from "./teamsLogos.module.css";
const TeamsLogos = ({ dispatchDetail }) => {
  const inputClick = (file, dispatchtype) => {
    dispatchDetail({
      type: dispatchtype,
      value: file,
    });
  };

  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Logos</h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>BACKGROUND</label>
          <input
            onChange={(e) => {
              inputClick(e.target.files[0], "BACKGROUND-LOGO");
            }}
            accept="image/*"
            className={classes["input"]}
            type="file"
            hidden
          />
          <span
            onClick={(e) => {
              e.target.previousElementSibling.click();
            }}
            className={classes["upload"]}
          >
            Upload
          </span>
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>League</label>
          <input
            onChange={(e) => {
              console.log("file-uploaded", e.target.files[0]);
              inputClick(e.target.files[0], "LEAGUE-LOGO");
            }}
            accept="image/*"
            className={classes["input"]}
            type="file"
            hidden
          />
          <span
            onClick={(e) => {
              e.target.previousElementSibling.click();
            }}
            className={classes["upload"]}
          >
            Upload
          </span>
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>Team 1</label>
          <input
            onChange={(e) => {
              inputClick(e.target.files[0], "FIRST-TEAM-LOGO");
            }}
            accept="image/*"
            className={classes["input"]}
            type="file"
            hidden
          />
          <span
            onClick={(e) => {
              e.target.previousElementSibling.click();
            }}
            className={classes["upload"]}
          >
            Upload
          </span>
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>Team 2</label>
          <input
            onChange={(e) => {
              inputClick(e.target.files[0], "SECOND-TEAM-LOGO");
            }}
            accept="image/*"
            className={classes["input"]}
            type="file"
            hidden
          />
          <span
            onClick={(e) => {
              e.target.previousElementSibling.click();
            }}
            className={classes["upload"]}
          >
            Upload
          </span>
        </div>
        <div className="or-wrapper">
          <span>Or</span>
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>Flag Logo</label>
          <input
            onChange={(e) => {
              inputClick(e.target.files[0], "FLAG-LOGO");
            }}
            accept="image/*"
            className={classes["input"]}
            type="file"
            hidden
          />
          <span
            onClick={(e) => {
              e.target.previousElementSibling.click();
            }}
            className={classes["upload"]}
          >
            Upload
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamsLogos;
