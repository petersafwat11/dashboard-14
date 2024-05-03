"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useReducer } from "react";
import { deleteItem, getData, saveItem } from "@/app/lib/createPages";
import { channelReducer, reducerIntialValue } from "@/app/ui/reducers/channel";
import OneFeildInput from "../oneFeildInput/OneFeildInput";
import Mode from "../mode/Mode";
import StreamLinks from "../streamLinks/StreamLinks";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import classes from "./wrapper.module.css";
import revalidatePage from "@/app/lib/revalidateAction";

const Wrapper = ({ streamLinksData, channelData }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [channel, dispatchDetail] = useReducer(channelReducer, {
    ...channelData,
  });
  const saveChanges = () => {
    saveItem(pathname, channel, dispatchDetail, router, "channels");
    revalidatePage("channels");
  };
  const deleteChannel = async () => {
    deleteItem(pathname, router, "channels");
    revalidatePage("channels");
  };
  useEffect(() => {
    console.log("channelData", channelData);
    dispatchDetail({ type: "UPDATE-ALL", value: channelData });
  }, [channelData]);
  return (
    <div>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={deleteChannel}
          first={"Save"}
          second={"Delete"}
        />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>

      <div className={classes["details"]}>
        <div className={classes["details-wrapper"]}>
          <OneFeildInput
            title={"Channel Name"}
            dispatchType={"CHANNEL-NAME"}
            data={channel?.channelName}
            dispatchDetail={dispatchDetail}
          />
          <Mode data={channel?.mode} dispatchDetail={dispatchDetail} />
          <OneFeildInput
            title={"Language"}
            dispatchType={"LANGUAGE"}
            data={channel?.language}
            dispatchDetail={dispatchDetail}
          />
        </div>
        <StreamLinks
          streamLinksAvaiable={streamLinksData}
          streamLinkName={channel?.streamLinkName}
          dispatchDetail={dispatchDetail}
        />
      </div>
    </div>
  );
};

export default Wrapper;
