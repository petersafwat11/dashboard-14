"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./sportsSelection.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SportsSelection = ({ sportsType }) => {
  const categories = [
    "Football",
    "Basketball",
    "NFL",
    "Fights",
    "Netball",
    "Volleyball",
    "Handball",
    "Tennis",
    "WWE",
    "F1",
    "Baseball",
    "Nascar",
    "Darts",
    "Cricket",
    "Hockey",
    "HorseRacing",
    "Rugby",
    "Tabletennis",
    "UFC",
  ];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const category = searchParams.get("category") || "Football";
  const handleChangeCategory = (val) => {
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set("category", val);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{category}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {categories.map((item, index) => (
            <p
              onClick={() => {
                handleChangeCategory(item);
                setShowOptions(false);
              }}
              className={classes["option"]}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SportsSelection;
