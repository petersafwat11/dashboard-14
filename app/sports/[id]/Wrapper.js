"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useReducer } from "react";

import ActionsButtons from "@/app/ui/actionsButtons/ActionsButtons";
import EventId from "@/app/ui/createListings/EventId/EventId";
import SportCategory from "@/app/ui/createListings/SportCategory/SportCategory";
import BoxingAPI from "@/app/ui/createListings/customAPI/boxing/BoxingAPI";
import F1API from "@/app/ui/createListings/customAPI/f1/F1API";
import HorseRacingAPI from "@/app/ui/createListings/customAPI/horseRacing/HorseRacingAPI";
import NascarAPI from "@/app/ui/createListings/customAPI/nascar/NascarAPI";
import NetballAPI from "@/app/ui/createListings/customAPI/netball/NetballAPI";
import TennisAPI from "@/app/ui/createListings/customAPI/tennis/TennisAPI";
import VolleyballAPI from "@/app/ui/createListings/customAPI/volleyball/VolleyballAPI";
import WWEAPI from "@/app/ui/createListings/customAPI/wwe/WWEAPI";
import EventsDetails from "@/app/ui/createListings/eventDetails/EventsDetails";
import PlayerTiming from "@/app/ui/createListings/playerTiming/PlayerTiming";
import Poll from "@/app/ui/createListings/poll/Poll";
import TeamsLogos from "@/app/ui/createListings/teamsLogos/TeamsLogos";
import TeamsNames from "@/app/ui/createListings/teamsNames/TeamsNames";
import {
  driversReducer,
  featuredFightersReducer,
  fightersReducer,
  horseRidersReducer,
  lineupsReducer,
  mainEventReducer,
  matchReducer,
  positionsReducer,
  tennisLineupsReducer,
  volleyballDriversReducer,
  wwweFightersReducer,
} from "../reducers/reducers";
import {
  boxingFightersIntialVal,
  driversIntialVal,
  featuredFightersIntialVal,
  horseRidersIntialVal,
  lineupsIntialVal,
  mainEventIntialVal,
  matchIntialVal,
  positionsIntialVal,
  tennisLineupsIntialVal,
  VolleyballIntialVal,
  wweFightersIntialVal,
} from "./intialValues";
import classes from "./page.module.css";
import { saveCustomAPI } from "./saveCustomAPI";
import { combineDateAndTime } from "@/app/lib/datesFucntions";
import { deleteItem, saveItem } from "@/app/lib/createPages";

