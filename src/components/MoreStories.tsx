import React from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import StoryCard from './StoryCard';
import { PostsList } from './type/type';
import { getArticlesForMoreStories } from '../../lib/more-stories-articles';
import { getImagesForMoreStories } from '../../lib/more-stories-images';
import { PostImageConnector } from './utils/PostImageConnector';

const MoreStoriesWrapper = styled.div``;
const MoreStoriesTitle = styled.h1`
  font-size: 7rem;
  font-weight: bold;
  margin-top: 14rem;
`;
const MoreStoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem;
`;

const MoreStories = () => {
  const {
    data: morePhotos,
    error: photoError,
    isValidating: photoLoading,
  } = useSWR('https://api.unsplash.com/photos', getImagesForMoreStories);
  const {
    data: moreArticles,
    error: articleError,
    isValidating: articleLoading,
  } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    getArticlesForMoreStories
  );
  // console.log('morePhotos :', morePhotos);
  // console.log('moreArticles :', moreArticles);
  const moreStoriesList: PostsList = PostImageConnector(
    morePhotos,
    moreArticles
  );
  // console.log('moreStoriesList :', moreStoriesList);
  if (photoLoading || articleLoading) return <div>Loading...</div>;
  if (photoError || articleError) return <div>Something went wrong...</div>;
  return (
    <MoreStoriesWrapper>
      <MoreStoriesTitle>More Stories</MoreStoriesTitle>
      <MoreStoriesContainer>
        {moreStoriesList.map(story => (
          <StoryCard
            key={story.id}
            userId={story.userId}
            id={story.id}
            title={story.title}
            body={story.body}
            thumbnail={story.thumbnail}
            mainImage={story.mainImage}
          />
        ))}
      </MoreStoriesContainer>
    </MoreStoriesWrapper>
  );
};

export default MoreStories;
