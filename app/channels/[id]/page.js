// "use client";
import axios from "axios";
import classes from "./pages.module.css";
import Wrapper from "@/app/ui/channelsListings/createWrapper/Wrapper";
import Cookies from "js-cookie";
import { unstable_noStore as noStore } from "next/cache";
import { reducerIntialValue } from "@/app/ui/reducers/channel";

const Page = async ({ params }) => {
  noStore();

  const id = params.id;
  let channel;
  if (id !== "create") {
    const channelData = await axios.get(
      `${process.env.BACKEND_SERVER}/channels/${id}
        `,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    channel = channelData?.data?.data;
    const { streamLink } = channelData?.data?.data;
    console.log(streamLink);
    channel.streamLink = streamLink?._id;
    channel.streamLinkName = streamLink?.channelName;
    delete channel._id;
    delete channel.__v;
    // delete channel.streamLink;
    console.log("channelData", channel);
  }
  const streamLinksData = await axios.get(
    `${process.env.BACKEND_SERVER}/streamLink`,
    {
      params: {
        page: 1,
        limit: 0,
      },
    }
  );
  const streamLinksAvaiable = streamLinksData?.data?.data?.data.map((item) => {
    return {
      streamLinkName: item.channelName,
      streamLinkUrl: item.URL,
      _id: item._id,
    };
  });
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <Wrapper
        channelData={channel ? { ...channel, error: "" } : reducerIntialValue}
        streamLinksData={streamLinksAvaiable}
      />
    </div>
  );
};

export default Page;
