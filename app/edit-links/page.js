"use client";
import axios from "axios";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import classes from "./page.module.css";
import ActionsButtons from "../ui/actionsButtons/ActionsButtons";
import Social from "../ui/editLinks/social/Social";
import Domains from "../ui/editLinks/domains/Domains";
import ProtectedBadge from "../ui/editLinks/protected-badge/ProtectedBadge";
import ContactInfo from "../ui/editLinks/contactInfo/ContactInfo";
import Wallets from "../ui/editLinks/wallets/Wallets";
import VpnAndCasino from "../ui/editLinks/vpnAndCasino/VpnAndCasino";
import Giveaway from "../ui/editLinks/giveaway/Giveaway";
import linksReducer from "../ui/reducers/linkReducer";
const Page = () => {
  const [intialFetched, setIntailFetched] = useState(null);
  const fetchLinks = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/links`);
      console.log("data fetched", response.data.data.data);
      dispachNewLink({ type: "FETCH-ALL", value: response.data.data.data[0] });
      setIntailFetched(response.data.data.data[0]);
    } catch (error) {
      console.log("err", error);
    }
  }, []);
  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);
  const [importedLinks, dispachNewLink] = useReducer(linksReducer, {});

  // buttons action functions
  const saveChanges = async () => {
    const id = importedLinks._id;
    const modifiedLinks = { ...importedLinks };
    delete modifiedLinks._id;

    try {
      const updateLinks = await axios.patch(
        `${process.env.BACKEND_SERVER}/links/${id}`,
        JSON.stringify(modifiedLinks), // Convert to JSON string
        {
          headers: {
            "Content-Type": "application/json", // Set the content type header
          },
        }
      );
    } catch (error) {
      console.log("Error :", error);
    }
  };
  const cancelChanges = () => {
    dispachNewLink({ type: "RESET-ALL", value: intialFetched });
  };
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Edit Links</h1>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={cancelChanges}
          first={"Save"}
          second={"Cancel"}
        />
      </div>

      {importedLinks && (
        <div className={classes["details"]}>
          <div className={classes["first"]}>
            <div className={classes["details-wrapper"]}>
              <Social
                dispachNewLinks={dispachNewLink}
                data={importedLinks.social}
              />
              <Domains
                dispachNewLinks={dispachNewLink}
                data={importedLinks.domains}
              />
            </div>
            <div className={classes["details-wrapper"]}>
              <ProtectedBadge
                dispachNewLinks={dispachNewLink}
                data={importedLinks.protectedBadge}
              />
              <ContactInfo
                dispachNewLinks={dispachNewLink}
                data={importedLinks.contactUS}
              />
            </div>
          </div>
          <div className={classes["second"]}>
            <Wallets
              dispachNewLinks={dispachNewLink}
              data={importedLinks.payment}
            />
            <VpnAndCasino
              dispachNewLinks={dispachNewLink}
              data={importedLinks.banners}
            />
          </div>
          <div className={classes["third"]}>
            <Giveaway
              dispachNewLinks={dispachNewLink}
              data={importedLinks.giveaway}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
