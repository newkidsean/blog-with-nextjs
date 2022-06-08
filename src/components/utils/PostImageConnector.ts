import { Article, Articles, PhotosList, Post, PostsList } from '../type/type';

export const PostImageConnector = (
  photosList: PhotosList,
  articles: Articles
): PostsList => {
  return articles.map((article: Article, idx: number): Post => {
    return {
      ...article,
      thumbnail: photosList[idx]['thumb'],
      mainImage: photosList[idx]['main'],
    };
  });
};
