"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "./wrapper.module.css";
import Popup from "../../popupWrapper/Popup";
import { checkboxClicked, createItem, deleteItem } from "@/app/lib/tabelsPages";
import DeleteAlert from "../../deleteAlert/DeleteAlert";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import Table from "../table/Table";
const Wrapper = ({ dataFetched, paginations }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [streamLinks, setStreamLinks] = useState(dataFetched?.data?.data || []);
  const [selectedStreamLinks, setSelectedStreamLinks] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedStreamLinks, setSelectedStreamLinks);
  };

  const createStreamLink = () => {
    createItem(pathname, router);
  };

  const deleteStreamLink = () => {
    deleteItem(
      streamLinks,
      selectedStreamLinks,
      setStreamLinks,
      setSelectedStreamLinks,
      "streamLink"
    );
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedStreamLinks?.length > 0) {
      setDeleteAlert(!deleteAlert);
    } else {
      console.log("you have not selected any item to delete", "warning");
    }
  };
  useEffect(() => {
    setStreamLinks(dataFetched?.data?.data || []);
  }, [dataFetched]);
  return (
    <div>
      {deleteAlert && (
        <Popup>
          <DeleteAlert
            cancelFunc={toggleDeleteAlert}
            deleteFunc={deleteStreamLink}
          />
        </Popup>
      )}
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={createStreamLink}
          secondButtonFunction={toggleDeleteAlert}
          first={"Create"}
          second={"Delete"}
        />
      </div>
      <Table
        streamLinks={streamLinks}
        selectElement={selectElement}
        paginations={paginations}
      />
    </div>
  );
};

export default Wrapper;
