import React from "react";
import classes from "./page.module.css";
import FeedbackSelection from "../ui/feedback/social/SocialSelection";
import Table from "../ui/feedback/table/Table";
import axios from "axios";
const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  const type = searchParams?.type;
  const feedbackData = await axios.get(
    `${process.env.BACKEND_SERVER}/feedback`,
    {
      params: {
        page: page,
        limit: rows,
        sort: { createdAt: -1 },
        searchValue: search,
        flagged:
          type === "Flagged"
            ? true
            : type === "Feedback Only"
            ? false
            : undefined,
        or: ["message"],
      },
    }
  );
  const feedbacks = feedbackData?.data?.data?.data;
  const paginations = {
    results: feedbackData?.data?.results,
    rowsPerPage: rows,
  };

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Feedback</h1>
      <div>
        <FeedbackSelection />
        <Table paginations={paginations} feedbacksFetched={feedbacks} />
      </div>
    </div>
  );
};

export default page;
