import React from "react";
import { BiSearch } from "react-icons/bi";
import Checkbox from "../../checkbox/Checkbox";
import EditButton from "../../editButton/EditButton";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
import { convertDate } from "@/app/lib/datesFucntions";
const Table = ({ news, selectElement, paginations }) => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>

      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}> ID</p>
        <p className={classes["table-cell"]}>Title</p>
        <p className={classes["table-cell"]}>Date</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {news?.length > 0 ? (
        news.map((item, index) => (
          <div key={item._id} className={classes["table-row"]}>
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{index + 1}</p>
            <p className={classes["table-cell"]}>{item.title}</p>
            <div className={classes["date-and-time"]}>
              <p> {convertDate(item.createdAt).date}</p>
              <p> {convertDate(item.createdAt).time}</p>
            </div>
            <EditButton id={item._id} />
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
