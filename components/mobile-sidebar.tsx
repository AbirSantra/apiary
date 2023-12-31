"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { LucideIcon, Menu } from "lucide-react";
import Logo from "./logo";
import NavigationLink from "./navigation-link";

interface MobileSidebarProps {
  navLinks: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}

const MobileSidebar = ({ navLinks }: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button variant={"ghost"} size={"icon"}>
        <Menu />
      </Button>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex-col gap-8 bg-white dark:bg-slate-800">
        <SheetHeader className="flex items-start justify-start">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>Here are all the hubs we offer!</SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex flex-col items-start justify-start gap-6">
          {navLinks.map((link) => (
            <SheetClose key={link.name} asChild>
              <NavigationLink
                name={link.name}
                url={link.url}
                icon={link.icon}
                className="text-base"
                onOpenChange={setIsOpen}
              />
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
