"use client";

import React from "react";
import Link from "next/link";

import { ModeToggle } from "./theme-toggle";
import Logo from "./logo";
import NavigationLink from "./navigation-link";
import { BadgeIndianRupee, CloudSun, Home } from "lucide-react";

const navLinks = [
  { name: "Home", url: "/", icon: Home },
  { name: "Weather", url: "/weather", icon: CloudSun },
  { name: "Currency", url: "/currency", icon: BadgeIndianRupee },
];

const Navbar = () => {
  return (
    <nav className="w-full h-16 padding-x flex items-center justify-between bg-white dark:bg-slate-800 transition duration-200">
      <div className="flex items-center gap-16">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <div key={link.name}>
              <NavigationLink
                name={link.name}
                url={link.url}
                icon={link.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
