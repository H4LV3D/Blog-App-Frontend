import React from "react";
import data from "@/data/index.json";
import DisplayCard from "../shared/DisplayCard/DisplayCard";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Generations = ({}: Props) => {
  const { blogs } = data;
  return (
    <>
      <div className="relative py-20 w-full border-t ">
        <div className="mb-4 w-full sm:flex justify-between items-center">
          <h1 className="text-4xl sm:text-4xl text-black font-[700] ">
            Explore Our Collection
          </h1>
          <Link href="/blogs">
            <button className="border border-black text-black text-lg font-[500] rounded-[0.5rem] h-[3.5rem] px-6 ">
              View All
            </button>
          </Link>
        </div>

        <div className="py-8 overflow-hidden">
          <div className="relative ">
            <div className="grid grid-cols-3 gap-4 ">
              {blogs.slice(0, 3).map((blog, index) => (
                <div key={index} className="">
                  <DisplayCard display={blog} arrangement="cards" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4 w-full sm:flex justify-between items-center mt-16">
          <h1 className="text-4xl sm:text-4xl text-black font-[700] ">
            Famous Authors
          </h1>
          <button className="border border-black text-black text-lg font-[500] rounded-[0.5rem] h-[3.5rem] px-6 ">
            See More
          </button>
        </div>

        <div className="py-8 overflow-hidden">
          <div className="relative sm:w-[750px] md:w-[900px] lg:w-[1100px] h-[350px]">
            <div className="absolute top-0 left-0 w-[275px * 100] flex space-x-4 animate-marquee">
              {[...Array(100)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[275px] h-[330px] border dark:border-neutral-700 rounded-lg hover:shadow-xl"
                >
                  <Image
                    src={`/assets/Bust/peep-${index + 1}.svg`}
                    className="mx-auto"
                    width={250}
                    height={305}
                    alt="A vector illustration of a boy holding a laptop open before him"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generations;
