import axios from "axios";
import classes from "./page.module.css";
import Wrapper from "./Wrapper";
import { unstable_noStore as noStore } from "next/cache";

const Page = async () => {
  let data;
  noStore();
  try {
    const response = await axios.get(`${process.env.BACKEND_SERVER}/links`);
    data = response.data.data.data[0];
  } catch (error) {
    console.log("error happened: ", error);
  }
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Edit Links</h1>
      <Wrapper data={data} />
    </div>
  );
};

export default Page;
