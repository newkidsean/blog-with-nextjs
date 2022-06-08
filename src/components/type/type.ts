export type Photo = string;
export type ThumbnailList = Photo[];
export type MainImageList = Photo[];
export type MainImage = {
  thumb: string | undefined;
  main: string | undefined;
};
export type PhotosList = MainImage[];
export type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type Articles = Article[];
export type Post = Article & {
  thumbnail: string | undefined;
  mainImage: string | undefined;
};
export type PostsList = Post[];
