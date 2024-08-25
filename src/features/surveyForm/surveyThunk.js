import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitSurveyThunk = createAsyncThunk(
  'survey/submitSurvey',
  async (surveyData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/v1/survey', surveyData);
      return response.data;
    } catch (error) {
      // Handle errors and pass the error message to rejectWithValue
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || 'An error occurred');
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);
