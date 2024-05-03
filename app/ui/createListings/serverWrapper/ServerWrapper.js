"use client";
import React, { useEffect, useReducer, useState } from "react";
import classes from "./serverWrapper.module.css";
import { usePathname, useRouter } from "next/navigation";
import { otherServersReducer } from "../../reducers/otherServersReducer";
import { mainserversReducers } from "../../reducers/mainserversReducer";
import { saveServer } from "@/app/lib/createPages";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import ServersAndLanguages from "../serversAndLanguages/ServersAndLanguages";
import NoContent from "../../noContent/NoContent";
const ServerWrapper = ({
  streamLinksAvaiableData,
  matchData,
  existServersData,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const existMatch = matchData;
  const existServers = existServersData;
  const streamLinksAvaiable = streamLinksAvaiableData;
  const [servers, dispatchServer] = useReducer(
    mainserversReducers,
    existServers?.mainLanguages || {
      english: { checked: false, num: 0, channels: [] },
      arabic: { checked: false, num: 0, channels: [] },
      spanish: { checked: false, num: 0, channels: [] },
    }
  );
  const [otherServers, dispatchOtherServer] = useReducer(
    otherServersReducer,
    existServers?.moreLanguages || {
      checked: false,
      num: 0,
      otherLangs: [],
    }
  );
  const saveChanges = async () => {
    const data = {
      matchId: existMatch?._id,
      mainLanguages: { ...servers },
      moreLanguages: { ...otherServers },
    };
    let requestType = existServers ? "PATCH" : "POST";
    await saveServer(
      // pathname,
      data,
      dispatchServer,
      dispatchOtherServer,
      router,
      "servers",
      existServers?._id,
      requestType
    );
  };

  // useEffect(() => {
  //   dispatchServer({ type: "UPDATE-ALL", value: existServers?.mainLanguages });
  //   dispatchOtherServer({
  //     type: "UPDATE-ALL",
  //     value: existServers?.moreLanguages,
  //   });
  // }, [existServers]);
  return (
    <div>
      {existMatch ? (
        <div className={classes["wrapper"]}>
          <div className={classes["actions"]}>
            <ActionsButtons firstButtonFunction={saveChanges} first={"Save"} />
          </div>

          <div className={classes["servers-and-langs"]}>
            <ServersAndLanguages
              streamLinksAvaiable={streamLinksAvaiable}
              servers={servers}
              dispatchServer={dispatchServer}
              otherServers={otherServers}
              dispatchOtherServer={dispatchOtherServer}
            />
          </div>
        </div>
      ) : (
        <NoContent />
      )}
    </div>
  );
};

export default ServerWrapper;
