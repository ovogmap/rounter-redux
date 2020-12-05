import React, { useEffect } from 'react';
import { MainComponent } from '../../components';
import axios from 'axios';
import { getUsers, loadingStart } from '../../common/modules/main'
import { useDispatch, useSelector } from 'react-redux';


export default function MainPage() {
  const {users, loading, error} = useSelector(state => state.main)
  const dispatch = useDispatch()
  const fetchUser = async () => {
    dispatch(loadingStart())
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(getUsers(result.data))
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return <MainComponent users={users} loading={loading}/>
}