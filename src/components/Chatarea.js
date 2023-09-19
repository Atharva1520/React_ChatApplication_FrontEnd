import React from 'react'
import './/myStyles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
export default function Chatarea() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeSlice.lightTheme);
  const [conversations,setConversation] = useState(
    {
        name: "Test1",
        lastMessage: "Last Message 1",
        timeStamp:"today",
    },
  )
  const props = conversations.length > 0 ? conversations[0] : {};
  return (
    <div className='charArea-container'>
      <div className={`chat-header ${lightTheme ? 'light' : 'dark'}`}>
        <p className={`con-icon ${lightTheme ? 'light' : 'dark'}`}>{props.name ? props.name[0] : ''}</p>
        <div className="header-text">
            <p className={`con-title ${lightTheme ? 'light' : 'dark'}`}>{props.name}</p>
            <p className="con-timestamp">{props.timeStamp}</p>
        </div>
        <p className="chatHeader-delete">
            <IconButton>
                <DeleteIcon className= {`icon ${lightTheme ? 'light' : 'dark'}`}/>
            </IconButton>
        </p>
      </div>
      <div className="messages-container">
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="chat-inputarea">
        <input type="text" placeholder='Type a Message' className='search-box' />
       <IconButton>
         <SendIcon/>
       </IconButton>
      </div>
    </div>
  )
}
