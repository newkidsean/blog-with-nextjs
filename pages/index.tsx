import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { SWRConfig } from 'swr';
import styled from 'styled-components';
import Header from '../src/components/Header';
import MainPost from '../src/components/MainPost';
import MoreStories from '../src/components/MoreStories';
import { getArticlesForMoreStories } from '../lib/more-stories-articles';
import { getImagesForMoreStories } from '../lib/more-stories-images';

export const getStaticProps: GetStaticProps = async context => {
  const moreStoriesPhotoResponse = await getImagesForMoreStories();
  const moreStoriesArticlesResponse = await getArticlesForMoreStories();

  return {
    props: {
      fallback: {
        'https://jsonplaceholder.typicode.com/posts':
          moreStoriesArticlesResponse,
        'https://api.unsplash.com/photos': moreStoriesPhotoResponse,
      },
    },
  };
};

const Home: NextPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Container>
        <Header />
        <MainPost />
        <MoreStories />
      </Container>
    </SWRConfig>
  );
};

export default Home;

const Container = styled.div`
  width: 80vw;
  justify-content: center;
  align-content: center;
  margin-left: 10vw;
`;
