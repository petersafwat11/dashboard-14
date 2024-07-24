import React from "react";
import classes from "./page.module.css";
import Wrapper from "../ui/sportsListings/wrapper/Wrapper";
import axios from "axios";
const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 200;
  const search = searchParams?.search;
  const category = searchParams?.category || "Football";
  const sportsData = await axios.get(`${process.env.BACKEND_SERVER}/sports`, {
    params: {
      page: page,
      limit: rows,
      sportCategory: category === "fights" ? undefined : category,
      fightsGroup: category === "fights" ? true : undefined,
      searchValue: search,
      or: ["title"],
      sort: { eventDate: 1 },
    },
  });
  const paginations = {
    results: sportsData?.data?.results,
    rowsPerPage: rows,
  };

  return (
    <div className={classes["sports-listing"]}>
      <h1 className={classes["title"]}>Sports Listings</h1>
      <Wrapper dataFetched={sportsData?.data} paginations={paginations} />
    </div>
  );
};

export default page;
