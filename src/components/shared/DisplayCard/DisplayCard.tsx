"use client";
import React, { useState } from "react";
import Link from "next/link";
import { newBlog } from "@/typings/blog";
import ReactHtmlParser from "react-html-parser";

type Props = {
  display: newBlog;
  arrangement: string;
};

const DisplayCard = ({ display, arrangement }: Props) => {
  return (
    <>
      <Link href={`/blogs/${display?._id}`}>
        <div
          className={`border rounded-xl flex hover:border-neutral-600 ${
            arrangement === "double" ? "" : "w-full items-center"
          } ${arrangement === "cards" ? "flex-col " : ""} `}
        >
          <div
            className={`${
              arrangement === "single"
                ? "w-[30%] lg:w-[25%] xl:w-[20%] rounded-l-xl min-h-[14rem]"
                : arrangement === "double"
                ? "md:hidden xl:block xl:w-[35%] rounded-l-xl min-h-[14rem]"
                : "w-full rounded-t-xl h-[16rem]"
            } bg-neutral-100 `}
          ></div>
          <div
            className={` ${
              arrangement === "single"
                ? "w-[70%] lg:w-[75%] xl:w-[80%] rounded-r-xl h-[14rem]"
                : arrangement === "double"
                ? "md:w-[100%] xl:w-[65%] rounded-r-xl min-h-[14rem]"
                : "w-full rounded-b-xl min-h-[13rem]"
            }   p-6  border `}
          >
            <h1
              className={` ${
                arrangement !== "single"
                  ? "text-xl md:text-2xl mb-2"
                  : "text-xl md:text-3xl mb-2 md:mb-4"
              } font-[500] text-[#000] line-clamp-2`}
            >
              {display?.title}
            </h1>
            <p className="mb-1 sm:mb-2 line-clamp-3 !text-justify text-sm md:text-base ">
              {display?.content && ReactHtmlParser(display?.content)}
              {display?.content}
            </p>
            <p className="mb-0 sm:mb-2 line-clamp-3 text-sm md:text-base">
              Author :{" "}
              <span className="font-[500]">{`${display?.author?.firstName} ${display?.author?.lastName}`}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DisplayCard;
