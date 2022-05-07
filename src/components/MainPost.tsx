import React from 'react';
import Image from 'next/image';
import mockMainImg from '../images/main-mock-image.jpg';
import * as S from './MainPostStyle';

const MainPost = () => {
  return (
    <S.MainPostContainer>
      <S.MainPost>
        <Image
          src={mockMainImg}
          // layout="responsive"
          alt="main image"
          width={1175}
          height={660}
        />
        <S.PostInfo>
          <S.Title>Post Title</S.Title>
          <S.ArticleNAuthor>
            <S.Article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              beatae molestias. Praesentium obcaecati, modi fuga laborum
              architecto optio aliquid deleniti voluptates impedit hic similique
              laboriosam. Consequatur, rem assumenda. Amet, aperiam.
            </S.Article>
            <S.Author>Sean</S.Author>
          </S.ArticleNAuthor>
        </S.PostInfo>
      </S.MainPost>
    </S.MainPostContainer>
  );
};

export default MainPost;
