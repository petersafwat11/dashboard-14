import Wrapper from "../ui/giveaway/wrapper/Wrapper";
import classes from "./page.module.css";

import axios from "axios";

const Page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;

  const followersData = await axios.get(
    `${process.env.BACKEND_SERVER}/giveaway/folllower`,
    {
      params: {
        page: page,
        limit: rows,
        sort: { createdAt: -1 },
        searchValue: search,
        or: ["fullName", "email", "method"],
      },
    }
  );
  const response = await axios.get(
    `${process.env.BACKEND_SERVER}/giveaway/event`
  );
  let eventData = {
    ...response?.data?.data?.data,
  };
  if (response?.data?.data?.data?.prizeImage !== null) {
    eventData.imageSrc = `${process.env.BACKEND_SERVER}/img/giveaway/${response?.data?.data?.data?.prizeImage}`;
  } else {
    eventData.imageSrc = null;
  }
  const paginations = {
    results: followersData?.data?.results,
    rowsPerPage: rows,
  };
  console.log("event data", eventData);

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Giveaway Settings </h1>
      <Wrapper
        paginations={paginations}
        followersData={followersData?.data?.data?.data}
        eventData={eventData}
      />
    </div>
  );
};

export default Page;
