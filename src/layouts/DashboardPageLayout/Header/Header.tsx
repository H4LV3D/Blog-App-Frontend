"use client";
import React from "react";
import TetiaryButton from "@/components/shared/buttons/Tetiary";
import { usePathname } from "next/navigation";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

function Header({}: Props) {
  const path = usePathname();

  const navItems = [
    { text: "Dashoard", link: "/dashboard" },
    { text: "Bookmarks", link: "/dashboard" },
    { text: "Blog", link: "/blog" },
    { text: "Saved tems", link: "/dashboard" },
    { text: "Settings", link: "/settings" },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#191919] hidden lg:block ">
      <MaxWidthProvider>
        <div className="flex justify-between items-center w-full py-3 border-b">
          {navItems.map((item, index) => (
            <TetiaryButton
              key={index}
              text={item.text}
              link={item.link}
              small={false}
              active={path === item.link}
            />
          ))}
        </div>
      </MaxWidthProvider>
    </div>
  );
}

export default Header;
