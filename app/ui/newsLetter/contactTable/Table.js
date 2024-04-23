"use client";
import React, { useEffect, useState } from "react";
import Flag from "../../flag/Flag";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
import { convertDate } from "@/app/lib/datesFucntions";
import Search from "../../search/Search";
import axios from "axios";
import Cookies from "js-cookie";

const ContactTable = ({
  tableData,
  paginations,
  // reverseFlagProp,
}) => {
  const [data, setData] = useState(tableData);
  const reverseFlagProp = async (itemID) => {
    let foundIndex = data.findIndex((item) => item._id === itemID);
    let newItemsArray = [...data];
    let item = data.find((item) => item._id === itemID);
    try {
      const updatedItem = await axios.patch(
        `${process.env.BACKEND_SERVER}/contact-us/${itemID}
          `,
        { flagged: !item.flagged },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      item = { ...item, flagged: !item.flagged };
      newItemsArray[foundIndex] = item;
      setData(newItemsArray);
      console.log(item);
    } catch (error) {
      console.log("err", error);
    }
  };
  useEffect(() => {
    setData(tableData);
  }, [tableData]);
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <Search />
      </div>
      <div className={classes["table-header"]}>
        <p className={classes["table-cell"]}>Email</p>
        <p className={classes["table-cell"]}> Message</p>
        <p className={classes["table-cell"]}>Flag</p>
        <p className={classes["table-cell"]}>Date/Time</p>
      </div>
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <div key={index} className={classes["table-row"]}>
            <p className={classes["table-cell"]}>{item.email}</p>
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

export default ContactTable;
