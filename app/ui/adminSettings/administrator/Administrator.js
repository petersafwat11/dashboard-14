"use client";
import React from "react";
import classes from "./administrator.module.css";
const Administrator = ({
  Administrator,
  dispatchAction,
  edit,
  cancelEditing,
  saveActions,
}) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
        <h2 className={classes["title"]}>
          {edit ? `Edit User account` : `Create User account`}
        </h2>
        <div className={classes["details"]}>
          <div className={classes["details-wrapper"]}>
            <div className={classes["input-group"]}>
              <label htmlFor="name" className={classes["label"]}>
                Display name
              </label>
              <input
                id="name"
                className={classes["input"]}
                onChange={(e) => {
                  dispatchAction({ type: "NAME", value: e.target.value });
                }}
                value={Administrator.name}
                type="text"
                placeholder="Display name"
              />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="password" className={classes["label"]}>
                password
              </label>
              <input
                id="password"
                className={classes["input"]}
                onChange={(e) => {
                  dispatchAction({ type: "PASSWORD", value: e.target.value });
                }}
                value={Administrator.password}
                type="password"
                placeholder="password"
              />
            </div>
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="email" className={classes["label"]}>
              email
            </label>
            {edit ? (
              <input
                id="email"
                className={classes["input"]}
                value={Administrator.email}
                type="email"
                placeholder="email"
                readOnly
              />
            ) : (
              <input
                id="email"
                className={classes["input"]}
                onChange={(e) => {
                  dispatchAction({ type: "EMAIL", value: e.target.value });
                }}
                value={Administrator.email}
                type="email"
                placeholder="email"
              />
            )}
          </div>
          {edit ? (
            <div className={classes["actions"]}>
              <button
                onClick={() => {
                  saveActions();
                  console.log("clickedddd");
                }}
                className={classes["create-button"]}
              >
                Save
              </button>
              <button
                onClick={() => {
                  cancelEditing();
                  console.log("canceld");
                }}
                className={classes["cancel-button"]}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className={classes["actions"]}>
              <button
                onClick={() => {
                  saveActions();
                  console.log("clickedddd");
                }}
                className={classes["create-button"]}
              >
                Create
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={classes["second"]}>
        <h2 className={classes["title"]}>Role</h2>
        <div className={classes["details"]}>
          {["Admin", "Manager", "Moderator"].map((item) => (
            <div key={item} className={classes["checkbox-input-group"]}>
              <input
                checked={Administrator.role === item ? true : false}
                onChange={() => {
                  dispatchAction({ type: "ROLE", value: item });
                }}
                id={item}
                type="checkbox"
                className={classes["checkbox"]}
              />
              <label htmlFor={item} className={classes["label"]}>
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Administrator;
