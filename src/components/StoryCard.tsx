import React from 'react';
import Image from 'next/image';
import mockMoreImg1 from '../images/more-stories-1.jpg';
import mockMoreImg2 from '../images/more-stories-2.jpg';
import mockMoreImg3 from '../images/more-stories-3.jpg';
import mockMoreImg4 from '../images/more-stories-4.jpg';
import mockMoreImg5 from '../images/more-stories-5.jpg';
import mockMoreImg6 from '../images/more-stories-6.jpg';
import * as S from './StoryCardStyle';

const StoryCard = () => {
  return (
    <>
      <S.StoryContainer>
        <Image src={mockMoreImg1} alt="more image 1" width={600} height={370} />
        <S.MoreStoryTitle>More Story Title</S.MoreStoryTitle>
        <S.MoreStoryArticle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          molestias fuga? Quod corrupti non, iste, voluptatibus recusandae
          nihil, porro et maxime corporis modi in repellendus reiciendis
          similique aliquid qui?
        </S.MoreStoryArticle>
        <S.MoreStoryAuthor>Sean</S.MoreStoryAuthor>
      </S.StoryContainer>
      {/* Story 2 */}
      <S.StoryContainer>
        <Image src={mockMoreImg2} alt="more image 2" width={600} height={370} />
        <S.MoreStoryTitle>More Story Title</S.MoreStoryTitle>
        <S.MoreStoryArticle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          molestias fuga? Quod corrupti non, iste, voluptatibus recusandae
          nihil, porro et maxime corporis modi in repellendus reiciendis
          similique aliquid qui?
        </S.MoreStoryArticle>
        <S.MoreStoryAuthor>Sean</S.MoreStoryAuthor>
      </S.StoryContainer>
      {/* Story 3 */}
      <S.StoryContainer>
        <Image src={mockMoreImg3} alt="more image 3" width={600} height={370} />
        <S.MoreStoryTitle>More Story Title</S.MoreStoryTitle>
        <S.MoreStoryArticle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          molestias fuga? Quod corrupti non, iste, voluptatibus recusandae
          nihil, porro et maxime corporis modi in repellendus reiciendis
          similique aliquid qui?
        </S.MoreStoryArticle>
        <S.MoreStoryAuthor>Sean</S.MoreStoryAuthor>
      </S.StoryContainer>
      {/* Story 4 */}
      <S.StoryContainer>
        <Image src={mockMoreImg4} alt="more image 4" width={600} height={370} />
        <S.MoreStoryTitle>More Story Title</S.MoreStoryTitle>
        <S.MoreStoryArticle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          molestias fuga? Quod corrupti non, iste, voluptatibus recusandae
          nihil, porro et maxime corporis modi in repellendus reiciendis
          similique aliquid qui?
        </S.MoreStoryArticle>
        <S.MoreStoryAuthor>Sean</S.MoreStoryAuthor>
      </S.StoryContainer>
      {/* Story 5 */}
      <S.StoryContainer>
        <Image src={mockMoreImg5} alt="more image 5" width={600} height={370} />
        <S.MoreStoryTitle>More Story Title</S.MoreStoryTitle>
        <S.MoreStoryArticle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          molestias fuga? Quod corrupti non, iste, voluptatibus recusandae
          nihil, porro et maxime corporis modi in repellendus reiciendis
          similique aliquid qui?
        </S.MoreStoryArticle>
        <S.MoreStoryAuthor>Sean</S.MoreStoryAuthor>
      </S.StoryContainer>
      {/* Story 6 */}
      <S.StoryContainer>
        <Image src={mockMoreImg6} alt="more image 6" width={600} height={370} />
        <S.MoreStoryTitle>More Story Title</S.MoreStoryTitle>
        <S.MoreStoryArticle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          molestias fuga? Quod corrupti non, iste, voluptatibus recusandae
          nihil, porro et maxime corporis modi in repellendus reiciendis
          similique aliquid qui?
        </S.MoreStoryArticle>
        <S.MoreStoryAuthor>Sean</S.MoreStoryAuthor>
      </S.StoryContainer>
    </>
  );
};

export default StoryCard;
