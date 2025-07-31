"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-99 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Logo Section inside the nav */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/music-logo.svg"
            alt="Music Academy Logo"
            width={24}
            height={24}
            className="h-9 w-9"
          />
        </Link>

        {/* Home with navigation to "/" */}
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        {/* Courses dropdown */}
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">     
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses/composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses/songwriting">Song Writing</HoveredLink>
            <HoveredLink href="/courses/production">Music Production</HoveredLink>
          </div>
        </MenuItem>

        {/* ContactUs with navigation to "/contactus" */}
        <Link href="/contactus">
          <MenuItem setActive={setActive} active={active} item="ContactUs" />
        </Link>

        {/* Enrollment with navigation to "/enrollment" */}
        <Link href="/enrollment">
          <MenuItem setActive={setActive} active={active} item="Enroll" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
