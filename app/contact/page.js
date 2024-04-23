import React from "react";
import classes from "./page.module.css";
import ContactTable from "../ui/newsLetter/contactTable/Table";
import axios from "axios";
const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;

  const usersContactedUsData = await axios.get(
    `${process.env.BACKEND_SERVER}/contact-us`,
    {
      params: {
        page: page,
        limit: rows,
        sort: { createdAt: -1 },
        searchValue: search,
        or: ["email", "message", "topic"],
      },
    }
  );
  const usersContactedUs = usersContactedUsData?.data?.data?.data;
  const ContactedUsPaginations = {
    results: usersContactedUsData?.data?.results,
    rowsPerPage: rows,
  };

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Contact </h1>
      {/* <h2 className={classes["subheading"]}>Contact</h2> */}
      <ContactTable
        tableData={usersContactedUs}
        paginations={ContactedUsPaginations}
      />
    </div>
  );
};

export default page;
