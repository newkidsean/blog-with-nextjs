import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: `${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
});

export const getImagesForMoreStoriesPost = async () => {
  const photos = await unsplashApi.photos.list({
    per_page: 10
  });
  const photoResponse = photos.response.results;
  const thumbnails = photoResponse.map(photo => photo.urls.thumb);
  const mainImage = photoResponse.map(photo => photo.urls.regular);

  return [thumbnails, mainImage];
}