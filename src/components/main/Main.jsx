import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

export default function Main({ users, loading }) {
  const history = useHistory()
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
      {loading && <p>...로딩중</p>}
      <ul>
        {users?.map(user => {
          return <li style={{cursor: "pointer", marginTop: "5px"}}key={user.id} onClick={() => {history.push(`/detail/${user.id}`)}}>{user.name}</li>
        })}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;