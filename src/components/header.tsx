"use client";
import React from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import {
  // loggedOutUser,
  freeUser,
  // premiumUser,
} from "@/lib/mockData";

const Header = () => {
  const user = freeUser; //test

  const LogInButtons = !user.isLoggedIn && !user.isPremium;
  const NotPremiumButtons = user.isLoggedIn && !user.isPremium;
  const PremiumButtons = user.isPremium;

  return (
    <div className={"sticky top-0 z-30 w-full"}>
      <div className="flex h-[60px] items-center justify-between p-3 bg-[var(--color-background-primary)]">
        <div className="flex items-center space-x-4">
          <Logo place="header" />
        </div>
        {LogInButtons && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="primaryGray"
              size="ns"
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
        )}
        {NotPremiumButtons && (
          <Button
            variant="primaryYellow"
            size="lg"
            iconSrc="/bolt.svg"
            iconSize="sm"
          >
            Get Premium
          </Button>
        )}
        {PremiumButtons && (
          <Button
            variant="primaryGray"
            size="ns"
            iconSrc="/coins.svg"
            iconSize="sm"
            className="transition-all duration-300 ml-2"
          >
            78365
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
