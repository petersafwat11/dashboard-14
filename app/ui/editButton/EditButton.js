"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import classes from "./editbutton.module.css";
const EditButton = ({id}) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`${pathname}/${id}`);
      }}
      className={classes["edit-button"]}
    >
      Edit{" "}
    </button>
  );
};

export default EditButton;
