import axios from "axios";

export const getMainArticles = async () => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts',
    {
      params: {
        userId: 1
      }
    },
  );

  return posts.data;
}