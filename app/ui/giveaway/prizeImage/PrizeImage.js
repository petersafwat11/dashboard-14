import React from "react";
// import { fileUpload, removeFile } from "../../../../utils/uploadImages";
import classes from "./prizeImage.module.css";
import { fileUpload, removeFile } from "@/app/lib/uploadImges";
const PrizeImage = ({ data, dispatchPrizeDetail }) => {
  // const inputClick = (file, dispatchtype) => {
  //   dispatchPrizeDetail({
  //     type: dispatchtype,
  //     value: file,
  //   });
  // };
  const inputClick = (e) => {
    fileUpload(e, dispatchPrizeDetail, "PRIZE-IMAGE");
  };
  const imageClick = () => {
    removeFile(dispatchPrizeDetail, "PRIZE-IMAGE");
  };

  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Prize Image</h2>
      <div className={classes["input-wrapper"]}>
        <input
          onChange={
            inputClick
            //   (e) => {
            //   inputClick(e.target.files[0], "PRIZE-IMAGE");
            // }
          }
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
        {data && (
          <img
            crossOrigin="anonymous"
            className={classes["uploaded-image"]}
            onClick={imageClick}
            src={data}
          />
        )}

        {/* {data && <span className={classes["image-name"]}>{data}</span>} */}
      </div>
    </div>
  );
};

export default PrizeImage;
