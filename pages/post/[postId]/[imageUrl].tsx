import type {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSideProps,
} from 'next';
import { SWRConfig } from 'swr';
import styled from 'styled-components';
import Header from '@components/Header';
import Post from '@components/Post/Post';
import Reply from '@components/Post/Reply';
import MoreStories from '@components/MoreStories';
import { getArticlesForMoreStories } from '@lib/more-stories-articles';
import { getImagesForMoreStories } from '@lib/more-stories-images';

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
  query,
}) => {
  const moreStoriesPhotoResponse = await getImagesForMoreStories();
  const moreStoriesArticlesResponse = await getArticlesForMoreStories();
  console.log('post query', query);
  // "photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk2ODl8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTY1NzExMDIxMQ&ixlib=rb-1.2.1&q=80&w=1080"
  const postId = query.postId;
  const imageUrl = query.imageUrl;
  return {
    props: {
      fallback: {
        'https://jsonplaceholder.typicode.com/posts':
          moreStoriesArticlesResponse,
        'https://api.unsplash.com/photos': moreStoriesPhotoResponse,
      },
      resolvedUrl,
      postId,
      imageUrl,
    },
  };
};

const PostPage: NextPage = ({
  fallback,
  resolvedUrl,
  postId,
  imageUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <Container>
          <Header resolvedUrl={resolvedUrl} />
          <Post postId={postId} imageUrl={imageUrl} />
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
