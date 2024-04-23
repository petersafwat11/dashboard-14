import React from "react";
import classes from "./page.module.css";
import Wrapper from "../ui/channelsListings/wrapper/Wrapper";
import axios from "axios";

const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  const channelsData = await axios.get(
    `${process.env.BACKEND_SERVER}/channels`,
    {
      params: {
        page: page,
        limit: rows,
        searchValue: search,
        or: ["channelName", "mode"],
      },
    }
  );
  const paginations = {
    results: channelsData?.data?.results,
    rowsPerPage: rows,
  };
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <Wrapper dataFetched={channelsData?.data} paginations={paginations} />
    </div>
  );
};

export default page;
