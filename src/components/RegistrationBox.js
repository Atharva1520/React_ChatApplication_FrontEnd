import React from 'react';
import img from '../Images/img.webp';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function RegistrationBox() {
  return (
    <div className="login-container">
    <div className="image-container">
      <img src={img} alt="" />
    </div>
    <div className="login-box">
        <p>Register to Your Account</p>
        <TextField id="outlined-basic" label="Enter UserName" variant="outlined" />
        <TextField id="outlined-basic" type= "email" label="Enter Email" variant="outlined" />
        <TextField id="outlined-basic" label="Enter Password"type='Password' variant="outlined" autoComplete='current-password' />
        <Button variant="contained">Register</Button>
        <p style={{fontSize: '1rem'}}>
             Already have an account? <Link to="/">Login</Link>
           </p>
    </div>
</div>
  )
}
