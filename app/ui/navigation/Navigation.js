"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineLink, AiOutlineWarning } from "react-icons/ai";
import { BiNews, BiUnlink, BiUser } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import { FiGift, FiMail } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { TbArrowsRightLeft } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { HiDesktopComputer } from "react-icons/hi";

import classes from "./navigation.module.css";
import Link from "next/link";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className={classes["nav"]}>
      <div className={classes["logo-wrapper"]}>
        <Image alt="logo" src="/svg/logo-login.svg" width="27" height="22" />
      </div>
      <Link href={"/"}>
        <BiUser style={{ color: pathname === "/" ? "black" : "gray" }} />
      </Link>

      <Link href={"/sports"}>
        <TbArrowsRightLeft
          style={{
            color: pathname.startsWith("/sports") ? "black" : "gray",
          }}
        />
      </Link>
      <Link href={"/channels"}>
        <HiDesktopComputer
          style={{
            color: pathname.startsWith("/channels") ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/chat"}>
        <BsChatLeftDots
          style={{
            color: pathname === "/chat" ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/reported-links"}>
        <AiOutlineWarning
          style={{
            color: pathname.startsWith("/reported-links") ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/feedback"}>
        <RxQuestionMarkCircled
          style={{
            color: pathname.startsWith("/feedback") ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/giveaway"}>
        <FiGift
          style={{
            color: pathname.startsWith("/giveaway") ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/stream-links"}>
        <AiOutlineLink
          style={{
            color: pathname.startsWith("/stream-links") ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/news"}>
        <BiNews
          style={{
            color: pathname == "/news" ? "black" : "gray",
          }}
        />
      </Link>
      <Link href={"/newsLetter"}>
        <FiMail
          style={{
            color: pathname.startsWith("/newsLetter") ? "black" : "gray",
          }}
        />
      </Link>
      <Link href={"/contact"}>
        <IoMdContacts
          style={{
            color: pathname.startsWith("/contact") ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/edit-links"}>
        <BiUnlink
          style={{
            color: pathname.startsWith("/edit-links") ? "black" : "gray",
          }}
        />
      </Link>

      <Link href={"/admin-settings"}>
        <IoSettingsOutline
          style={{
            color: pathname.startsWith("/admin-settings") ? "black" : "gray",
          }}
        />
      </Link>
    </div>
  );
};

export default Navigation;
