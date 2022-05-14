import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: `${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
});

export const getImagesForMainPost = async () => {
  // TODO : 아래 이미지 확인해 보고, 이상하면 커피숍으로 다시 복구
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee shop',
    per_page: 10
  });
  // const photos = await unsplashApi.photos.list({
  //   per_page: 10
  // });
  const photoResponse = photos.response.results;
  const thumbnails = photoResponse.map(photo => photo.urls.thumb);
  const mainImage = photoResponse.map(photo => photo.urls.regular);
  console.log('reponse', photoResponse);

  return [thumbnails, mainImage];
}