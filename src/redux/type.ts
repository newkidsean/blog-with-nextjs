export type Thumb = string;
export type MainImage = string;
export type MainImageState = {
  data: [Thumb, MainImage] | null;
  pending: boolean;
  error: boolean;
};

export type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type MainArticleState = {
  data: Article[] | null;
  pending: boolean;
  error: boolean;
};
