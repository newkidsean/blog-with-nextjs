import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './store';
import type { MainArticleState } from './type';

const initialState: MainArticleState = {
  data: null,
  pending: false,
  error: false,
};

export const getMoreStoriesArticle = createAsyncThunk(
  'moreArticle/moreArticle',
  async () => {
    const moreArticles = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          userId: 2,
        },
      }
    );
    return moreArticles.data;
  }
);

export const moreArticleSlice = createSlice({
  name: 'moreArticle',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMoreStoriesArticle.pending, state => {
        state.pending = true;
      })
      .addCase(getMoreStoriesArticle.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getMoreStoriesArticle.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectMoreStoriesArticle = (state: RootState) => state.moreArticle;
export default moreArticleSlice.reducer;
