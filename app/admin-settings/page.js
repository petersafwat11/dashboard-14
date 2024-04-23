import axios from "axios";
import classes from "./page.module.css";
import Wrapper from "../ui/adminSettings/wrapper/Wrapper";

const Page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;

  const adminSettingsData = await axios.get(
    `${process.env.BACKEND_SERVER}/users`,
    {
      params: {
        page: page,
        limit: rows,
        sort: { createdAt: -1 },
        searchValue: search,
        or: ["email", "name", "role"],
      },
    }
  );
  console.log("adminSettingsData", adminSettingsData?.data?.data?.data);
  const paginations = {
    results: adminSettingsData?.data?.results,
    rowsPerPage: rows,
  };

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Admin Settings</h1>
      <Wrapper
        dataFetched={adminSettingsData?.data}
        paginations={paginations}
      />
    </div>
  );
};

export default Page;
