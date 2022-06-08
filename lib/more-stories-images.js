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
export const getImagesForMoreStoriesPost = async () => {
  // const photos = await unsplashApi.photos.list({
  //   per_page: 10
  // });
  const photos = await unsplashApi.search.getPhotos({
    query: 'rainy city night',
    per_page: 10
  });
  const photoResponse = photos.response.results;

  return imageResponseEditor(photoResponse);
}
