import React from "react";
import classes from "./newsContent.module.css";
import { fileUpload, removeFile } from "@/app/lib/uploadImges";
const NewsContent = ({ data, dispatchDetail }) => {
  const inputClick = (e, index) => {
    fileUpload(e, dispatchDetail, "SUBNEWS-IMAGE", index);
  };
  const imageClick = (index) => {
    removeFile(dispatchDetail, "SUBNEWS-IMAGE", index);
  };
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["container"]}>
        <div className={classes["top"]}>
          <h2 className={classes["title"]}>
            2022-2023 Serie A Week 2: Match Highlights
          </h2>
          <p className={classes["admin-sign"]}>Posted by AJ Sports Admin</p>
        </div>
        <div className={classes["sub-news"]}>
          {data.numOfSubnews > 0 &&
            data.subNews.map((item, index) => (
              <div
                style={{ background: index % 2 !== 0 ? "#182228" : "inherit" }}
                key={index}
                className={classes["sub-new"]}
              >
                <input
                  type="text"
                  placeholder="news sub title"
                  value={
                    data.subNews.find((item) => item.index === index + 1)
                      .title || ""
                  }
                  onChange={(e) => {
                    dispatchDetail({
                      type: "SUBNEWS-TITLE",
                      value: e.target.value,
                      index: index + 1,
                    });
                  }}
                  className={classes["sub-title"]}
                />
                <div className={classes["image-wrapper"]}>
                  <input
                    type="file"
                    onChange={(e) => {
                      inputClick(e, index + 1);
                    }}
                    hidden
                    className={classes["file-input"]}
                  />
                  {!data.subNews.find((item) => item.index === index + 1)
                    .image && (
                    <span
                      onClick={(e) => {
                        e.target.previousElementSibling.click();
                      }}
                      className={classes["upload-text"]}
                    >
                      Upload
                    </span>
                  )}
                  {data.subNews.find((item) => item.index === index + 1)
                    .image && (
                    <img
                      crossOrigin="anonymous"
                      className={classes["uploaded-image"]}
                      onClick={() => {
                        imageClick(index + 1);
                      }}
                      src={
                        data.subNews.find((item) => item.index === index + 1)
                          .image
                      }
                    />
                  )}
                </div>
                <textarea
                  value={
                    data.subNews.find((item) => item.index === index + 1)
                      .description || ""
                  }
                  onChange={(e) => {
                    dispatchDetail({
                      type: "SUBNEWS-DESCRIPTION",
                      value: e.target.value,
                      index: index + 1,
                    });
                  }}
                  className={classes["textarea"]}
                ></textarea>
              </div>
            ))}
        </div>
      </div>
      <div className={classes["action"]}>
        <button
          onClick={() => {
            dispatchDetail({
              type: "ADD-SUBNEWS",
              value: Number(data.numOfSubnews) + 1,
            });
          }}
          className={classes["add-button"]}
        >
          Add section
        </button>
        <button
          onClick={() => {
            dispatchDetail({
              type: "remove-SUBNEWS",
              value: Number(data.numOfSubnews) - 1,
            });
          }}
          className={classes["remove-button"]}
        >
          Remove section
        </button>
      </div>
    </div>
  );
};

export default NewsContent;
