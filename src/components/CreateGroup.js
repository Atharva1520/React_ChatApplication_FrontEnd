import { IconButton } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
export default function CreateGroup() {
  return (
    <div className="createGroups-container">
        <input type="text" className="search-box" placeholder='Enter Group Name' />
        <IconButton>
            <DoneIcon />
        </IconButton>
    </div>
  )
}
