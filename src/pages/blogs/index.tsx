"use client";
import React, { useState, useEffect } from "react";
import pageData from "@/data/index.json";
import DisplayCard from "@/components/shared/DisplayCard/DisplayCard";
import DisplayNavBar from "@/components/shared/DisplayNavBar/DisplayNavBar";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setArrangement } from "@/store/slices/arrangement/arrangementSlice";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import SearchBox from "@/components/shared/search/Search";
import { useMutation } from "@tanstack/react-query";
import { getBlogs } from "@/utils/requests/blog";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";

type Props = {};

const Blogs = ({}: Props) => {
  // const { blogs } = pageData;
  const dispatch = useAppDispatch();
  const arrangement = useAppSelector((state) => state.arrangement.value);

  const Nav = [
    { text: "For You", link: "#foryou" },
    { text: "Following", link: "#following" },
    { text: "Followers", link: "#following" },
    { text: "Feed", link: "#feed" },
  ];

  const handleResize = () => {
    if (window.innerWidth < 768) dispatch(setArrangement("cards"));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [blogs, setBlogs] = useState([]);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = getBlogs();
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      setBlogs(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  const loading = mutation.isPending;

  return (
    <>
      <PageLayout>
        <div className="py-20 font-raleway mb-12">
          <MaxWidthProvider>
            <div className="py-20 min-h-[60vh] w-full flex items-center justify-center  ">
              <div className="space-y-4 ">
                <h3 className="text-4xl md:text-7xl font-[800] text-center mt-5 ">
                  Blogs
                </h3>
                <p className="max-w-lg text-center ">
                  Discover more about the world of Tech, and the journey of
                  others. Explore the world of Tech and the journey of others.
                </p>
                <SearchBox blogs={blogs} />
              </div>
            </div>
            <DisplayNavBar Nav={Nav} />
            <div
              className={`"w-full grid ${
                arrangement === "single"
                  ? "grid-cols-1"
                  : arrangement === "double"
                  ? "grid-cols-2 gap-8"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-6 md:gap-y-10"
              } `}
            >
              {loading && (
                <div className="w-full h-[28rem] flex items-center justify-center ">
                  <ButtonLoader />
                </div>
              )}
              {!loading &&
                blogs.map((blog, index) => (
                  <div key={index} className="mb-6">
                    <DisplayCard display={blog} arrangement={arrangement} />
                  </div>
                ))}
            </div>
          </MaxWidthProvider>
        </div>
      </PageLayout>
    </>
  );
};

export default Blogs;
