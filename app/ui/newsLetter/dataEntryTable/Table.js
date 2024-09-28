"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
import Checkbox from "../../checkbox/Checkbox";
import { convertDate } from "@/app/lib/datesFucntions";
import { checkboxClicked } from "@/app/lib/tabelsPages";
import axios from "axios";
const Table = ({ newsLetter, paginations }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedItems, setSelectedItems);
  };
  const downloadEmails = async () => {
    // try {
    //   const getEmails = await axios.get(
    //     `${process.env.BACKEND_SERVER}/newsletter/downloadEmails`
    //   );
    //   console.log("done");
    // } catch (error) {
    //   console.log("error");
    // }
    try {
      const response = await axios.get(
        `${process.env.BACKEND_SERVER}/newsletter/downloadEmails`,
        {
          responseType: "blob", // Ensure the response is of type 'blob'
        }
      );

      const blob = response.data;
      console.log(blob, response);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "emails.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
        <button onClick={downloadEmails} className={classes["download-button"]}>
          Download Emails
        </button>
      </div>
      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>ID</p>
        {/* <p className={classes["table-cell"]}>Full Name</p> */}
        <p className={classes["status"]}>Email</p>
        <p className={classes["table-cell"]}>Date </p>
      </div>
      {newsLetter?.length > 0 ? (
        newsLetter?.map((item, index) => (
          <div key={index} className={classes["table-row"]}>
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{item.num}</p>
            <p className={classes["table-cell"]}>{item.email}</p>
            <p className={classes["table-cell"]}>
              {convertDate(item.createdAt).date}
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
