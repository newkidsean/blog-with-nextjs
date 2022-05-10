import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import mockMainImg1 from '../images/main-mock-image-1.jpg';
import mockMainImg2 from '../images/main-mock-image-2.jpg';
import mockMainImg3 from '../images/main-mock-image-3.jpg';
import mockMainImg4 from '../images/main-mock-image-4.jpg';
import * as S from './MainPostStyle';

const MainPost = () => {
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
        <SwiperSlide>
          <S.MainPost>
            <Image
              src={mockMainImg1}
              alt="main image"
              width={1175}
              height={660}
            />
            <S.PostInfo>
              <S.Title>Post Title</S.Title>
              <S.ArticleNAuthor>
                <S.Article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, beatae molestias. Praesentium obcaecati, modi fuga
                  laborum architecto optio aliquid deleniti voluptates impedit
                  hic similique laboriosam. Consequatur, rem assumenda. Amet,
                  aperiam.
                </S.Article>
                <S.Author>Sean</S.Author>
              </S.ArticleNAuthor>
            </S.PostInfo>
          </S.MainPost>
        </SwiperSlide>
        <SwiperSlide>
          <S.MainPost>
            <Image
              src={mockMainImg2}
              alt="main image"
              width={1175}
              height={660}
            />
            <S.PostInfo>
              <S.Title>Post Title</S.Title>
              <S.ArticleNAuthor>
                <S.Article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, beatae molestias. Praesentium obcaecati, modi fuga
                  laborum architecto optio aliquid deleniti voluptates impedit
                  hic similique laboriosam. Consequatur, rem assumenda. Amet,
                  aperiam.
                </S.Article>
                <S.Author>Sean</S.Author>
              </S.ArticleNAuthor>
            </S.PostInfo>
          </S.MainPost>
        </SwiperSlide>
        <SwiperSlide>
          <S.MainPost>
            <Image
              src={mockMainImg3}
              alt="main image"
              width={1175}
              height={660}
            />
            <S.PostInfo>
              <S.Title>Post Title</S.Title>
              <S.ArticleNAuthor>
                <S.Article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, beatae molestias. Praesentium obcaecati, modi fuga
                  laborum architecto optio aliquid deleniti voluptates impedit
                  hic similique laboriosam. Consequatur, rem assumenda. Amet,
                  aperiam.
                </S.Article>
                <S.Author>Sean</S.Author>
              </S.ArticleNAuthor>
            </S.PostInfo>
          </S.MainPost>
        </SwiperSlide>
        <SwiperSlide>
          <S.MainPost>
            <Image
              src={mockMainImg4}
              alt="main image"
              width={1175}
              height={660}
            />
            <S.PostInfo>
              <S.Title>Post Title</S.Title>
              <S.ArticleNAuthor>
                <S.Article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, beatae molestias. Praesentium obcaecati, modi fuga
                  laborum architecto optio aliquid deleniti voluptates impedit
                  hic similique laboriosam. Consequatur, rem assumenda. Amet,
                  aperiam.
                </S.Article>
                <S.Author>Sean</S.Author>
              </S.ArticleNAuthor>
            </S.PostInfo>
          </S.MainPost>
        </SwiperSlide>
      </Swiper>
    </S.MainPostContainer>
  );
};

export default MainPost;
