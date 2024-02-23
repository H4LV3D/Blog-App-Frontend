import { newBlog } from "@/typings/blog";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  blog: newBlog | null;
  blogs: newBlog[] | null;
  selectedBlog: newBlog | null;
  show: boolean;
}

const initialState: InitialState = {
  blog: null,
  blogs: null,
  selectedBlog: null,
  show: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    fetchBlogs: (state, action: PayloadAction<newBlog[]>) => {
      state.blogs = action.payload;
    },
    fetchBlog: (state, action: PayloadAction<newBlog>) => {
      state.blog = action.payload;
    },
    setSelectedBlog: (state, action: PayloadAction<newBlog>) => {
      state.selectedBlog = action.payload;
    },
    setShowEditModal: (state) => {
      state.show = true;
    },
    hideShowEditModal: (state) => {
      state.show = false;
    },
  },
});

export const {
  fetchBlogs,
  fetchBlog,
  setSelectedBlog,
  setShowEditModal,
  hideShowEditModal,
} = blogSlice.actions;
export default blogSlice.reducer;
