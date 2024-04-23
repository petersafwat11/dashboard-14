"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import DeleteAlert from "../../deleteAlert/DeleteAlert";
import SportsSelection from "../sportsSelection/SportsSelection";
import Table from "../table/Table";
import classes from "./wrapper.module.css";
import {
  checkboxClicked,
  createItem,
  deleteItem,
  flagItem,
} from "@/app/lib/tabelsPages";
import Popup from "../../popupWrapper/Popup";

const Wrapper = ({ dataFetched, paginations }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [sports, setSports] = useState(dataFetched?.data?.data || []);
  const [selectedSports, setSelectedSports] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedSports, setSelectedSports);
  };

  const createSport = () => {
    createItem(pathname, router);
  };

  const deleteSport = () => {
    deleteItem(sports, selectedSports, setSports, setSelectedSports, "sports");
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedSports?.length > 0) {
      setDeleteAlert(!deleteAlert);
    } else {
      console.log("you have not selected any item to delete", "warning");
    }
  };
  const reverseFlagProp = async (itemID) => {
    flagItem(itemID, sports, setSports, "sports");
  };
  useEffect(() => {
    setSports(dataFetched?.data?.data || []);
  }, [dataFetched]);
  return (
    <div className={classes["container"]}>
      {deleteAlert && (
        <Popup>
          <DeleteAlert
            cancelFunc={toggleDeleteAlert}
            deleteFunc={deleteSport}
          />
        </Popup>
      )}

      <div className={classes["sports-listings-top"]}>
        <SportsSelection />
        <ActionsButtons
          firstButtonFunction={createSport}
          secondButtonFunction={toggleDeleteAlert}
          first={"Create Listing"}
          second={"Delete"}
        />
      </div>
      <Table
        reverseFlagProp={reverseFlagProp}
        sports={sports}
        selectElement={selectElement}
        paginations={paginations}
      />
    </div>
  );
};

export default Wrapper;