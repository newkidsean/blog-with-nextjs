import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import * as S from './MainPostStyle';
import { PostImageConnector } from './utils/PostImageConnector';
import { PostsList } from './type/type';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getMainPostImage, mainImageSelector } from '../redux/mainImageSlice';
import {
  getMainPostArticle,
  mainArticleSelector,
} from '../redux/mainArticleSlice';

const MainPost: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: imageData,
    pending: imagePending,
    error: imageError,
  } = useAppSelector(mainImageSelector);
  const {
    data: articleData,
    pending: articlePending,
    error: articleError,
  } = useAppSelector(mainArticleSelector);

  const [postsList, setPostsList] = useState<PostsList>([]);

  useEffect(() => {
    dispatch(getMainPostImage());
    dispatch(getMainPostArticle());
  }, [dispatch]);

  useEffect(() => {
    if (imageData && articleData) {
      const posts = PostImageConnector(imageData, articleData);
      console.log('posts :', posts);
      setPostsList(posts);
    }
  }, [imageData, articleData]);

  if (imagePending || articlePending) return <div>waiting...</div>;
  if (imageError || articleError) return <div>Something went wrong...</div>;
  return (
    <S.MainPostContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
      >
        {postsList.map(post => {
          return (
            <SwiperSlide key={post.id}>
              <S.MainPost>
                <Image
                  src={post.mainImage}
                  alt="main image"
                  layout="responsive"
                  width={1080}
                  height={607}
                />
                <S.PostInfo>
                  <S.Title>{post.title}</S.Title>
                  <S.ArticleNAuthor>
                    <S.Article>{post.body}</S.Article>
                    {/* <S.Author></S.Author> */}
                  </S.ArticleNAuthor>
                </S.PostInfo>
              </S.MainPost>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.MainPostContainer>
  );
};

export default MainPost;
