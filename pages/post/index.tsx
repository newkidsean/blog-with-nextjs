import type {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSideProps,
} from 'next';
import { SWRConfig } from 'swr';
import styled from 'styled-components';
import Header from '../../src/components/Header';
import Post from '../../src/components/Post/Post';
import Reply from '../../src/components/Post/Reply';
import MoreStories from '../../src/components/MoreStories';
import { getArticlesForMoreStories } from '../../lib/more-stories-articles';
import { getImagesForMoreStories } from '../../lib/more-stories-images';

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
}) => {
  const moreStoriesPhotoResponse = await getImagesForMoreStories();
  const moreStoriesArticlesResponse = await getArticlesForMoreStories();

  return {
    props: {
      fallback: {
        'https://jsonplaceholder.typicode.com/posts':
          moreStoriesArticlesResponse,
        'https://api.unsplash.com/photos': moreStoriesPhotoResponse,
      },
      resolvedUrl,
    },
  };
};

const PostPage: NextPage = ({
  fallback,
  resolvedUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <Container>
          <Header resolvedUrl={resolvedUrl} />
          <Post />
          <Reply />
          <MoreStories />
        </Container>
      </SWRConfig>
    </>
  );
};

export default PostPage;

const Container = styled.div`
  width: 80vw;
  justify-content: center;
  align-content: center;
  margin-left: 10vw;
`;
