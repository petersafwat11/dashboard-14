import axios from "axios";
import classes from "./page.module.css";
import Wrapper from "@/app/ui/news/createNews/createNewsWrapper/Wrapper";
import { unstable_noStore as noStore } from "next/cache";
const Page = async ({ params }) => {
  noStore();

  let newsItemData;
  if (params.id !== "create") {
    const response = await axios.get(
      `${process.env.BACKEND_SERVER}/news/${params.id}`
    );
    let newState = response?.data?.data?.data;
    delete newState.__v;
    console.log(newState);
    newState.coverImage = `${process.env.BACKEND_SERVER}/img/news/${newState.coverImage}`;
    newState.subNews = newState.subNews.map((item) => {
      let newItem = {
        ...item,
        image: `${process.env.BACKEND_SERVER}/img/news/${item.image}`,
      };
      return newItem;
    });
    newsItemData = newState;
  }

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Create News</h1>
      <Wrapper newsItemData={newsItemData} />
    </div>
  );
};

export default Page;
