"use client";
import React from "react";
import ViewLayout from "@/layouts/ViewLayout/ViewLayout";
import Header from "./sections/header";
import Info from "./sections/info";
import Buttons from "./sections/buttons";
import Read from "./sections/read";
import Author from "./sections/author";
import { useRouter } from "next/router";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import Subscribe from "@/components/home/Subscribe";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { deleteBlog, getBlog, getBlogs } from "@/utils/requests/blog";
import { newBlog } from "@/typings/blog";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setBlog, setShowEditModal } from "@/store/slices/blog/blogSlice";
import ShowNotification from "@/components/Notifications/ShowNotification";
import type { GetStaticProps, GetStaticPaths } from "next";

type Props = {
  selectedBlog: newBlog;
};

const Blog = ({ selectedBlog }: Props) => {
  const router = useRouter();
  const link = router.query.link;
  const [loading, setLoading] = React.useState(false);
  // const [selectedBlog, setSelectedBlog] = React.useState<newBlog>();
  const user = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  // const { isLoading } = useQuery({
  //   queryKey: [`blog-${link}`],
  //   queryFn: async () => {
  //     const blog = await getBlog(link as string);
  //     // dispatch(setSelectedBlog(blog));
  //     // setSelectedBlog(blog);
  //     return blog;
  //   },
  //   enabled: true,
  // });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = deleteBlog(selectedBlog?._id as string);
      return res;
    },
    onSuccess: (data) => {
      ShowNotification(data.message);
      router.push("/blogs");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // React.useEffect(() => {
  //   if (selectedBlog === undefined || selectedBlog === null) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [selectedBlog]);

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
              <div className="md:container mx-auto xs:px-6 ">
                <div className="font-raleway w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto mt-20">
                  <div className="flex justify-between items-center ">
                    <Link href={`/blogs`}>
                      <button className="my-2 text-sm text-neutral-500 hover:text-black border hover:border-black h-[2rem] px-6 rounded-[0.25rem] font-[500] ">
                        Back
                      </button>
                    </Link>
                    {selectedBlog?.author?._id === user?.id && (
                      <div className="flex items-center space-x-4 ">
                        <button
                          onClick={() => {
                            dispatch(setShowEditModal());
                            dispatch(setBlog(selectedBlog));
                          }}
                          className="my-2 text-sm text-neutral-500 hover:text-black border hover:border-black h-[2rem] px-6 rounded-[0.25rem] font-[500] "
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteMutation.mutate()}
                          className="my-2 text-sm text-neutral-500 hover:text-red-500 border hover:border-red-500 h-[2rem] px-6 rounded-[0.25rem] font-[500] "
                        >
                          {deleteMutation.isPending ? (
                            <ButtonLoader />
                          ) : (
                            <span className="">Delete</span>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  <Header selectedBlog={selectedBlog} />

                  <hr className="mt-4 mb-4 dark:border-neutral-800" />
                  {/* <Info selectedBlog={selectedBlog} /> */}

                  <Read selectedBlog={selectedBlog} />

                  {/* <Buttons /> */}
                </div>
              </div>

              <Author selectedBlog={selectedBlog} />

              <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-6 mt-10 pb-6">
                <Subscribe />
              </div>
            </div>
          </ViewLayout>
        )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getBlogs();
  const blogs = await res;

  const paths = blogs.map((blog: any) => ({
    params: { link: blog._id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.link !== "string") {
    return {
      notFound: true,
    };
  }

  const res = await getBlog(params.link);
  const blog = await res;
  return {
    props: {
      selectedBlog: blog,
    },
  };
};

export default Blog;
