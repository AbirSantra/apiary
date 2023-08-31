"use client";

import Link from "next/link";
import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavigationLinkProps {
  name: string;
  url: string;
  icon: LucideIcon;
}

const NavigationLink = ({ name, url, icon: Icon }: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={cn(
        "text-sm flex justify-center items-center gap-1 transition duration-200",
        isActive
          ? "text-indigo-500 font-bold"
          : "text-slate-400 font-medium hover:text-indigo-500"
      )}
    >
      <Icon className="w-4" />
      <p>{name}</p>
    </Link>
  );
};

export default NavigationLink;
