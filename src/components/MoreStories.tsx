import React from 'react';
import styled from 'styled-components';
import StoryCard from './StoryCard';

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

const MoreStories = () => {
  return (
    <MoreStoriesWrapper>
      <MoreStoriesTitle>More Stories</MoreStoriesTitle>
      <MoreStoriesContainer>
        <StoryCard />
      </MoreStoriesContainer>
    </MoreStoriesWrapper>
  );
};

export default MoreStories;
