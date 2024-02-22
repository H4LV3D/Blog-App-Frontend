import React from "react";
import Image from "next/image";

type Props = {
  heading: {
    line1: string;
    line2: string;
  };
  text: string;
  data: any;
};

const Banner = ({ heading, text, data }: Props) => {
  return (
    <div className="grid md:grid-cols-2  h-[85vh] ">
      <div
        className="bg-white  md:h-[85vh] w-full flex flex-col justify-center"
        id="search"
      >
        <div className="grid gap-y-4 md:mt-20">
          <h1 className="text-5xl sm:text-7xl md:text-7xl text-black dark:text-neutral-200 font-clash font-[800]">
            {heading.line1}
            <br className="xs:hidden md:block" /> {heading.line2}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-raleway font-normal dark:text-neutral-400 text-gray-800">
            {text}
          </p>
          <div className="space-x-4 ">
            <button className="h-[3.5rem] w-[10rem] bg-black text-white rounded-[0.5rem] font-[500] ">
              Read Now
            </button>
            <button className="h-[3.5rem] w-[10rem] border border-black text-black rounded-[0.5rem] font-[500] ">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:h-[85vh] w-full md:flex justify-center items-center relative">
        <div className="w-[500px] h-[500px] rounded-lg mt-20 grid place-items-center relative scale-50 md:scale-100  ">
          <div className="w-[400px] h-[400px] flex-shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#646464] border-opacity-10 rounded-lg"></div>
          <div className="w-[400px] h-[400px] flex-shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#646464] hover:border-[#646464] border-opacity-10 rounded-lg rotate-45 "></div>
          <div className="w-[400px] h-[400px] bg-white flex-shrink-0  border border-[#646464] hover:border-black animate-spin border-opacity-10 -rotate-90 rounded-[50%]"></div>
          <Image
            src={`/assets/Bust/peep-43.svg`}
            width={300}
            height={300}
            className="w-[300px] object-cover h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            alt="A vector illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
