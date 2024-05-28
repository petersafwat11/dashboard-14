import axios from "axios";
import classes from "./page.module.css";
import Wrapper from "./Wrapper";
const Page = async () => {
  const response = await axios.get(`${process.env.BACKEND_SERVER}/links`);
  const data = response.data.data.data[0];
  console.log("data", data);
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Edit Links</h1>
      <Wrapper data={data} />
    </div>
  );
};

export default Page;
