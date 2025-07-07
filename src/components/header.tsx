"use client";
import React from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/button/logo";

const Header = () => {
  return (
    <div className={"sticky inset-x-0 top-0 z-30 w-full"}>
      <div className="flex h-[60px] items-center justify-between p-3">
        <div className="flex items-center space-x-4">
          <Logo place="header" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="primaryGray"
            size="sm"
            className=" sm:w-[135px] transition-all duration-300 ml-2"
          >
            Login
          </Button>
          <Button
            variant="primaryRose"
            size="md"
            iconSrc="/bolt.svg"
            iconSize="sm"
          >
            Try Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
