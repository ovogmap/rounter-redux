import React from 'react';
import { MainComponent } from '../../components';
import axios from 'axios';
import { getUsers, loading } from '../../common/modules/main'
import { useSelector } from 'react-redux';


export default function MainPage() {
  const users = useSelector(state = state.main)

  const fetchUser = async () => {
    try {

    } catch (e) {
      console.log(e)
    }
  }

  return <MainComponent />
}