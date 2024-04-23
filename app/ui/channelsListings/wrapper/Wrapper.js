"use client";
import { usePathname, useRouter } from "next/navigation";
import classes from "./wrapper.module.css";
import { useEffect, useState } from "react";
import Popup from "../../popupWrapper/Popup";
import DeleteAlert from "../../deleteAlert/DeleteAlert";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import Table from "../table/Table";
import { createItem } from "@/app/lib/tabelsPages";
const Wrapper = ({ dataFetched, paginations }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [channels, setChannels] = useState(dataFetched?.data?.data || []);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedChannels, setSelectedChannels);
  };
  const createStreamLink = () => {
    createItem(pathname, router);
  };

  const deleteStreamLink = () => {
    deleteItem(
      channels,
      selectedChannels,
      setChannels,
      setSelectedChannels,
      "channels"
    );
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedChannels?.length > 0) {
      setDeleteAlert(!deleteAlert);
    }
     else {
      // notify
      console.log("you have not selected any item to delete", "warning");
    }
  };
  useEffect(() => {
    setChannels(dataFetched?.data?.data || []);
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
        channels={channels}
        selectElement={selectElement}
        paginations={paginations}
      />
    </div>
  );
};

export default Wrapper;
