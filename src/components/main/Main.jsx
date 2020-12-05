import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return (
    <Container>
      <h1>회원 목록</h1>
      <div>
        <form>
          <input type="text" />
          <button>검색</button>
        </form>
      </div>
      <h2>회원 정보</h2>
      <ul>
        <li>리스트</li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;