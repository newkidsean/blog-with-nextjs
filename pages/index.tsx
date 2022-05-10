import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../src/components/Header';
import MainPost from '../src/components/MainPost';
import MoreStories from '../src/components/MoreStories';

const Home: NextPage = () => {
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
