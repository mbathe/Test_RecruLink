import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.css';

function User(props) {

  return (
  
    <li className="list-item">
      <div>
        <img src={props.user.img} className="avatar" alt='img' />
      </div>
      <div className="content">
        <h1 className='h1'>{props.user.name}</h1>
        <p className='p'>Email: {props.user.email}</p>
        <p className='p'>City: {props.user.city}</p>
        <p className='p'>Country: {props.user.country}</p>
      </div>
    </li>
    
  );
}

export default User;
