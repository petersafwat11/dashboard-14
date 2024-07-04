import React from "react";
import classes from "./page.module.css";
import Wrapper from "../ui/streamLink/wrapper/Wrapper";
import axios from "axios";

const Page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 200;
  const search = searchParams?.search;

  const streamLinksData = await axios.get(
    `${process.env.BACKEND_SERVER}/streamLink`,
    {
      params: {
        page: page,
        limit: rows,
        sort: { channelName: 1 },
        searchValue: search,
        or: ["channelName"],
      },
    }
  );
  const paginations = {
    results: streamLinksData?.data?.results,
    rowsPerPage: rows,
  };
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Stream Links</h1>
      <Wrapper dataFetched={streamLinksData?.data} paginations={paginations} />
    </div>
  );
};

export default Page;
