import React from "react";
// import SuggestedInfo from "@/components/shared/SuggestedInfo/SuggestedInfo";
import pageData from "@/data/index.json";

type Props = {};

const Author = (props: Props) => {
  const { blogs } = pageData;
  return (
    <>
      <div className="min-h-[40vh] bg-[#f7f7f7] dark:bg-neutral-800 w-full mt-10">
        <div className="py-10 md:container w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto px-8 xs:px-0">
          <div className="sm:flex items-center justify-between dark:text-neutral-400">
            <div className="left mb-3 sm:mb-0">
              <div className="h-20 w-20 flex items-center justify-center rounded-[50%]">
                <img
                  src={`/assets/Bust/peep-8.svg`}
                  className="w-[75%]"
                  alt="An SVG illustration of a person dressed in different clothings"
                />
              </div>
              <div className="writer mt-3">
                <h2 className="font-[500] text-2xl ">Toluwalope Akinkunmi</h2>
                <p className="text-sm mt-1">
                  2.7k Followers | Senior software developer{" "}
                </p>
                <p className="text-sm mt-2">
                  Senior software developer at{" "}
                  <span className="font-semibold">Gen-Z Tales</span>
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
            <p className="max-w-lg ">
              Get started with writing today and share your thoughts with the
              world. You can also get paid for your work. Click the button below
            </p>
            <button className="border border-black text-black rounded-[0.5rem] text-base font-[500] h-[3rem] px-8 ">
              Write Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
