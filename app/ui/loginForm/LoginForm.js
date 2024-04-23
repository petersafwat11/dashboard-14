"use client";
import axios from "axios";

import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import classes from "./loginForm.module.css";

const LoginForm = () => {
  const notify = (message, type) => toast[type](message);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const protectedPage = searchParams.get("next");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/users/login`,
        { email: email, password: password }
      );
      Cookies.set("user", JSON.stringify(response.data.data.user), {
        expires: 1,
      });
      Cookies.set("token", response.data.token, {
        expires: 1,
      });
      let next = "/dashboard";
      const search = searchParams.get("next");
      if (search) {
        next = search;
      }
      setEmail("");
      setPassword("");
      router.push(next);
    } catch (error) {
      console.log("error", error);
      notify(error.response.data.message, "error");
    }
  };
  const handleKeyDown = (event) => {
    console.log("normal");
    if (event.key === "Enter") {
      // Handle the Enter key press here
      handleSubmit();
    }
  };

  return (
    <div className={classes["form"]}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
      />
      {protectedPage && (
        <p
          className={classes["not-authorized"]}
        >{`you aren't authorized to access the previous page , login to to gain access`}</p>
      )}

      <div className={classes["input-group"]}>
        <label htmlFor="email" className={classes["label"]}>
          Email
        </label>
        <input
          placeholder="Enter Your Email"
          className={classes["input"]}
          value={email}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="email" className={classes["label"]}>
          Password
        </label>
        <input
          placeholder="Enter Your Password"
          className={classes["input"]}
          value={password}
          type="password"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={handleSubmit} className={classes["login-button"]}>
        Log in
      </button>
      <p
        onClick={() => {
          router.push("/forget-password");
        }}
        className={classes["forget-password"]}
      >
        Forgot password?
      </p>
    </div>
  );
};

export default LoginForm;
