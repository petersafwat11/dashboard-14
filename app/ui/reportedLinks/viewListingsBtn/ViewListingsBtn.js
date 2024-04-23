"use client";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./viewListingsBtn.module.css";
const ViewListingsBtn = ({ eventLink }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (eventLink) {
          router.push(eventLink);
        }
      }}
      className={classes["button"]}
    >
      View Listing
    </button>
  );
};

export default ViewListingsBtn;
