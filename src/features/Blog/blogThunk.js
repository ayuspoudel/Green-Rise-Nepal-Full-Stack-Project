import customFetch from '../../utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogsThunk = createAsyncThunk('allBlog/fetchBlogs', async (_, thunkAPI) => {
  const { page, search, sort, status } = thunkAPI.getState().allBlog;

  let url = `/blogs?page=${page}&sort=${sort}&status=${status}`;
  if (search) {
    url += `&search=${search}`;
  }
  try {
    const response = await customFetch.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch blogs');
  }
});

export const fetchSingleBlogThunk = createAsyncThunk('allBlog/fetchSingleBlog', async (id, thunkAPI) => {
  if (!id) {
    return thunkAPI.rejectWithValue('No blog ID provided');
  }
  try {
    const response = await customFetch.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Failed to fetch single blog');
  }
});