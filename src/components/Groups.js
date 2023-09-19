import React from 'react'
import img from '../Images/img.webp';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatePresence, motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux';
export default function Groups() {
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
            <p className="ug-title">Available Groups</p>
        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input
          type='text'
          className={`search-box ${lightTheme ? 'light' : 'dark'}`}
          placeholder='search'
        />
        </div>
        <motion.div 
          whileHover={{scale : 1.01}}
          whileTap={{scale:0.9}}
        className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
        </motion.div>
        <motion.div 
          whileHover={{scale : 1.01}}
          whileTap={{scale:0.9}}
        className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
        </motion.div>
        <motion.div 
          whileHover={{scale : 1.01}}
          whileTap={{scale:0.9}}
        className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
        </motion.div>
        <motion.div 
          whileHover={{scale : 1.05}}
          whileTap={{scale:0.9}}
        className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
        </motion.div>
    </motion.div>
    </AnimatePresence>
    
  )
}
