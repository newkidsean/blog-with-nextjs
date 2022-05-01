import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <CurrentLocation>
        <Title>Blog</Title>
      </CurrentLocation>
      <Menus>
        <Menu>About</Menu>
        <Menu>Blog</Menu>
        <Menu>MyPage</Menu>
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
  font-size: 8rem;
  font-weight: bold;
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
`;
