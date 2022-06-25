import React from 'react';
import Image from 'next/image';
import mainImage from '../../images/main-mock-image-1.jpg';
import styled from 'styled-components';

const Post = () => {
  return (
    <>
      <Container>
        <PostTitle>Post Title</PostTitle>
        <Image src={mainImage} alt="main image" width={1080} height={607} />
        <Article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          distinctio explicabo voluptates temporibus iste laudantium?
          Exercitationem, expedita. Placeat consequuntur incidunt facere
          cupiditate enim, delectus corporis quos explicabo vel repudiandae?
          Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda odio consequatur ad reprehenderit excepturi velit!
          Distinctio fugiat consectetur iste quia qui deleniti ullam! Eaque
          praesentium deleniti, corporis reiciendis culpa earum? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Accusantium nisi dolorem
          debitis praesentium omnis. Facilis, hic aut sunt neque natus, modi
          perferendis corrupti nam cum sapiente minima possimus similique
          ratione. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Provident aliquam alias quidem sunt eius rem quia? Magni, nam ratione?
          Quo corrupti corporis iusto quos, at neque dicta nesciunt doloribus!
          Enim tempora officiis, natus alias, deserunt facilis consequuntur
          doloribus provident repudiandae minima perferendis. Quasi hic,
          temporibus aperiam eaque deserunt sit aliquam.
        </Article>
      </Container>
    </>
  );
};

export default Post;

const Container = styled.div`
  /* align-items: center;
  justify-content: center; */
`;
const PostTitle = styled.h1`
  font-size: 9rem;
  font-weight: bold;
`;
const Article = styled.p`
  margin: 5rem 0 0 5rem;
  font-size: 1.8rem;
  width: 60vw;
`;
