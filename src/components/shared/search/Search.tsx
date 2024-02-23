"use client";
import React, { useState } from "react";
import Link from "next/link";
import type { Blog } from "@/typings/blog";

type Props = {
  blogs: Blog[];
};

function SearchBox({ blogs }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<Blog[]>([]);

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchQuery(value);
    filterResults(value);
  };

  const filterResults = (query: any) => {
    const filtered = blogs.filter((item: Blog) => {
      for (const key in item) {
        if (typeof item[key] === "string") {
          if (item[key].toLowerCase().includes(query.toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    });
    console.log(filtered);
    setFilteredResults(filtered);
  };

  return (
    <>
      <div className="w-full relative">
        <div className="group relative w-full">
          <input
            type="text"
            className="py-3.5 px-4 w-full sm:w-[350px] md:w-[400px] rounded-l-lg text-sm sm:text-base border dark:bg-transparent hover:border-neutral-600 dark:border-neutral-800 dark:hover:border-neutral-800 focus:outline-none dark:text-white focus:border-black dark:focus:border-neutral-700 font-raleway placeholder-neutral-400"
            placeholder="Search key phrases, titles, words"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="p-4 bg-black rounded-r-lg text-white dark:text-neutral-400 font-[500] dark:bg-neutral-800">
            <i className="fas fa-search fa-lg fa-fw"></i>
            Search
          </button>
        </div>
        {searchQuery && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-12 mt-5 h-64 w-full sm:w-[430px] md:w-[485px] bg-white rounded-lg z-50 border-gray-400 hover:border-gray-700 dark:border-gray-600 dark:hover:border-gray-300 overflow-y-auto flex flex-col items-center">
            {filteredResults.length ? (
              filteredResults.map((item: any) => (
                <Link
                  href={item.link}
                  key={item.title}
                  onClick={() => setSearchQuery("")}
                >
                  <div className="w-full border border-gray-300 hover:border-black rounded-md p-2 mb-2">
                    <p className="text-xs font-normal">{item.episode}</p>
                    <h2 className="font-medium text-base line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="line-clamp-1 text-sm">{item.description}</p>
                    <p className="line-clamp-1 text-sm">{item?.author}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="w-full border border-gray-300 hover:border-black rounded-md p-2 mb-2 bg-neutral-50">
                <h2 className="font-medium text-base line-clamp-1">
                  No result found
                </h2>
                <p className="line-clamp-1 text-sm">
                  There are no results found for {searchQuery}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBox;
