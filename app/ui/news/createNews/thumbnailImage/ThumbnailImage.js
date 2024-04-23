import React from "react";
import { fileUpload, removeFile } from "@/app/lib/uploadImges";
import classes from "./thumbnailImage.module.css";
const ThumbnailImage = ({ data, dispatchDetail }) => {
  // const upload = () => {
  //   fileInput.current.click();
  // };
  const inputClick = (e) => {
    fileUpload(e, dispatchDetail, "COVER-IMAGE");
  };
  const imageClick = () => {
    removeFile(dispatchDetail, "COVER-IMAGE");
  };
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Thumbnail Image</h2>
      <input
        onChange={inputClick}
        accept="image/*"
        type="file"
        className={classes["input"]}
        hidden
      />
      {!data.image && (
        <span
          onClick={(e) => {
            e.target.previousElementSibling.click();
          }}
          className={classes["upload"]}
        >
          Upload
        </span>
      )}
      {data.image && (
        <img
          crossOrigin="anonymous"
          className={classes["uploaded-image"]}
          onClick={imageClick}
          src={"http://localhost:8000/img/news/14pro-1713795030351.png"}
        />
      )}
    </div>
  );
};

export default ThumbnailImage;
