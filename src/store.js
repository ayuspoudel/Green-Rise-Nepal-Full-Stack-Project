import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './features/job/jobSlice';
import userSlice from './features/user/userSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';
import allBlogSlice from './features/Blog/blogSlice'; // Add this line
import surveyReducer from './features/surveyForm/surveySlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
    allBlog: allBlogSlice, 
    survey: surveyReducer,
  },
});