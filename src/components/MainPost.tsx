import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import * as S from './MainPostStyle';
import { PostImageConnector } from './utils/PostImageConnector';
import { PhotosList, Articles } from './type/type';

type MainPostProps = {
  photos: PhotosList;
  articles: Articles;
};
const MainPost = ({ photos, articles }: MainPostProps) => {
  const postsList = PostImageConnector(photos, articles);
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
