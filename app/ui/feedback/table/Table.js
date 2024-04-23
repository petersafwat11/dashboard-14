"use client";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Flag from "../../flag/Flag";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
import { convertDate } from "@/app/lib/datesFucntions";
import { flagItem } from "@/app/lib/tabelsPages";

const Table = ({ feedbacksFetched, paginations }) => {
  const [feedbacks, setFeedbacks] = useState(feedbacksFetched);
  const reverseFlagProp = async (itemID) => {
    flagItem(itemID, feedbacks, setFeedbacks, "feedback");
  };
  useEffect(() => {
    setFeedbacks(feedbacksFetched);
  }, [feedbacksFetched]);
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <p className={classes["table-cell"]}>No</p>
        <p className={classes["table-cell"]}>Feedback Message</p>
        <p className={classes["table-cell"]}>Flag</p>
        <p className={classes["table-cell"]}>Date/Time</p>
      </div>

      {feedbacks?.length > 0 ? (
        feedbacks?.map((item, index) => (
          <div key={index} className={classes["table-row"]}>
            <p className={classes["table-cell"]}>{item.num}</p>
            <p className={classes["table-cell"]}>{item.message}</p>
            <Flag
              reverseFlagProp={reverseFlagProp}
              id={item._id}
              flagged={item.flagged}
            />

            <div className={classes["date-and-time"]}>
              <p> {convertDate(item.createdAt).date}</p>
              <p> {convertDate(item.createdAt).time}</p>
            </div>
          </div>
        ))
      ) : (
        <NoContent />
      )}
      <Paginations
        rowsPerPage={paginations.rowsPerPage}
        results={paginations.results}
      />
    </div>
  );
};

export default Table;
