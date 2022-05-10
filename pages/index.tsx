import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import Header from '../src/components/Header';
import MainPost from '../src/components/MainPost';
import MoreStories from '../src/components/MoreStories';
import { getImagesForPost } from '../lib/posts-images';

export const getStaticProps: GetStaticProps = async context => {
  const photoResponse = await getImagesForPost();
  console.log('HEYYYY');
  // console.log(photoResponse);
  return {
    props: {
      photoResponse,
    },
  };
};

const Home: NextPage = ({
  photoResponse,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('photoResponse :', photoResponse);
  return (
    <>
      <Container>
        <Header />
        <MainPost />
        <MoreStories />
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
