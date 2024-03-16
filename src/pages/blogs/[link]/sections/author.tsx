"use client";
import React from "react";
import { newBlog } from "@/typings/blog";
import Link from "next/link";
import Image from "next/image";

type Props = {
  selectedBlog: newBlog;
};

const Author = ({ selectedBlog }: Props) => {
  return (
    <>
      <div className="min-h-[40vh] bg-[#f7f7f7] dark:bg-neutral-800 w-full mt-10">
        <div className="py-10 md:container w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto px-8 xs:px-6">
          <div className="sm:flex items-center justify-between dark:text-neutral-400">
            <div className="left mb-3 sm:mb-0">
              <div className="h-20 w-20 flex items-center justify-center rounded-[50%]">
                <Image
                  src={`/assets/Bust/peep-${selectedBlog?.author?.avatarId}.svg`}
                  alt="An SVG illustration of a person dressed in different clothings"
                  width={80}
                  height={80}
                  className="rounded-[50%]"
                />
              </div>
              <div className="writer mt-3">
                <h2 className="font-[500] text-2xl ">
                  {selectedBlog?.author?.firstName}{" "}
                  {selectedBlog?.author?.lastName}
                </h2>
                <p className="text-sm mt-1">
                  0 Followers | {selectedBlog?.author?.userName}
                </p>
              </div>
            </div>
            <div className="right flex items-center sm:justify-end space-x-3">
              <button className="py-2 px-4 text-sm md:text-base rounded-full bg-[#d6d6d6] hover:bg-neutral-600 hover:text-neutral-300 dark:bg-neutral-700">
                Follow
              </button>
              <button className="left flex items-center justify-center h-10 w-10 rounded-[50%] text-black dark:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-300 border dark:border-neutral-800 cursor-pointer bg-[#d6d6d6] dark:hover:bg-neutral-800  dark:hover:text-black">
                <i className="fas fa-envelope fa-lg fa-fw"></i>
              </button>
            </div>
          </div>

          <hr className="mt-6 mb-4 dark:border-neutral-700" />

          <div className="md:container sm:w-[450px]  space-y-3 md:w-[650px] lg:w-[700px] mx-auto xs:px-0 py-10 px-8 mt-4">
            <h3 className="text-2xl font-[600] dark:text-neutral-400 ">
              Start Writing Today
            </h3>
            <p className="max-w-lg tracking-wider ">
              Get started with writing today and share your thoughts with the
              world. You can also get paid for your work. Click the button below
            </p>
            <Link href="/blogs/create" className="pt-4">
              <button className="border border-black text-black rounded-[0.5rem] text-base font-[500] h-[3rem] px-8 mt-4 ">
                Write Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
