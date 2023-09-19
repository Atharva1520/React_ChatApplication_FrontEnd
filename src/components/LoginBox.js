import React, { useState } from 'react'
import img from '../Images/img.webp';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginBox() {
  return (
    <div className="login-container">
        <div className="image-container">
          <img src={img} alt="" />
        </div>
        <div className="login-box">
            <p>Login to Your Account</p>
            <TextField id="outlined-basic" label="Enter UserName" variant="outlined" />
            <TextField id="outlined-basic" label="Enter Password"type='Password' variant="outlined" autoComplete='current-password' />
            <Button variant="contained">Login</Button>
            <p  style={{fontSize: '1rem'}}>
             Don't have an account? <Link to="/register">Regsiter</Link>
           </p>
        </div>
        
    </div>
  )
}
