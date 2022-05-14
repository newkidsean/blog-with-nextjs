import axios from "axios";

export const getMoreStoriesArticles = async () => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts',
    {
      params: {
        userId: 2
      }
    },
  );

  return posts.data;
}