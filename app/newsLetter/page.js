import React from "react";
import classes from "./page.module.css";
import axios from "axios";
import Table from "../ui/newsLetter/dataEntryTable/Table";
const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;

  const newsLetterData = await axios.get(
    `${process.env.BACKEND_SERVER}/newsletter`,
    {
      params: {
        page: page,
        limit: rows,
        sort: { createdAt: -1 },
        searchValue: search,
        or: ["email"],
      },
    }
  );
  const newsLetter = newsLetterData?.data?.data?.data;
  console.log("newsLetter", newsLetter);
  const newsLetterPaginations = {
    results: newsLetterData?.data?.results,
    rowsPerPage: rows,
  };

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Newsletter </h1>
      <Table
        newsLetter={newsLetter}
        paginations={newsLetterPaginations}
      />

    </div>
  );
};

export default page;
