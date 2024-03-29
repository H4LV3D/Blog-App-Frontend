"use client";
import React, { useState, useEffect } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import { GraphChart } from "@/components/shared/Charts/Charts";
import Image from "next/image";
import { useAppSelector } from "@/hooks/useAppSelector";

type User = {
  fullName: string;
  email: string;
  avatarId: number;
};

type Props = {};

const stats = [
  {
    id: 1,
    title: "Word Count",
    description: "0",
    icon: "fas fa-file-word",
  },
  {
    id: 2,
    title: "Articles Read",
    description: "0",
    icon: "fas fa-book",
  },
  {
    id: 3,
    title: "Reading Time",
    description: "0",
    icon: "fas fa-clock",
  },
  {
    id: 4,
    title: "Bookmarks",
    description: "0",
    icon: "fas fa-bookmark",
  },
  {
    id: 5,
    title: "Written Content",
    description: "0",
    icon: "fas fa-pencil-alt",
  },
];

const authors = [
  {
    id: 1,
    name: "John Doe",
    description: "100",
    icon: "fas fa-file-word",
    peep: 45,
  },
  {
    id: 2,
    name: "John Doe",
    description: "30",
    icon: "fas fa-book",
    peep: 56,
  },
  {
    id: 3,
    name: "John Doe",
    description: "400",
    icon: "fas fa-clock",
    peep: 78,
  },
  {
    id: 4,
    name: "John Doe",
    description: "50",
    icon: "fas fa-bookmark",
    peep: 90,
  },
  {
    id: 4,
    name: "John Doe",
    description: "10",
    icon: "fas fa-pencil-alt",
    peep: 34,
  },
];

