"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import classes from "./paginations.module.css";
const Paginations = ({ rowsPerPage, results }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = Number(searchParams.get("page")) || 1;

  const paginationClick = (val) => {
    const params = new URLSearchParams(searchParams);

    if (typeof val === "number" && !isNaN(val)) {
      params.set("page", val);
      replace(`${pathname}?${params.toString()}`);
    } else if (typeof val === "string") {
      if (val === "+1") {
        params.set("page", page + 1);
        replace(`${pathname}?${params.toString()}`);
      } else if ((val = "-1")) {
        params.set("page", page - 1);
        replace(`${pathname}?${params.toString()}`);
      }
    } else {
      return;
    }
  };
  const changeRows = (val) => {
    const params = new URLSearchParams(searchParams);
    if (typeof val === "number" && !isNaN(val)) {
      params.set("rows", val);
      replace(`${pathname}?${params.toString()}`);
    } else {
      return;
    }
  };

  return (
    <div className={classes["container"]}>
      <p className={classes["rows-num"]}>Rows per page: {rowsPerPage}</p>
      <div className={classes["arrow-wrapper"]}>
        <IoMdArrowDropdown className={classes["arrow-down"]} />

        <div className={classes["rows-options"]}>
          <span className={classes["devider"]}></span>
          {[10, 15, 20].map((num, index) => (
            <p
              onClick={() => {
                changeRows(num);
                // dispatchDetail({ type: "ROW", value: num });
              }}
              key={index}
              className={classes["option"]}
            >
              {num}
            </p>
          ))}
        </div>
      </div>
      <p className={classes["results-num"]}>
        1-
        {rowsPerPage && results && results > rowsPerPage
          ? rowsPerPage
          : results < rowsPerPage
          ? results
          : 10}
        of {results || 0}
      </p>
      <div className={classes["controllers"]}>
        <IoIosArrowBack
          onClick={() => {
            paginationClick("-1");
          }}
        />
        <IoIosArrowForward
          onClick={() => {
            paginationClick("+1");
          }}
        />
      </div>
    </div>
  );
};

export default Paginations;
