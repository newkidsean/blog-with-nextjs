import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import Header from '../src/components/Header';
import MainPost from '../src/components/MainPost';
import MoreStories from '../src/components/MoreStories';
import { getImagesForMainPost } from '../lib/main-posts-images';
import { getMainArticles } from '../lib/main-posts-articles';
import { getMoreStoriesArticles } from '../lib/more-stories-articles';
import { getImagesForMoreStoriesPost } from '../lib/more-stories-images';

export const getStaticProps: GetStaticProps = async context => {
  const mainPhotoResponse = await getImagesForMainPost();
  const mainArticlesResponse = await getMainArticles();
  const moreStoriesPhotoResponse = await getImagesForMoreStoriesPost();
  const moreStoriesArticlesResponse = await getMoreStoriesArticles();

  return {
    props: {
      mainPhotoResponse,
      mainArticlesResponse,
      moreStoriesPhotoResponse,
      moreStoriesArticlesResponse,
    },
  };
};

const Home: NextPage = ({
  mainPhotoResponse,
  mainArticlesResponse,
  moreStoriesPhotoResponse,
  moreStoriesArticlesResponse,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Container>
        <Header />
        <MainPost photos={mainPhotoResponse} articles={mainArticlesResponse} />
        <MoreStories
          morePhotos={moreStoriesPhotoResponse}
          moreArticles={moreStoriesArticlesResponse}
        />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 80vw;
  justify-content: center;
  align-content: center;
  margin-left: 10vw;
`;
