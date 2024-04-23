import React, { useReducer, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Checkbox from "../../checkbox/Checkbox";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
import Search from "../../search/Search";
import Popup from "../../popupWrapper/Popup";
import Administrator from "../administrator/Administrator";
import { AdministratorReducer, userIntialValue } from "../wrapper/data";
const Table = ({
  toggleDeleteAlert,
  administrators,
  selectElement,
  paginations,
  saveAdministrator,
}) => {
  const [editPopup, setEditPopup] = useState(false);
  const [administratorEditing, dispatchEditing] = useReducer(
    AdministratorReducer,
    userIntialValue
  );

  const editToggler = (administrator) => {
    dispatchEditing({ type: "UPDATE-ALL", value: administrator });
    setEditPopup(!editPopup);
  };

  const updateAdministrator = async () => {
    await saveAdministrator("edit", administratorEditing, dispatchEditing);
    setEditPopup(!editPopup);
  };

  const cancelEditing = () => {
    dispatchEditing({ type: "CLEAR-ALL" });
    setEditPopup(!editPopup);
  };

  return (
    <div className={classes["table"]}>
      {editPopup && (
        <Popup>
          <Administrator
            cancelEditing={cancelEditing}
            edit={true}
            saveActions={updateAdministrator}
            Administrator={administratorEditing}
            dispatchAction={dispatchEditing}
          />
        </Popup>
      )}

      <div className={classes["search-wrapper"]}>
        <Search />
        <div onClick={toggleDeleteAlert} className={classes["delete-button"]}>
          Delete
        </div>
      </div>

      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>Ticket ID</p>
        <p className={classes["table-cell"]}>Email</p>
        <p className={classes["status"]}>Display Name</p>
        <p className={classes["table-cell"]}>Role </p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {administrators?.length > 0 ? (
        administrators.map((item, index) => (
          <div key={item._id} className={classes["table-row"]}>
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{index + 1}</p>
            <p className={classes["table-cell"]}>{item.email}</p>
            <p className={classes["table-cell"]}>{item.name}</p>
            <p className={classes["table-cell"]}>{item.role}</p>
            <button
              onClick={() => {
                editToggler(item);
              }}
              className={classes["edit-button"]}
            >
              Edit
            </button>
          </div>
        ))
      ) : (
        <NoContent />
      )}

      <Paginations
        rowsPerPage={paginations.rowsPerPage}
        results={paginations.results}
      />
    </div>
  );
};

export default Table;