const Wrapper = ({ eventData }) => {
  const pathname = usePathname();

  const router = useRouter();

  const [match, dispatchDetail] = useReducer(
    matchReducer,
    eventData || matchIntialVal
  );

  /// custom API reducers
  const [mainEvent, dispatchMainEvent] = useReducer(
    mainEventReducer,
    mainEventIntialVal
  );

  const [booxingfighters, dispatchBoxingFighters] = useReducer(
    fightersReducer,
    boxingFightersIntialVal
  );
  const [F1Positions, dispatchF1Positions] = useReducer(
    positionsReducer,
    positionsIntialVal
  );
  console.log("positionsIntialValpositionsIntialVal", positionsIntialVal);
  const [horseRiders, dispatchHorseRiders] = useReducer(
    horseRidersReducer,
    horseRidersIntialVal
  );
  const [drivers, dispatchDrivers] = useReducer(
    driversReducer,
    driversIntialVal
  );
  const [lineups, dispatchLineups] = useReducer(
    lineupsReducer,
    lineupsIntialVal
  );
  const [tennisLineups, dispatchTennisLineups] = useReducer(
    tennisLineupsReducer,
    tennisLineupsIntialVal
  );
  const [teamPlayers, dispatchTeamPlayers] = useReducer(
    volleyballDriversReducer,
    VolleyballIntialVal
  );
  const [wweFighters, dispatchWweFighters] = useReducer(
    wwweFightersReducer,
    wweFightersIntialVal
  );
  const [featuredFighters, dispatchfeaturedFighters] = useReducer(
    featuredFightersReducer,
    featuredFightersIntialVal
  );

  const saveChanges = async () => {
    const playStream = combineDateAndTime(
      match.playStream.date,
      match.playStream.time
    );
    const removeStream = combineDateAndTime(
      match.removeStream.date,
      match.removeStream.time
    );
    const removeCountdown = combineDateAndTime(
      match.removeCountdown.date,
      match.removeCountdown.time
    );
    const endedEvent = combineDateAndTime(
      match.endedEvent.date,
      match.endedEvent.time
    );
    const eventDate = combineDateAndTime(match.eventDate, match.eventTime);
    let data = { ...match };
    const customAPIData =
      match.sportCategory === "fights" || match.sportCategory === "ufc"
        ? { booxingfighters: booxingfighters, mainEvent: mainEvent }
        : match.sportCategory === "f1"
        ? F1Positions
        : match.sportCategory === "horseracing"
        ? horseRiders
        : match.sportCategory === "nascar"
        ? drivers
        : match.sportCategory === "netball"
        ? lineups
        : match.sportCategory === "tennis" ||
          match.sportCategory === "tabletennis"
        ? tennisLineups
        : match.sportCategory === "volleyball"
        ? teamPlayers
        : match.sportCategory === "wwe"
        ? {
            wweFighters: wweFighters,
            featuredFighters: featuredFighters,
          }
        : "";

    data.playStream = playStream;
    data.removeStream = removeStream;
    data.removeCountdown = removeCountdown;
    data.endedEvent = endedEvent;
    delete data.eventDate;
    delete data.eventTime;
    data.eventDate = eventDate;
    data?.teamsTitle?.length < 1 ? (data.teamsTitle = null) : "";
    data?.firstTeamName?.length < 1 ? (data.firstTeamName = null) : "";
    data?.secondTeamName?.length < 1 ? (data.secondTeamName = null) : "";
    data?.matchId?.length < 1 ? (data.matchId = null) : "";
    let formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    delete formData.servers;
    let customAPIID;
    if (customAPIData) {
      console.log("customAPIData exist");
      const customAPIResponse = await saveCustomAPI(
        pathname,
        customAPIData,
        "sports/customAPI"
      );
      console.log(
        "customAPIResponse?.data?.data",
        customAPIResponse?.data?.data
      );
      customAPIID = customAPIResponse?.data?.data?.data?._id;
      console.log("customAPIID", customAPIID);
      formData.append("customAPI", customAPIID);
      await saveItem(
        pathname,
        formData,
        dispatchDetail,
        router,
        "sports",
        "formData"
      );
    } else {
      await saveItem(
        pathname,
        formData,
        dispatchDetail,
        router,
        "sports",
        "formData"
      );
    }
  };
  const deleteMatch = async () => {
    deleteItem(pathname, router, "sports");
  };
  useEffect(() => {
    dispatchDetail({ type: "UPDATE-ALL", value: eventData });
  }, [eventData]);
  return (
    <div>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={deleteMatch}
          first={"Save"}
          second={"Delete"}
        />
      </div>
      <div className={classes["details"]}>
        <p className={classes["label"]}>Listing ID: 28</p>
        <div className={classes["first"]}>
          <SportCategory
            data={match?.sportCategory}
            dispatchDetail={dispatchDetail}
          />
          <TeamsNames
            data={{
              teamsTitle: match?.teamsTitle,
              firstTeamName: match?.firstTeamName,
              secondTeamName: match?.secondTeamName,
            }}
            dispatchDetail={dispatchDetail}
          />
          <EventsDetails
            data={{
              eventDate: match?.eventDate,
              eventLeague: match?.eventLeague,
              eventStadium: match?.eventStadium,
              eventTime: match?.eventTime,
              eventDateText: match?.eventDateText,
            }}
            dispatchDetail={dispatchDetail}
          />
        </div>
        <div className={classes["second"]}>
          <TeamsLogos
            data={{
              backgroundLogo: match?.backgroundLogo,
              leagueLogo: match?.leagueLogo,
              firstTeamLogo: match?.firstTeamLogo,
              secondTeamLogo: match?.secondTeamLogo,
              flagLogo: match?.flagLogo,
            }}
            dispatchDetail={dispatchDetail}
          />

          <PlayerTiming
            dispatchActionType={"PLAY-STREAM"}
            data={match?.playStream}
            dispatchDetail={dispatchDetail}
            width={"13.8rem"}
            title={"When to allow stream to play"}
          />
          <PlayerTiming
            dispatchActionType={"REMOVE-STREAM"}
            data={match?.removeStream}
            dispatchDetail={dispatchDetail}
            title={"When to delete page & listing"}
          />
          <PlayerTiming
            dispatchActionType={"REMOVE-COUNTDOWN"}
            data={match?.removeCountdown}
            dispatchDetail={dispatchDetail}
            title={"When to show LIVE & remove countdown"}
          />
          <PlayerTiming
            dispatchActionType={"ENDED-EVENT"}
            data={match?.endedEvent}
            dispatchDetail={dispatchDetail}
            title={"When to remove LIVE & display ended event"}
          />
        </div>
        <div className={classes["third"]}>
          <Poll
            data={{
              showsPoll: match?.showsPoll,
              firstTeamPoll: match?.firstTeamPoll,
              secondTeamPoll: match?.secondTeamPoll,
            }}
            dispatchDetail={dispatchDetail}
          />

          <EventId data={match?.matchId} dispatchDetail={dispatchDetail} />
        </div>
      </div>
      <div className={classes["wwe"]}>
        {match.sportCategory === "fights" || match.sportCategory === "ufc" ? (
          <BoxingAPI
            booxingfighters={booxingfighters}
            dispatchBoxingFighters={dispatchBoxingFighters}
            mainEvent={mainEvent}
            dispatchMainEvent={dispatchMainEvent}
          />
        ) : match.sportCategory === "f1" ? (
          <F1API
            positions={F1Positions}
            dispatchPositions={dispatchF1Positions}
          />
        ) : match.sportCategory === "horseracing" ? (
          <HorseRacingAPI
            horseRiders={horseRiders}
            dispatchHorseRiders={dispatchHorseRiders}
          />
        ) : match.sportCategory === "nascar" ? (
          <NascarAPI drivers={drivers} dispatchDrivers={dispatchDrivers} />
        ) : match.sportCategory === "netball" ? (
          <NetballAPI lineups={lineups} dispatchLineups={dispatchLineups} />
        ) : match.sportCategory === "tennis" ||
          match.sportCategory === "tabletennis" ? (
          <TennisAPI
            tennisLineups={tennisLineups}
            dispatchTennisLineups={dispatchTennisLineups}
          />
        ) : match.sportCategory === "volleyball" ? (
          <VolleyballAPI
            teamPlayers={teamPlayers}
            dispatchTeamPlayers={dispatchTeamPlayers}
          />
        ) : match.sportCategory === "wwe" ? (
          <WWEAPI
            wweFighters={wweFighters}
            dispatchWweFighters={dispatchWweFighters}
            featuredFighters={featuredFighters}
            dispatchfeaturedFighters={dispatchfeaturedFighters}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Wrapper;
