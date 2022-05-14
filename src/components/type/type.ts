export type Photo = string;
export type ThumbnailList = Photo[];
export type MainImageList = Photo[];
export type PhotosList = [ThumbnailList, MainImageList];
export type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type Articles = Article[];
export type Post = Article & {
  thumbnail: string;
  mainImage: string;
};
export type PostsList = Post[];
