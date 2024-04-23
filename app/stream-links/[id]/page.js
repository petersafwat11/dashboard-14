import classes from "./page.module.css";
import Wrapper from "@/app/ui/streamLink/createStreamLinkWrapper/Wrapper";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";

const Page = async ({ params }) => {
  noStore();

  const id = params.id;
  let streamLinks;
  if (id !== "create") {
    const streamLinksData = await axios.get(
      `${process.env.BACKEND_SERVER}/streamLink/${id}`
    );
    streamLinks = streamLinksData?.data?.data?.data;
  }
  console.log("streamLinks", streamLinks);
  return (
    <div className={classes["container"]}>
      <Wrapper streamLinks={streamLinks} />
    </div>
  );
};

export default Page;
