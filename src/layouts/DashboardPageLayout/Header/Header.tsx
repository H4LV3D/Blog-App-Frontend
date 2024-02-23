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
    { text: "Blogs", link: "/myblogs" },
    { text: "Editor", link: "/editor" },
    { text: "Manage", link: "/manage" },
    { text: "Settings", link: "/settings" },
  ];

  return (
    <div className="w-full hidden lg:block ">
      <MaxWidthProvider>
        <div className="w-full bg-white drop-shadow-xl border rounded-[0.65rem] px-[1.8rem] hidden lg:block ">
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
        </div>
      </MaxWidthProvider>
    </div>
  );
}

export default Header;
