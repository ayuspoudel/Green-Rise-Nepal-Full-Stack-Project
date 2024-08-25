import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogsThunk, fetchSingleBlogThunk } from './blogThunk';
import { toast } from 'react-toastify';

const initialFiltersState = {
  search: '',
  sort: 'createdAt',
  status: 'all',
};

const initialState = {
  isLoading: false,
  blogs: [],
  totalBlogs: 0,
  numOfPages: 1,
  page: 1,
  singleBlog: null,
  ...initialFiltersState,
};

const allBlogSlice = createSlice({
  name: 'allBlog',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogsThunk.fulfilled, (state, { payload }) => {
        const { blogs, totalBlogs, numOfPages } = payload;
        state.isLoading = false;
        state.blogs = blogs;
        state.totalBlogs = totalBlogs;
        state.numOfPages = numOfPages;
      })
      .addCase(fetchBlogsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(fetchSingleBlogThunk.pending, (state) => {
        state.isLoading = true;
        state.singleBlog = null; // Reset singleBlog when a new fetch begins
      })
      .addCase(fetchSingleBlogThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.singleBlog = payload;
      })
      .addCase(fetchSingleBlogThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.singleBlog = null; // Ensure singleBlog is null if fetching fails
        toast.error(payload);
      });
  },
});

export const { setSearch, setSort, setStatus, setPage, clearFilters } = allBlogSlice.actions;
export default allBlogSlice.reducer;
