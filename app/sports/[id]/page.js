import axios from "axios";
import classes from "./page.module.css";
import { convertDate, getMatchDate } from "@/app/lib/datesFucntions";
import Wrapper from "./Wrapper";
const Page = async ({ params }) => {
  const id = params.id;
  let eventData = null;
  let matchPoll = null;
  if (params.id !== "create") {
    const response = await axios.get(
      `${process.env.BACKEND_SERVER}/sports/${id}`
    );
    console.log("response", response?.data?.data);
    const playStream = convertDate(response?.data?.data?.playStream);
    const removeStream = convertDate(response?.data?.data?.removeStream);
    const removeCountdown = convertDate(response?.data?.data?.removeCountdown);
    const endedEvent = convertDate(response?.data?.data?.endedEvent);
    const eventDate = convertDate(response?.data?.data?.eventDate).date;
    const eventTime = convertDate(response?.data?.data?.eventDate).time;

    const dateText = getMatchDate(response?.data?.data?.eventDate, true);
    eventData = response?.data?.data;
    eventData.playStream = playStream;
    eventData.removeStream = removeStream;
    eventData.removeCountdown = removeCountdown;
    eventData.eventDate = eventDate;
    eventData.eventTime = eventTime;
    eventData.eventDateText = dateText;
    eventData.endedEvent = endedEvent;
    matchPoll = eventData.matchPoll;
    // delete eventData.matchPoll;
  }
  console.log("matchPoll", matchPoll);
  return (
    <div className={classes["create-listing"]}>
      <h1 className={classes["title"]}>Create New Listing</h1>
      <Wrapper eventData={eventData} matchPoll={matchPoll} />
    </div>
  );
};

export default Page;
