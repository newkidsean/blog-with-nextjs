import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type HeaderProps = {
  resolvedUrl: string;
};

const Header = ({ resolvedUrl }: HeaderProps) => {
  const isHome = resolvedUrl === '/';
  return (
    <HeaderWrapper>
      <CurrentLocation isHome={isHome}>
        <Title>Blog</Title>
      </CurrentLocation>
      <Menus>
        <Link href={'/about'} passHref>
          <Menu isHome={isHome}>About</Menu>
        </Link>
        <Link href={'/'} passHref>
          <Menu isHome={isHome}>Blog</Menu>
        </Link>
        <Link href={'/mypage'} passHref>
          <Menu isHome={isHome}>MyPage</Menu>
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
  margin: 5rem 0 3rem 0;
`;

const CurrentLocation = styled.div<{ isHome: boolean }>`
  font-size: ${props => (props.isHome ? '9rem' : '3rem')};
  font-weight: bold;
`;
const Title = styled.div`
  margin-left: 2rem;
`;
const Menus = styled.div`
  display: flex;
`;
const Menu = styled.div<{ isHome: boolean }>`
  margin-left: 2.5rem;
  font-size: ${props => (props.isHome ? '2rem' : '1.5rem')};
  font-weight: bold;
  cursor: pointer;
`;
