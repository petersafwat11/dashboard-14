"use client";
import React, { useEffect, useReducer, useState } from "react";
import classes from "./wrapper.module.css";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import Title from "../title/Title";
import Description from "../description/Description";
import Date from "../date/Date";
import PrizeImage from "../prizeImage/PrizeImage";
import Reset from "../reset/Reset";
import Table from "../table/Table";
import RNG from "../RNG/RNG";
import {
  giveawayPrizeIntialValue,
  prizeReducer,
} from "../../reducers/giveaway";
import axios from "axios";

const Wrapper = ({ paginations, followersData, eventData }) => {
  const [followers, setFollowers] = useState(followersData || []);
  const [selectedFollowers, setSelectedFollowers] = useState([]);
  // const [deleteAlert, setDeleteAlert] = useState(false);
  const [giveawayPrize, dispatchPrizeDetail] = useReducer(
    prizeReducer,
    eventData || giveawayPrizeIntialValue
  );

  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedFollowers, setSelectedFollowers);
  };

  const saveGiveawayPrize = async () => {
    const formData = new FormData();
    formData.append("title", giveawayPrize?.title);
    formData.append("description", giveawayPrize?.description);
    formData.append("startTime", giveawayPrize?.startTime);
    formData.append("endTime", giveawayPrize?.endTime);
    formData.append("prizeImage", giveawayPrize?.prizeImage);

    try {
      const dataSent = await axios.patch(
        `${process.env.BACKEND_SERVER}/giveaway/event
`,
        formData
        // {
        //   headers: {
        //     Authorization: `Bearer ${Cookies.get("token")}`,
        //   },
        // }
      );
      // dispatchPrizeDetail({ type: "RESET-ALL" });
      console.log(dataSent);
    } catch (error) {
      console.log("err", error);
    }
  };
  useEffect(() => {
    setFollowers(followersData || []);
    dispatchPrizeDetail({ type: "UPDATE-ALL", value: eventData });
  }, [followersData, eventData]);
  return (
    <div>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveGiveawayPrize}
          first={"Save"}
        />
      </div>
      <div className={classes["wrapper"]}>
        <Title
          data={giveawayPrize.title}
          dispatchPrizeDetail={dispatchPrizeDetail}
        />
        <div className={classes["description"]}>
          <Description
            data={giveawayPrize.description}
            dispatchPrizeDetail={dispatchPrizeDetail}
          />
        </div>
        <div className={classes["details"]}>
          <Date
            data={{
              startTime: giveawayPrize.startTime,
              endTime: giveawayPrize.endTime,
            }}
            dispatchPrizeDetail={dispatchPrizeDetail}
          />
          <PrizeImage
            data={giveawayPrize.imageSrc}
            dispatchPrizeDetail={dispatchPrizeDetail}
          />
          <Reset dispatchPrizeDetail={dispatchPrizeDetail} />
        </div>
      </div>

      <div className={classes["table"]}>
        <h2 className={classes["sub-heading"]}>Random Winner Generator</h2>
        <Table
          followers={followers}
          selectElement={selectElement}
          paginations={paginations}
        />
      </div>
      <h2 className={classes["sub-heading"]}>Random Winner Generator</h2>
      <RNG />
    </div>
  );
};

export default Wrapper;
