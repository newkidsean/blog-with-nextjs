import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <CurrentLocation>
        <Title>Blog</Title>
      </CurrentLocation>
      <Menus>
        <Link href={'/about'} passHref>
          <Menu>About</Menu>
        </Link>
        <Link href={'/'} passHref>
          <Menu>Blog</Menu>
        </Link>
        <Link href={'/mypage'} passHref>
          <Menu>MyPage</Menu>
        </Link>
      </Menus>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 5rem 6rem;
`;

const CurrentLocation = styled.div`
  font-size: 8rem;
  font-weight: bold;
`;
const Title = styled.div`
  margin-left: 1rem;
`;
const Menus = styled.div`
  display: flex;
  margin-right: 2rem;
`;
const Menu = styled.div`
  margin: 0 2rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
