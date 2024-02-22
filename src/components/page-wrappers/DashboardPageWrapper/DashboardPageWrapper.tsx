"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const About = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="md:container mx-auto px-6 lg:px-0 mb-12">
          <div className="bg-white dark:bg-[#191919] h-[55vh] w-full flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center mt-20 lg:w-[900px]">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-7xl text-black font-[700] text-center">
                Dashboard
              </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-7 lg:w-[900px]">
              <p className="text-sm sm:text-base md:text-lg text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3 mb-8">
                Enjoy your space.
              </p>
            </div>
          </div>

          {/* <hr className="w-full border-gray-200 dark:border-neutral-800" /> */}

          <div className="bg-white dark:bg-[#191919] h-[55vh] w-full mt-4">
            <div className="grid grid-cols-2 gap-4 mb-8"></div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default About;
