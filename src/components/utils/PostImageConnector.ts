import { Article, Articles, PhotosList, Post, PostsList } from '../type/type';

export const PostImageConnector = (
  photosList: PhotosList,
  articles: Articles
): PostsList => {
  const thumbnailList = photosList[0];
  const mainImageList = photosList[1];

  return articles.map((article: Article, idx: number): Post => {
    return {
      ...article,
      thumbnail: thumbnailList[idx],
      mainImage: mainImageList[idx],
    };
  });
};
