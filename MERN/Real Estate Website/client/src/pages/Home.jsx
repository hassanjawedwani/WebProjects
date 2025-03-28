import React from 'react'
import {  useSelector } from 'react-redux'

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>Home 
      <h1>{currentUser._id && currentUser._id}</h1>
      <h1>{currentUser.email && currentUser.email}</h1>
      <h1>{currentUser.username && currentUser.username}</h1>
    </div>
  )
}
