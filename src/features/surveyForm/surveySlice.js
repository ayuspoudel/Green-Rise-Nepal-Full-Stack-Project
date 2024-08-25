import { createSlice } from '@reduxjs/toolkit';
import { submitSurveyThunk } from './surveyThunk';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  surveyData: null,
  error: null, // Added to capture any errors
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitSurveyThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear previous errors on new request
      })
      .addCase(submitSurveyThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.surveyData = payload;
        toast.success('Survey submitted successfully!'); // Optional success message
      })
      .addCase(submitSurveyThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        toast.error(payload || 'Something went wrong'); // Handle error display
      });
  },
});

export default surveySlice.reducer;
