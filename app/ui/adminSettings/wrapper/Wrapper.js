"use client";
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import classes from "./wrapper.module.css";
import Popup from "../../popupWrapper/Popup";
import DeleteAlert from "../../deleteAlert/DeleteAlert";
import Administrator from "../administrator/Administrator";
import Table from "../table/Table";
import ChangePassword from "../changePassword/ChangePassword";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import { AdministratorReducer, userIntialValue } from "./data";
import { checkboxClicked, deleteItem } from "@/app/lib/tabelsPages";

const Wrapper = ({ dataFetched, paginations }) => {
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [administrators, setAdministrators] = useState(
    dataFetched?.data?.data || []
  );
  const [selectedAdministrators, setSelectedAdministrators] = useState([]);

  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedAdministrators, setSelectedAdministrators);
  };
  const [administratorAddition, dispatchAddition] = useReducer(
    AdministratorReducer,
    userIntialValue
  );
  const deleteAdministrator = () => {
    deleteItem(
      administrators,
      selectedAdministrators,
      setAdministrators,
      setSelectedAdministrators,
      "users"
    );
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedAdministrators?.length > 0) {
      setDeleteAlert(!deleteAlert);
    } else {
      console.log("you have not selected any item to delete", "warning");
    }
  };
  const saveAdministrator = async (type, data, dispatchAction) => {
    let request;
    if (type === "edit") {
      request = axios.patch(
        `${process.env.BACKEND_SERVER}/users/${data._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
    } else {
      request = axios.post(`${process.env.BACKEND_SERVER}/users`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
    }
    try {
      const NewAdministrator = await request;
      dispatchAction({ type: "CLEAR-ALL" });
      console.log("success", NewAdministrator);
    } catch (error) {
      console.log("error", error);
    }
  };
  const makeNewAdministrator = async () => {
    await saveAdministrator("create", administratorAddition, dispatchAddition);
    // setEditPopup(!editPopup);
  };

  useEffect(() => {
    setAdministrators(dataFetched?.data?.data || []);
  }, [dataFetched]);

  return (
    <div>
      {deleteAlert && (
        <Popup>
          <DeleteAlert
            cancelFunc={toggleDeleteAlert}
            deleteFunc={deleteAdministrator}
          />
        </Popup>
      )}

      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} />
      </div>
      <div className={classes["details"]}>
        <ChangePassword
        />
        <Administrator
          saveActions={makeNewAdministrator}
          Administrator={administratorAddition}
          dispatchAction={dispatchAddition}
        />
      </div>
      <h2 className={classes["sub-heading"]}>Members</h2>
      <Table
        // editToggler={editToggler}
        saveAdministrator={saveAdministrator}
        toggleDeleteAlert={toggleDeleteAlert}
        administrators={administrators}
        selectElement={selectElement}
        paginations={paginations}
      />
    </div>
  );
};

export default Wrapper;
