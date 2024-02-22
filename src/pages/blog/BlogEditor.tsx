import React from "react";
import { useForm } from "react-hook-form";
import RichTextEditor from "./RichEditor";

interface BlogFormData {
  title: string;
  content: string;
}

const BlogEditor: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogFormData>();

  const onSubmit = (data: BlogFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Blog Editor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <RichTextEditor
            setContent={(content) => {
              setValue("content", content);
            }}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogEditor;
