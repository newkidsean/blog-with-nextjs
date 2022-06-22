import axios from "axios";

export const getKey = (pageIndex, prevPageData, pageSize) => {
  if (prevPageData && !prevPageData.length) return null;

  return `https://jsonplaceholder.typicode.com/posts?userId=2&_page=${pageIndex + 1}&_limit=${pageSize}`;
}
export const articleFetcher = async (...args) => {
  const posts = await axios.get(...args);

  return posts.data;
}