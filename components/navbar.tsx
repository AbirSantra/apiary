import React from "react";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="w-full h-16 padding-x flex items-center justify-between bg-white dark:bg-slate-800 transition-all duration-300">
      <div>Logo</div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
