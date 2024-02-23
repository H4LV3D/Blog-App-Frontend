import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import ShowNotification from "@/components/Notifications/ShowNotification";
import { updateBlog } from "@/utils/requests/blog";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/hooks/useAppSelector";
import { hideShowEditModal } from "@/store/slices/blog/blogSlice";
import { Editor } from "@tinymce/tinymce-react";

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

const EditBlogModal: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const user = useAppSelector((state) => state.user.data);
  const selectedBlog = useAppSelector((state) => state.blog.blog);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
    reset,
  } = useForm<CreateBlog>({
    defaultValues: {
      title: selectedBlog?.title,
      content: selectedBlog?.content,
      image:
        "https://revaalt.com/wp-content/uploads/woocommerce-placeholder-600x600.png",
      author: selectedBlog?.author._id,
    },
    resolver: yupResolver(CreateBlogSchema),
  });
  const dispatch = useAppDispatch();

  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  function showTiny() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const queryClient = useQueryClient();

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
      const res = await updateBlog(selectedBlog?._id as string, data);
      return res;
    },
    onSuccess: (data) => {
      ShowNotification(data.message);
      dispatch(hideShowEditModal());
      queryClient.invalidateQueries({
        queryKey: [`blog-${selectedBlog?._id}`],
      });
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-40 bg-black bg-opacity-50 "
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        exit={{
          opacity: 0,
          y: -1000,
          transition: {
            duration: 0.3,
          },
        }}
        className="h-[60vh] rounded-[1rem] w-[42rem] p-8 overflow-y-scroll bg-white"
      >
        <div className=" flex justify-between items-center ">
          <h4 className="text-black font-[700] text-2xl ">Edit Blog</h4>
          <button
            onClick={() => dispatch(hideShowEditModal())}
            className="font-[500] text-neutral-500 hover:text-black border py-2 rounded-[0.5rem] px-5 hover:border-black  "
          >
            Cancel
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full ">
            <div className="">
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
                  defaultValue={selectedBlog?.title}
                  {...register("title", { required: true })}
                  className="text-base w-full py-3 px-1 focus:outline-none bg-transparent dark:placeholder:text-neutral-500"
                />
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
                initialValue={selectedBlog?.content}
              />
            </div>

            <div className="flex justify-end space-x-6 mt-8 ">
              {/* <button
                type="button"
                onClick={() => dispatch(hideShowEditModal())}
                className="bg-white text-neutral-500 border hover:border-black hover:text-black font-[500] rounded-[0.5rem] h-[3rem] px-12 "
              >
                Cancel
              </button> */}
              <button
                type="submit"
                className="bg-black text-white font-[500] rounded-[0.5rem] h-[3rem] px-20 "
              >
                {mutation.isPending ? (
                  <ButtonLoader />
                ) : (
                  <span className="">Post</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditBlogModal;
