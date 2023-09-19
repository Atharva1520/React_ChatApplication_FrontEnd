import React from 'react';
import './/myStyles.css';
import Conversationitems from './Conversationitems';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';

export default function Sidebar() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeSlice.lightTheme);
  const conversations = [
    {
      name: 'Test1',
      lastMessage: 'Last Message 1',
      timeStamp: 'today',
    },
    {
      name: 'Test2',
      lastMessage: 'Last Message 2',
      timeStamp: 'today',
    },
    {
      name: 'Test3',
      lastMessage: 'Last Message 3',
      timeStamp: 'today',
    },
  ];
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`sidebar`}>
      <div className={`sb-header ${lightTheme ? 'light' : 'dark'}`}>
          <IconButton>
            <AccountCircleIcon className={`icon ${lightTheme ? 'light' : 'dark'}`} />
          </IconButton>
       
          <IconButton onClick={() => handleNavigate('app/users')}>
            <PersonAddIcon className={`icon ${lightTheme ? 'light' : 'dark'}`} />
          </IconButton>
          <IconButton onClick={() => handleNavigate('app/groups')}>
            <GroupAddIcon className={`icon ${lightTheme ? 'light' : 'dark'}`}/>
          </IconButton>
          <IconButton onClick={() => handleNavigate('app/create-groups')}>
            <AddCircleIcon className={`icon ${lightTheme ? 'light' : 'dark'}`} />
          </IconButton>
         
        
      </div>
      <div className={`sb-search ${lightTheme ? 'light' : 'dark'}`}>
        <IconButton>
          <SearchIcon className={`icon ${lightTheme ? 'light' : 'dark'}`} />
        </IconButton>
        <input
          type='text'
          className={`search-box ${lightTheme ? 'light' : 'dark'}`}
          placeholder='search'
        />
      </div>
      <div className={`sb-conversations ${lightTheme ? 'light' : 'dark'}`}>
        {conversations.map((conversation) => {
          return <Conversationitems props={conversation} key={conversation.name} />;
        })}
      </div>
    </div>
  );
}
