"use client";
import { usePathname, useRouter } from "next/navigation";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import Table from "../table/Table";
import classes from "./wrapper.module.css";

import React, { useEffect, useState } from "react";
import DeleteAlert from "../../deleteAlert/DeleteAlert";
import { checkboxClicked, createItem, deleteItem } from "@/app/lib/tabelsPages";
import Popup from "../../popupWrapper/Popup";

const Wrapper = ({ dataFetched ,paginations}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [news, setNews] = useState(dataFetched?.data?.data || []);
  const [selectedNews, setSelectedNews] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedNews, setSelectedNews);
  };

  const createNews = () => {
    createItem(pathname, router);
  };

  const deleteNews = () => {
    deleteItem(news, selectedNews, setNews, setSelectedNews, "news");
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedNews?.length > 0) {
      setDeleteAlert(!deleteAlert);
    } else {
      // notify
      console.log("you have not selected any item to delete", "warning");
    }
  };
  useEffect(() => {
    setNews(dataFetched?.data?.data || []);
  }, [dataFetched]);
  return (
    <div className={classes["container"]}>
      {deleteAlert && (
        <Popup>
          <DeleteAlert cancelFunc={toggleDeleteAlert} deleteFunc={deleteNews} />
        </Popup>
      )}

      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={createNews}
          secondButtonFunction={toggleDeleteAlert}
          first={"Create Listing"}
          second={"Delete"}
        />
      </div>
      <Table
        news={news}
        selectElement={selectElement}
        paginations={paginations}
      />
    </div>
  );
};

export default Wrapper;
