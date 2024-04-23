"use client";
import { useRouter } from "next/navigation";
import React from "react";

import Checkbox from "../../checkbox/Checkbox";
import EditButton from "../../editButton/EditButton";
import Flag from "../../flag/Flag";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import Search from "../../search/Search";
import classes from "./table.module.css";
import { convertDate } from "@/app/lib/datesFucntions";
const Table = ({ reverseFlagProp, sports, selectElement, paginations }) => {
  const router = useRouter();
  return (
    <div className={classes["table"]}>
      <div className="search-div">
        <Search />
      </div>
      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>ID</p>
        <p className={classes["table-cell"]}>Team 1</p>
        <p className={classes["table-cell"]}>Team 2</p>
        <p className={classes["table-cell"]}>League</p>
        <p className={classes["table-cell"]}>Date/Time</p>
        <p className={classes["table-cell"]}>Sport</p>
        <p className={classes["table-cell"]}>Hot Match</p>
        <p className={classes["table-cell"]}>Action </p>
        {sports?.length > 0 && <p>servers</p>}
      </div>
      {sports?.length > 0 ? (
        sports.map((item, index) => (
          <div
            key={item._id}
            className={
              item.teamsTitle
                ? classes["table-row-single-team"]
                : classes["table-row"]
            }
          >
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{index + 1}</p>
            {!item.teamsTitle ? (
              <>
                <p className={classes["table-cell"]}>{item.firstTeamName}</p>
                <p className={classes["table-cell"]}>{item.secondTeamName}</p>
              </>
            ) : (
              <p className={classes["table-cell"]}>{item.teamsTitle}</p>
            )}
            <p className={classes["table-cell"]}>{item.eventLeague}</p>
            <div className={classes["date-and-time"]}>
              <p> {convertDate(item.eventDate).date}</p>
              <p> {convertDate(item.eventDate).time}</p>
            </div>
            <p className={classes["table-cell"]}>{item.sportCategory}</p>
            <Flag
              reverseFlagProp={reverseFlagProp}
              id={item._id}
              flagged={item.flagged}
            />
            <EditButton id={item._id} />
            {/* <div className={classes["severs"]}> */}
            <p
              onClick={() => {
                router.push(`/servers/${item._id}`);
              }}
              className={classes["severs"]}
            >
              servers
            </p>
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
