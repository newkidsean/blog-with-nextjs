import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './store';
import type { MainArticleState } from './type';

const initialState: MainArticleState = {
  data: null,
  pending: false,
  error: false,
};

export const getMainPostArticle = createAsyncThunk(
  'mainPostArticle/mainArticle',
  async () => {
    const posts = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          userId: 1,
        },
      }
    );
    return posts.data;
  }
);

export const mainArticleSlice = createSlice({
  name: 'mainPostArticle',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMainPostArticle.pending, state => {
        state.pending = true;
      })
      .addCase(getMainPostArticle.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getMainPostArticle.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectMainPostArticle = (state: RootState) => state.mainArticle;
export const mainArticleSelector = createSelector(
  selectMainPostArticle,
  state => state
);
export default mainArticleSlice.reducer;
