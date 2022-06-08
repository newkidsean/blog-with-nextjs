export type MainImage = {
  thumb: string;
  main: string;
};
export type MainImageState = {
  data: MainImage[] | null;
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

export type RawImage = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};
export type RawImageList = RawImage[];
