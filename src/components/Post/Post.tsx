import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import styled from 'styled-components';
import { imageFetcher } from '@lib/imageFetcher';
import { articleFetcher } from '@lib/articleFetcher';

type PropsType = {
  postId: string;
  imageUrl: string;
};
const Post = ({ postId, imageUrl }: PropsType) => {
  const {
    data: imageData,
    error: imageError,
    isValidating: imageValidating,
  } = useSWR(`https://images.unsplash.com/${imageUrl}`, imageFetcher);
  const {
    data: articleData,
    error: articleError,
    isValidating: articleValidating,
  } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    articleFetcher
  );

  if (imageValidating || articleValidating) return <div>Loading...</div>;
  if (imageError || articleError) return <div>Something went wrong...</div>;
  return (
    <>
      <Container>
        <PostTitle>{articleData.title}</PostTitle>
        <Image
          src={imageData[0].main}
          alt="main image"
          width={1080}
          height={607}
        />
        <Article>{articleData.body}</Article>
      </Container>
    </>
  );
};

export default Post;

const Container = styled.div`
  /* align-items: center;
  justify-content: center; */
`;
const PostTitle = styled.h1`
  font-size: 9rem;
  font-weight: bold;
`;
const Article = styled.p`
  margin: 5rem 0 0 5rem;
  font-size: 1.8rem;
  width: 60vw;
`;
