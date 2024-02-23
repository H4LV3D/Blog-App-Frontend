import React from "react";
import pageData from "@/data/index.json";
import ViewLayout from "@/layouts/ViewLayout/ViewLayout";
import Header from "./sections/header";
import Info from "./sections/info";
import Buttons from "./sections/buttons";
import Read from "./sections/read";
import Author from "./sections/author";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import Subscribe from "@/components/home/Subscribe";
import Link from "next/link";

type Props = {
  params: {
    link: number;
  };
};

const Blog = ({ params }: Props) => {
  const router = useRouter();
  const link = Number(router.query.link);
  const { blogs } = pageData;
  const selectedBlog = blogs[link];

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (selectedBlog === undefined || selectedBlog === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [selectedBlog]);

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center w-full h-screen">
          <ButtonLoader />
        </div>
      )}
      {selectedBlog &&
        selectedBlog !== undefined &&
        selectedBlog !== null &&
        selectedBlog?.title && (
          <ViewLayout>
            <div className="bg-white dark:bg-[#191919] min-h-screen w-full">
              <div className="md:container mx-auto xs:px-0 px-8 ">
                <div className="font-raleway w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto mt-20">
                  <div className="flex justify-between items-center ">
                    <Link href={`/blogs`}>
                      <button className="my-2 text-sm text-neutral-500 hover:text-black border hover:border-black h-[2rem] px-6 rounded-[0.25rem] font-[500] ">
                        Back
                      </button>
                    </Link>
                    <div className="flex items-center space-x-4 ">
                      <Link href={`/blogs`}>
                        <button className="my-2 text-sm text-neutral-500 hover:text-black border hover:border-black h-[2rem] px-6 rounded-[0.25rem] font-[500] ">
                          Edit
                        </button>
                      </Link>
                      <Link href={`/blogs`}>
                        <button className="my-2 text-sm text-neutral-500 hover:text-red-500 border hover:border-red-500 h-[2rem] px-6 rounded-[0.25rem] font-[500] ">
                          Delete
                        </button>
                      </Link>
                    </div>
                  </div>

                  <Header selectedBlog={selectedBlog} />

                  <Info selectedBlog={selectedBlog} />

                  <Read selectedBlog={selectedBlog} />

                  <Buttons />
                </div>
              </div>

              <Author />

              <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-0 px-8 mt-10 pb-6">
                <Subscribe />
              </div>
            </div>
          </ViewLayout>
        )}
    </>
  );
};

export default Blog;
