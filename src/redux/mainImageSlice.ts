import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
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
const imageResponseEditor = (imageRawData: any) => {
  return imageRawData.map((image: any) => {
    return {
      thumb: image.urls.thumb,
      main: image.urls.regular,
    };
  });
};
export const getMainPostImage = createAsyncThunk(
  'mainPostImage/mainImage',
  async () => {
    const mainImages = await unsplashApi.search.getPhotos({
      query: 'coffee shop',
      perPage: 10,
    });

    const mainImagesResponse = mainImages.response?.results;
    const editedImages = imageResponseEditor(mainImagesResponse);
    return editedImages;
  }
);

export const mainImageSlice = createSlice({
  name: 'mainPostImage',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMainPostImage.pending, state => {
        state.pending = true;
      })
      .addCase(getMainPostImage.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getMainPostImage.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectMainPostImage = (state: RootState) => state.mainImage;
export const mainImageSelector = createSelector(
  selectMainPostImage,
  state => state
);
export default mainImageSlice.reducer;