const DashboardPageWrapper = ({}: Props) => {
  const user = useAppSelector((state) => state.user.data);

  return (
    <>
      <MaxWidthProvider>
        <div className="bg-white dark:bg-[#191919] font-raleway dark:text-neutral-400 ">
          <div className="mb-6 sm:mb-0 sm:h-[12vh] w-full flex flex-col items-start justify-center">
            <h1 className="text-xl md:text-2xl text-black dark:text-neutral-200 font-raleway font-medium mt-16 ">
              Welcome {user?.firstName},
            </h1>
            <p className="text-sm font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
              Here&apos;s what you&apos;ve been up to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 sm:gap-x-4 gap-y-4">
            {stats.map((stat) => (
              <div
                className="border dark:border-neutral-800 p-4 rounded-lg cursor-pointer bg-[#f7f7f7] dark:bg-neutral-800 border-[#f7f7f7] "
                key={stat.id}
              >
                <div className="flex justify-between space-x-4">
                  <div className="">
                    <p className="font-raleway font-[400] text-sm md:text-base text-black dark:text-neutral-400 mb-1">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-sans text-neutral-700 dark:text-neutral-200 font-[600] ">
                      {stat.description}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center">
                    <i
                      className={`${stat.icon} fa-fw text-2xl text-neutral-400 dark:text-neutral-300 mb-1`}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:flex w-full lg:space-x-4 mt-8">
            <div className="lg:border-r dark:border-neutral-700 w-full lg:w-2/3">
              <div className="py-3">
                <h3 className="text-lg font-[500] ">
                  Average Monthly Word Count.
                </h3>
                <p className="text-sm lg:w-2/3 mt-2 ">
                  This graph shows the average number of words you read per
                  month over the last 12 months. You can see that you read the
                  most in March and the least in December.
                </p>
              </div>
              <div className="hidden sm:block p-5 mt-5">
                <GraphChart />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 rounded-2xl flex-grow md:p-3">
              <p className="text-lg font-[500] mb-2">Authors you read.</p>
              <div className="grid grid-cols-1 gap-y-2 ">
                {authors.map((author) => (
                  <div
                    key={author.name}
                    className="border dark:border-neutral-800 p-3 rounded-md cursor-pointer hover:border-black"
                  >
                    <div className="flex space-x-4 items-center">
                      <div className="h-12 w-12 rounded-full">
                        <Image
                          src={`/assets/Bust/peep-${author.peep}.svg`}
                          height={40}
                          width={40}
                          alt="profile"
                        />
                      </div>
                      <div className="">
                        <h3 className="font-raleway font-[500] text-base dark:text-neutral-400">
                          {author.name}
                        </h3>
                        <p className="text-sm ">
                          {author.description} articles written.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-4 mt-8">
            <div className="bg-[#f7f7f7] dark:bg-neutral-800 xl:min-h-[30vh] rounded-2xl p-6">
              <div className="lg:flex">
                <div className="w-full lg:w-2/3">
                  <span className="py-1.5 px-4 border border-black dark:border-neutral-500  text-sm rounded-full ">
                    Collaborate
                  </span>
                  <div className="block lg:hidden">
                    <Image
                      src={`/assets/Bust/peep-8.svg`}
                      height={240}
                      width={240}
                      alt="profile"
                    />
                  </div>
                  <h3 className="text-xl font-[500] lg:mt-8">
                    Explore the world of <br /> writing with others.
                  </h3>
                  <p className="text-sm mt-2 ">
                    Collaboration is a great way to learn and grow as a writer,
                    and it&apos;s a lot of fun too! You can collaborate with
                    other writers on projects, or just chat about writing in
                    general.
                  </p>
                  <div className="mt-4 w-2/3 sm:w-1/2 lg:w-1/3">
                    <button
                      type="button"
                      className="bg-black py-2.5 w-full rounded-md text-white font-raleway font-[500] text-sm"
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
                <div className="hidden lg:w-1/3">
                  <Image
                    src={`/assets/Bust/peep-8.svg`}
                    height={240}
                    width={240}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#f7f7f7] dark:bg-neutral-800 xl:min-h-[30vh] rounded-2xl p-6">
              <div className="lg:flex">
                <div className="w-full lg:w-2/3">
                  <span className="py-1.5 px-4 border border-black dark:border-neutral-500  text-sm rounded-full ">
                    Artificial Intelligence
                  </span>
                  <div className="block lg:hidden">
                    <Image
                      src={`/assets/Bust/peep-8.svg`}
                      height={240}
                      width={240}
                      alt="profile"
                    />
                  </div>
                  <h3 className="text-xl font-[500] mt-8">
                    Experience the power <br />
                    of AI in writing.
                  </h3>
                  <p className="text-sm mt-2 ">
                    AI is a powerful tool that can help you write better and
                    faster. It&apos;s not just for writers, either - it can be
                    used by anyone who wants to communicate with others online.
                  </p>
                  <div className="mt-4 w-2/3 sm:w-1/2 lg:w-1/3">
                    <button
                      type="button"
                      className="bg-black py-2.5 w-full rounded-md text-white font-raleway font-[500] text-sm"
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
                <div className="hidden lg:w-1/3">
                  <Image
                    src={`/assets/Bust/peep-46.svg`}
                    height={240}
                    width={240}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-8">
            <h3 className="font-medium text-xl mb-3">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 gap-y-4 mb-8">
              {Array(3).fill(
                <div className="flex flex-col border dark:border-neutral-800 p-5 rounded-md cursor-pointer hover:border-black ">
                  <h3 className="font-raleway font-[500] text-lg text-neutral-700 dark:text-neutral-400 mb-1">
                    Technology is changing the way we write and read articles.
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-500 ">
                    We are living in a world where technology is changing the
                    way we write and read articles. Technology has made it
                    easier for people to share their thoughts with others, but
                    it has also made it harder for them to get published...
                  </p>
                  <div className="flex space-x-5 mt-3">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center">
                      <Image
                        src={`/assets/Bust/peep-32.svg`}
                        height={40}
                        width={40}
                        alt="profile"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-raleway font-[500] text-black dark:text-neutral-400">
                        John Doe
                      </p>
                      <p className="text-sm font-raleway font-[400] text-black dark:text-neutral-400">
                        2 min read
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default DashboardPageWrapper;
