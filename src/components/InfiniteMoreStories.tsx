import React, { useEffect, useRef } from 'react';
import useSWRInfinite from 'swr/infinite';
import styled from 'styled-components';
import StoryCard from './StoryCard';
import { PostsList } from './type/type';
import { getArticlesForMoreStories } from '../../lib/more-stories-articles';
import { getImagesForMoreStories } from '../../lib/more-stories-images';
import { PostImageConnector } from './utils/PostImageConnector';
import useScreenObserver from '../hook/useScreenObserver';
import { getKey, articleFetcher } from '../../lib/articleFetcher';
import { imageFetcher, imageGetKey } from '../../lib/imageFetcher';

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
const PAGE_SIZE = 10;
const InfiniteMoreStories = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScreenObserver(ref);

  // useSWRInfinite -> 사진 용 : 페이지네이션을 적용한 방법으로 수정 필요
  const {
    data: moreImage,
    error: imageError,
    size: imageSize,
    setSize: setImageSize,
    isValidating: imageValidating,
  } = useSWRInfinite(PAGE_SIZE => imageGetKey(PAGE_SIZE), imageFetcher);
  // useSWRInfinite -> 아티클 용 : 페이지네이션을 적용한 방법으로 수정 필요
  const {
    data: moreArticle,
    error: articleError,
    size: articleSize,
    setSize: setArticleSize,
    isValidating: articleValidating,
  } = useSWRInfinite((...args) => getKey(...args, PAGE_SIZE), articleFetcher);

  // 글과 이미지 연결해 주는 함수
  // 데이터가 있을 때 없을 때 맞춰서 삼항연산자로 처리
  const newFetchedPostList =
    moreImage && moreArticle
      ? PostImageConnector(moreImage, moreArticle)
      : null;
  // console.log('moreImage :', moreImage);
  // console.log('moreArticle :', moreArticle);
  // console.log('newFetchedPostList :', newFetchedPostList);
  const moreStoriesList: PostsList =
    newFetchedPostList !== null ? [].concat(...newFetchedPostList) : [];
  const isLoadingInitialData =
    !moreArticle && !moreImage && !articleError && !imageError;
  const isLoadingMore =
    isLoadingInitialData ||
    (imageSize > 0 &&
      articleSize > 0 &&
      moreArticle &&
      moreImage &&
      typeof moreArticle[articleSize - 1] === 'undefined' &&
      moreImage[imageSize - 1] === 'undefined');
  const isEmpty =
    moreArticle?.[0]?.length === 0 && moreImage?.[0]?.length === 0;
  const isReachingEnd = imageSize === PAGE_SIZE;
  const isRefreshing =
    imageValidating &&
    moreImage &&
    moreImage.length === imageSize &&
    articleValidating &&
    moreArticle &&
    moreArticle.length === articleSize;
  // 에러일 때 보여줄 메시지

  // 처음 로딩일 때 보여줄 메시지
  // 스크롤 로딩일 때 보여줄 메시지

  // 더이상 데이터가 없는지 체크해 줄 변수
  useEffect(() => {
    if (isVisible && !isReachingEnd && !isRefreshing) {
      setImageSize(imageSize + 1);
      setArticleSize(articleSize + 1);
    }
  }, [isVisible, isRefreshing]);

  return (
    <>
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
      <div ref={ref}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more issues' : ''}
      </div>
    </>
  );
};

export default InfiniteMoreStories;
