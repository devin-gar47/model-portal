"use client";

import React from "react";
import { FaBaseballBall, FaFootballBall } from "react-icons/fa";
import MyIcon from "./MyIcon";

export default function SideNav() {
  return (
    <div className="flex flex-col h-screen fixed top-0 left-0 bg-neutral-50 w-28 items-center shadow-md border-r-2">
      <MyIcon
        Icon={FaFootballBall}
        sport="Football"
        iconBackgroundColor="#78350f"
      />
      <MyIcon
        Icon={FaBaseballBall}
        sport="Baseball"
        iconBackgroundColor="#a8a29e"
      />
    </div>
  );
}
