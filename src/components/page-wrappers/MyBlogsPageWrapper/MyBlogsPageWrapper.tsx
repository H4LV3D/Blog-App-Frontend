"use client";
import React from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import pageData from "@/data/index.json";
import Image from "next/image";
import DisplayCard from "@/components/shared/DisplayCard/DisplayCard";

type Props = {};

const MyBlogsPageWrapper = ({}: Props) => {
  const { blogs } = pageData;
  const arrangement = "cards";
  return (
    <>
      <MaxWidthProvider>
        <div className="px-8 lg:px-0 dark:text-neutral-400 ">
          <div className="bg-white dark:bg-[#191919] py-10 md:h-[12vh] w-full flex flex-col items-start justify-center">
            <h1 className="text-2xl text-black dark:text-neutral-200 font-raleway font-medium mt-16 ">
              Blogs
            </h1>
            <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
              Read, Schedule and Outline.
            </p>
          </div>

          <div className="w-full md:flex min-h-[30vh] rounded-2xl drop-shadow-md bg-white dark:bg-neutral-800 border dark:border-neutral-700 p-6 px-12">
            <div className="lg:flex items-center">
              <div className="w-full lg:w-2/3">
                <span className="py-1.5 px-4 border border-black dark:border-neutral-700 text-sm rounded-full ">
                  Coming Soon
                </span>
                <div className=" lg:hidden">
                  <Image
                    src={`/assets/Bust/peep-8.svg`}
                    height={240}
                    width={240}
                    alt="profile"
                  />
                </div>
                <h3 className="text-xl font-[500] lg:mt-8 dark:text-neutral-200 ">
                  Ai Writing Assistant.
                </h3>
                <p className="text-sm mt-2 lg:w-2/3 ">
                  Artificial Intelligence is the future of writing. We are
                  building an AI writing assistant that will help you write,
                  format, edit and improve your writing skills, style and
                  performance which in turn will improve your writing and
                  audience engagement.
                </p>
                <div className="mt-4 w-2/3 sm:w-1/2 lg:w-1/3">
                  <button
                    type="button"
                    className="bg-black dark:bg-neutral-800 py-3 w-full rounded-md text-white font-raleway font-[500] text-sm"
                  >
                    Join Wait-list
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center lg:w-1/3 dark:hidden shadow-none ">
                <Image
                  src={`/assets/images/ai-writing-assistant.jpg`}
                  height={240}
                  width={240}
                  alt="profile"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#fff] dark:bg-[#191919] w-full min-h-[30vh] mt-8">
            <h3 className="text-xl font-medium">Bookmarks</h3>
            <div className="py-5 w-full  min-h-[25vh] flex items-center justify-center ">
              <div className="my-auto">
                <p className="text-center text-base dark:text-neutral-400">
                  You have not bookmarked any blog yet.
                </p>
              </div>
              {/* {blogs &&
                blogs?.map((blog, index) => (
                  <div key={index} className="mb-3 min-w-[23rem] mr-5 ">
                    <DisplayCard display={blog} arrangement={arrangement} />
                  </div>
                ))} */}
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default MyBlogsPageWrapper;
