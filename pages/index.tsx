import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import Header from '../src/components/Header';
import mockMainImg from '../src/images/main-mock-image.jpg';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Header />
        <MainPost>
          <Image
            src={mockMainImg}
            // layout="responsive"
            alt="main image"
            width={1175}
            height={660}
          />
          <PostInfo>
            <Title>Post Title</Title>
            <ArticleNAuthor>
              <Article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, beatae molestias. Praesentium obcaecati, modi fuga
                laborum architecto optio aliquid deleniti voluptates impedit hic
                similique laboriosam. Consequatur, rem assumenda. Amet, aperiam.
              </Article>
              <Author>Sean</Author>
            </ArticleNAuthor>
          </PostInfo>
        </MainPost>
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
const MainPost = styled.div`
  align-content: center;
  justify-content: center;
  /* margin-left: 5rem; */
`;
const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 6rem;
`;

const Title = styled.h1`
  font-size: 6rem;
`;

const ArticleNAuthor = styled.div``;
const Article = styled.p`
  font-size: 1.8rem;
  width: 45vw;
  /* text-align: end; */
`;
const Author = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
`;
