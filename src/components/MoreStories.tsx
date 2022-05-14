import React from 'react';
import styled from 'styled-components';
import StoryCard from './StoryCard';
import { PhotosList, Articles, PostsList } from './type/type';
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
  /* grid-template-rows: 45%; */
  column-gap: 10rem;
  /* margin-top: 1rem; */
`;

type MoreStoriesProps = {
  morePhotos: PhotosList;
  moreArticles: Articles;
};

const MoreStories = ({ morePhotos, moreArticles }: MoreStoriesProps) => {
  const moreStoriesList: PostsList = PostImageConnector(
    morePhotos,
    moreArticles
  );

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
            // story={story}
          />
        ))}
      </MoreStoriesContainer>
    </MoreStoriesWrapper>
  );
};

export default MoreStories;
