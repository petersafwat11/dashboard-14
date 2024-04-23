"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./signout.module.css";
const SignoutBtn = () => {
  const router = useRouter();
  const signoutHandler = async () => {
    try {
      await axios.get(
        `${process.env.BACKEND_SERVER}/users/logout`
      );
      Cookies.remove("user");
      Cookies.remove("token");
      router.push("/login");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <button onClick={signoutHandler} className={classes["sign-out"]}>
      Sign Out
    </button>
  );
};

export default SignoutBtn;
