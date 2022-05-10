import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: `${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
});

export const getImagesForPost = async () => {
  // const photos = await unsplashApi.search.getPhotos({
  //   query: 'coffee shop',
  //   per_page: 10
  // });
  const photos = await unsplashApi.photos.list({
    // query: 'coffee shop',
    per_page: 10
  });
  const photoResponse = photos.response.results;
  const thumbnails = photoResponse.map(photo => photo.urls.thumb);
  const mainImage = photoResponse.map(photo => photo.urls.regular);
  console.log('reponse', photoResponse);

  return [thumbnails, mainImage];
}