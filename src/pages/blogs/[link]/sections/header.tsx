"use client";
import React from "react";
import type { newBlog } from "@/typings/blog";
import Link from "next/link";
import Image from "next/image";

type Props = {
  selectedBlog: newBlog;
};

const Header = ({ selectedBlog }: Props) => {
  return (
    <>
      <div className="h-[30vh] flex justify-center border items-center rounded-xl mt-0 mb-8">
        {/* <img
          // src={`/assets/Bust/peep-${Math.floor(
          //   Math.random() * 104
          // ).toString()}.svg`}
          src={selectedBlog?.image}
          className="h-[26rem]"
          alt="An SVG illustration of a person dressed in different clothings"
        /> */}
        <Image
          src={selectedBlog?.image}
          alt="An SVG illustration of a person dressed in different clothings"
          width={250}
          height={400}
          className="rounded-[50%]"
        />
      </div>

      <div className="w-full text-black dark:text-neutral-400">
        <h1 className="font-raleway font-semibold text-2xl sm:text-3xl md:text-4xl mt-4">
          {selectedBlog?.title}
        </h1>
        <Link href={``} className="">
          <p className="mb-0 sm:mb-2 line-clamp-3 text-sm md:text-base">
            Author :{" "}
            <span className="font-[500]">{`${selectedBlog?.author?.firstName} ${selectedBlog?.author?.lastName}`}</span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Header;
