"use client";

import React from "react";
import Link from "next/link";

import { ModeToggle } from "./theme-toggle";
import Logo from "./logo";
import NavigationLink from "./navigation-link";
import { BadgeIndianRupee, CloudSun, Home } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const navLinks = [
  { name: "Home", url: "/", icon: Home },
  { name: "Weather", url: "/weather", icon: CloudSun },
  { name: "Currency", url: "/currency", icon: BadgeIndianRupee },
];

const Navbar = () => {
  return (
    <nav className="padding-x flex h-16 w-full items-center justify-between bg-white shadow-sm transition duration-200 dark:bg-slate-800">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="hidden gap-8 sm:flex">
        {navLinks.map((link) => (
          <div key={link.name}>
            <NavigationLink name={link.name} url={link.url} icon={link.icon} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <ModeToggle />
        <div className="sm:hidden">
          <MobileSidebar navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
