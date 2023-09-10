"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavigationLinkProps {
  name: string;
  url: string;
  icon: LucideIcon;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

const NavigationLink = ({
  name,
  url,
  icon: Icon,
  className,
  onOpenChange,
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      onClick={() => onOpenChange?.(false)}
      className={cn(
        "flex items-center justify-center gap-2 text-sm transition duration-200",
        isActive
          ? "font-bold text-indigo-500"
          : "font-medium text-slate-400 hover:text-indigo-500",
        className,
      )}
    >
      <Icon className="w-4" />
      <p>{name}</p>
    </Link>
  );
};

export default NavigationLink;
