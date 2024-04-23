import React from "react";
import { BiSearch } from "react-icons/bi";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import ViewListingsBtn from "../viewListingsBtn/ViewListingsBtn";
import classes from "./table.module.css";
import { convertDate } from "@/app/lib/datesFucntions";
import Search from "../../search/Search";
const Table = ({ reportedLinks, paginations }) => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <Search />
      </div>
      {/* <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div> */}
      <div className={classes["table-header"]}>
        <p className={classes["table-cell"]}>No</p>
        <p className={classes["table-cell"]}>Event</p>
        <p className={classes["table-cell"]}>Server</p>
        <p className={classes["table-cell"]}>Reason</p>
        <p className={classes["table-cell"]}>Date/Time</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {reportedLinks?.length > 0 ? (
        reportedLinks.map((item, index) => (
          <div key={item._id} className={classes["table-row"]}>
            <p className={classes["table-cell"]}>{index + 1}</p>
            <p className={classes["table-cell"]}>{item.event}</p>
            <p className={classes["table-cell"]}>{item.server}</p>
            <p className={classes["table-cell"]}>{item.reason}</p>
            <div className={classes["date-and-time"]}>
              <p> {convertDate(item.createdAt).date}</p>
              <p> {convertDate(item.createdAt).time}</p>
            </div>
            <ViewListingsBtn eventLink={item.eventLink} />
          </div>
        ))
      ) : (
        <NoContent />
      )}
      <Paginations
        rowsPerPage={paginations.rowsPerPage}
        results={paginations.results}
        // dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Table;
