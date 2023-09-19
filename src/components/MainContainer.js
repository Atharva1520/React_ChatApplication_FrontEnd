import React from 'react'
import './/myStyles.css';
import Sidebar from './Sidebar';
import Chatarea from './Chatarea';
import { useState } from 'react';
import Welcome from './Welcome';
import CreateGroup from './CreateGroup';
import ListContainer from './ListContainer';
import { Outlet } from 'react-router-dom';
export default function MainContainer() {
  return (
   
    <div className='main-container'>
        <Sidebar />
        {/* <Welcome /> */}
        <Outlet />
        {/* <CreateGroup /> */}
        {/* <Chatarea props={conversations}/> */}
      </div>
  )
}
