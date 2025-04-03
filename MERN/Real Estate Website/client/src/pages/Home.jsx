import React from 'react'
import {  useSelector } from 'react-redux'

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>Home 
      <h1>{currentUser && currentUser._id}</h1>
      <h1>{currentUser && currentUser.email}</h1>
      <h1>{currentUser && currentUser.username}</h1>
    </div>
  )
}
