import Image from "next/image";
import React from "react";

import LogoImage from "@/public/apiary-logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <div className="relative flex justify-center items-center h-6 w-6">
        <Image src={LogoImage} alt="Honey comb icon" fill />
      </div>
      <p className="text-base font-semibold">
        <span className="text-indigo-600 dark:text-indigo-500">api</span>ary
      </p>
    </div>
  );
};

export default Logo;
