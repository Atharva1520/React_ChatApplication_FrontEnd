import React from 'react';
import img from '../Images/img.webp';

export default function Welcome() {
  return (
    <div className="welcome-area">
      <img className="welcome-logo"src={img} alt="" />
      <p>
        View and text directly to people present in the Chat Rooms.
        </p>
    </div>
  );
}
