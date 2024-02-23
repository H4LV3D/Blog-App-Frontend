"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import ShowNotification from "@/components/Notifications/ShowNotification";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { Editor } from "@tinymce/tinymce-react";
import { createBlog } from "@/utils/requests/blog";
import { useAppSelector } from "@/hooks/useAppSelector";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {};

interface CreateBlog {
  title: string;
  content: string;
  image: string;
  author: string;
}

const CreateBlogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  image: yup.string().required("Image is required"),
  author: yup.string().required("Author is required"),
});

const CreateBlogPageWrapper = ({}: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const user = useAppSelector((state) => state.user.data);

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
    reset,
  } = useForm<CreateBlog>({
    defaultValues: {
      title: "",
      content: "",
      image:
        "https://revaalt.com/wp-content/uploads/woocommerce-placeholder-600x600.png",
      author: user?.email,
    },
    resolver: yupResolver(CreateBlogSchema),
  });

  function showTiny() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const handleEditorChange = (content: any, editor: any) => {
    setValue("content", content);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const editor = document.querySelector(".tox-tinymce");
      if (editor) {
        setLoading(false);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const mutation = useMutation({
    mutationFn: async (data: CreateBlog) => {
      const res = await createBlog(data);
      return res;
    },
    onSuccess: (data) => {
      ShowNotification(data.message);
      reset({
        title: "",
        content: "",
        image:
          "https://revaalt.com/wp-content/uploads/woocommerce-placeholder-600x600.png",
        author: user?.email,
      });
      router.push("/blogs");
    },
    onError: (error) => {
      // @ts-ignore
      ShowNotification(error.response.data.message);
    },
  });

  const onSubmit = async (data: CreateBlog) => {
    mutation.mutate(data);
  };

  return (
    <>
      <MaxWidthProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full py-12 pt-20 pb-16 sm:w-[550px]">
            <h3 className="text-5xl font-[700]  ">Create Blog</h3>

            <div className="mt-6">
              <h5 className="text-lg font-[500] dark:text-neutral-300 ">
                Title
              </h5>
              <p className="text-sm text-neutral-400">
                Pick a suitable title for your content.
              </p>
              <div className="mt-2 px-2 border dark:border-neutral-700 w-full sm:max-w-xl rounded-lg cursor-pointer hover:border-neutral-500 focus-within:border-black ">
                <input
                  id="title"
                  placeholder="Content title"
                  {...register("title", { required: true })}
                  className="text-base w-full py-3 px-1 focus:outline-none bg-transparent dark:placeholder:text-neutral-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-lg font-[500] dark:text-neutral-300 ">
                Upload Image
              </h5>
              <p className="text-sm text-neutral-400 mt-1">
                Upload an image for your content.
              </p>
              <div className="w-full sm:max-w-xl">
                <label className="flex justify-center w-full h-32 px-4 transition bg-transparent border-2 border-gray-300 border-dashed rounded-md dark:border-neutral-700 appearance-none cursor-pointer hover:border-gray-400 focus:outline-none mt-2">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600 dark:text-neutral-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600 dark:text-neutral-300">
                      Drop files to Attach, or{" "}
                      <span className="text-blue-500 underline">browse</span>
                    </span>
                  </span>
                  <input type="file" name="file_upload" className="hidden" />
                </label>
              </div>
            </div>

            {loading && (
              <div className="rounded-lg md:mb-[20vh] ">
                <div className="w-full h-[50vh] flex justify-center items-center">
                  <ButtonLoader color="#000" />
                </div>
              </div>
            )}
            <div className="mt-8">
              {/* // apiKey="i9v9y510jkigwy236v92swqv0j5q8l5gfqgjeqstb73hp8kd" */}
              <Editor
                apiKey="i9v9y510jkigwy236v92swqv0j5q8l5gfqgjeqstb73hp8kd"
                onInit={showTiny}
                onEditorChange={handleEditorChange}
                init={{
                  plugins:
                    " anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  menubar: "file edit view insert tools",
                  tinycomments_mode: "embedded",
                  tinycomments_author: `${user?.firstName} `,
                  height: 500,
                  branding: false,
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],

                  resize: "both",
                  font_formats:
                    "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino;  Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Raleway=raleway; Tahoma=tahoma,arial,helvetica,sans-serif; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva;",

                  content_css: "./mycontent.css",
                  content_style:
                    "@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); body { font-family: 'Raleway'; }",
                }}
                initialValue="Start writing here."
              />
            </div>

            <div className="flex justify-end space-x-6 mt-8 ">
              <button className="bg-white text-neutral-500 border hover:border-black hover:text-black font-[500] rounded-[0.5rem] h-[3rem] px-12 ">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white font-[500] rounded-[0.5rem] h-[3rem] px-16 "
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </MaxWidthProvider>
    </>
  );
};

export default CreateBlogPageWrapper;
