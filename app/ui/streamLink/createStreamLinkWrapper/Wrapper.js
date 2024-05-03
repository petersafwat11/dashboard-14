"use client";
import React, { useEffect, useReducer } from "react";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import ChannelName from "../channelName/ChannelName";
import StreamLink from "../streamLink/StreamLink";
import Preview from "../preview/Preview";
import { usePathname, useRouter } from "next/navigation";
import {
  reducerIntialValue,
  streamLinkReducer,
} from "../../reducers/streamLinksReducer";
import classes from "./wrapper.module.css";
import { deleteItem, saveItem } from "@/app/lib/createPages";
const Wrapper = ({ streamLinks }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [streamLink, dispatchDetail] = useReducer(
    streamLinkReducer,
    streamLinks || reducerIntialValue
  );
  const saveChanges = () => {
    saveItem(pathname, streamLink, dispatchDetail, router, "streamLink");
  };
  const deleteStreamLink = async () => {
    deleteItem(pathname, router, "streamLink");
  };
  useEffect(() => {
    dispatchDetail({
      type: "UPDATE-ALL",
      value: streamLinks || reducerIntialValue,
    });
  }, [streamLinks]);
  return (
    <div>
      <h1 className={classes["title"]}>Edit Stream Link</h1>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={deleteStreamLink}
          first={"Save"}
          second={"Delete"}
        />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>
      <div className={classes["details"]}>
        <ChannelName
          data={streamLink.channelName}
          dispatchDetail={dispatchDetail}
        />
        <div className={classes["details-wrapper"]}>
          <StreamLink
            data={{ URL: streamLink.URL }}
            dispatchDetail={dispatchDetail}
          />
          <Preview url={streamLink.URL} />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
