import React from 'react'
import img from '../Images/img.webp';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { AnimatePresence, motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
export default function ListContainer() {
    const lightTheme = useSelector((state) => state.themeSlice.lightTheme);
  return (
    <AnimatePresence>
            <motion.div 
            initial = {{opacity:0,scale:0}}
            animate = {{opacity:1,scale:1}}
            exit={{opacity:0,scale:0}}
            transition={{
                ease:"anticipate",
                duration:"0.4"
            }}
            className="list-container">
        <div className="ug-header">
            <img src={img} alt="" style={{height:"2rem",width:"2rem"}} />
            <p className="ug-title">Online Users</p>
        </div>
        <motion.div  className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input
          type='text'
          className={`search-box ${lightTheme ? 'light' : 'dark'}`}
          placeholder='search'
        />
        </motion.div>
        <motion.div  className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
        </motion.div>
        <motion.div  className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
        </motion.div>
        <motion.div  className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
        </motion.div>
        <motion.div  className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
        </motion.div>
    </motion.div>
        </AnimatePresence>
    
  )
}
