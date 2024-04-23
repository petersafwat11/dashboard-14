import React from "react";
import classes from "./page.module.css";
import Table from "../ui/reportedLinks/table/Table";
import axios from "axios";
const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  const reportedData = await axios.get(
    `${process.env.BACKEND_SERVER}/reportedLinks`,
    {
      params: {
        page: page,
        limit: rows,
        sort: { createdAt: -1 },
        searchValue: search,
        or: ["event", "server", "reason"],
      },
    }
  );
  const reportedLinks = reportedData?.data?.data?.data;
  console.log("reportedLinks", reportedLinks);
  const paginations = {
    results: reportedData?.data?.results,
    rowsPerPage: rows,
  };
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Reported Links</h1>
      <div>
        <Table reportedLinks={reportedLinks} paginations={paginations} />
      </div>
    </div>
  );
};

export default page;
