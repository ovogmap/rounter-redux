import Axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getUser, loadingStart, getError} from '../../common/modules/detail'

export default function Detail({ id }) {
  const {loading, user, error} = useSelector(store => store.detail)
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const fetchUser = async () => {
      dispatch(loadingStart())
      try{
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch(getUser(response.data))
      } catch(e) {
        dispatch(getError(e))
      }
    }
    fetchUser()
  }, [id])
  if(loading) return <h1>...로딩중</h1>
  if(error) return <h1>...에러가 발생했습니다.</h1>
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <h1>{user.name} 의 프로필</h1>
      <h2>nickName: {user.username}</h2>
      <h2>email: {user.email}</h2>
      <h2>phone: {user.phone}</h2>
      <h2>company name: {user.company.name}</h2>
      <h2>phone: {user.phone}</h2>
      <button onClick={() => {history.goBack()}}>뒤로가기</button>
    </div>
  )
}