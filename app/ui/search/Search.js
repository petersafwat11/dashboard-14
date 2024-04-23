"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./search.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = (
) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((val) => {
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set("search", val);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className={classes["search-wrapper"]}>
      <input
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className={classes["search"]}
        type="text"
        placeholder="Search"
      />
      <BiSearch className={classes["search-icon"]} />
    </div>
  );
};

export default Search;
