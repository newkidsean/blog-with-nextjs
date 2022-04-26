import React from 'react';

function Main() {
  return <p>Main</p>;
}

// 컴포넌트 안에는 공통 컴포넌트

// 페이지 안에 컴포넌트를 하나씩 생성 - 파스칼 케이스
// 인덱스
// 마이페이지
// 마이페이지 스타일 -> 한 파일에 작성하면 읽기 불편하다
// <S.MyPage> 이런 식으로 스타일을 가져와도 된다
// import * as S from './...'

export default Main;
