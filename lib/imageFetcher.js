import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: `${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
});
const imageResponseEditor = (imageRawData) => {
  return imageRawData.map((image) => {
    return {
      thumb: image.urls.thumb,
      main: image.urls.regular,
    };
  });
};
export const imageGetKey = (size) => size;
export const imageFetcher = async (size) => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'rainy city night',
    per_page: size
  });
  const photoResponse = photos.response.results;

  return imageResponseEditor(photoResponse);
}
