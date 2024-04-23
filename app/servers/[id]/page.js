import ServerWrapper from "@/app/ui/createListings/serverWrapper/ServerWrapper";
import classes from "./server.module.css";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";

const Page = async ({ params }) => {
  noStore();

  const id = params.id;
  const StreamLinks = await axios.get(
    `${process.env.BACKEND_SERVER}/streamLink`,
    {
      params: {
        page: 1,
        limit: 0,
      },
    }
  );
  console.log("StreamLinks", StreamLinks);
  const streamLinksAvaiable = StreamLinks?.data?.data?.data?.map((item) => {
    return { streamLinkName: item.channelName, streamLinkUrl: item.URL };
  });
  console.log("streamLinksAvaiable", streamLinksAvaiable);
  // setStreamLinksAvaiable(streamLinksAvaiable);

  const response = await axios.get(
    `${process.env.BACKEND_SERVER}/sports/${id}`
  );
  const servers = await axios.get(
    `${process.env.BACKEND_SERVER}/servers/${id}`
  );
  const match = response?.data?.data;
  const existServers = servers?.data?.data?.data[0];
  console.log(match, existServers);

  // setExistedMatch(match);
  // setExistedServers(existServers);
  console.log("data fetched", match, existServers);

  //   if (existServers?.moreLanguages && existServers?.mainLanguages) {
  //     dispatchServer({ type: "UPDATE-ALL", value: existServers.mainLanguages });
  //     dispatchOtherServer({
  //       type: "UPDATE-ALL",
  //       value: existServers?.moreLanguages,
  //     });
  //   }
  //   console.log("exist", existServers);
  // }, [existServers]);
  // useEffect(() => {
  //   const id = pathname.slice(pathname.lastIndexOf("/") + 1);
  //   const getServersData = async () => {
  //     const response = await getData(`sports/${id}`);
  //     const servers = await getData(`servers/${id}`);
  //     const match = response?.data;
  //     const existServers = servers?.data?.data[0];
  //     console.log(match, existServers);

  //     setExistedMatch(match);
  //     setExistedServers(existServers);
  //     console.log("data fetched", response, servers);
  //   };
  //   getServersData();
  // }, [pathname, setExistedMatch, setExistedServers]);
  // useEffect(() => {
  //   const getStreamData = async () => {
  //     const StreamLinks = await getData("streamLink", {
  //       page: 1,
  //       limit: 0,
  //     });
  //     console.log("StreamLinks", StreamLinks);
  //     const streamLinksAvaiable = StreamLinks?.data?.data?.map((item) => {
  //       return { streamLinkName: item.channelName, streamLinkUrl: item.URL };
  //     });
  //     setStreamLinksAvaiable(streamLinksAvaiable);
  //   };
  //   getStreamData();
  // }, []);

  return (
    <div className={classes["container"]}>
      <ServerWrapper
        streamLinksAvaiableData={streamLinksAvaiable}
        matchData={match}
        existServersData={existServers}
      />
    </div>
  );
};

export default Page;
