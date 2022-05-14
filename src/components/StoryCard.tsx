import React from 'react';
import Image from 'next/image';
import * as S from './StoryCardStyle';
import { Post } from './type/type';

const StoryCard = ({ userId, id, title, body, thumbnail }: Post) => {
  return (
    <>
      <S.StoryContainer>
        <Image src={thumbnail} alt="more image 1" width={600} height={370} />
        <S.MoreStoryTitle>{title}</S.MoreStoryTitle>
        <S.MoreStoryArticle>{body}</S.MoreStoryArticle>
        {/* <S.MoreStoryAuthor>Sean</S.MoreStoryAuthor> */}
      </S.StoryContainer>
    </>
  );
};

export default StoryCard;
