import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi } from 'unsplash-js';
import type { RootState } from './store';
import type { MainImageState } from './type';

const unsplashApi = createApi({
  accessKey: `${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
});

const initialState: MainImageState = {
  data: null,
  pending: false,
  error: false,
};

export const getMoreStoriesImage = createAsyncThunk(
  'moreImage/moreImage',
  async () => {
    const moreImages = await unsplashApi.search.getPhotos({
      query: 'rainy city night',
      per_page: 10,
    });

    const moreImageResponse = moreImages.response?.results;
    const thumbnails = moreImageResponse?.map(photo => photo.urls.thumb);
    const more = moreImageResponse?.map(photo => photo.urls.regular);

    return [thumbnails, more];
  }
);

export const moreImageSlice = createSlice({
  name: 'moreImage',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMoreStoriesImage.pending, state => {
        state.pending = true;
      })
      .addCase(getMoreStoriesImage.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getMoreStoriesImage.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectMoreStoriesImage = (state: RootState) => state.moreImage;
export default moreImageSlice.reducer;
