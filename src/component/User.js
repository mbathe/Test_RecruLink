import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User(props) {

  return (
    <div >
        <img src={props.user.img} alt="img" />
        <br/>
        <strong>{props.user.name}</strong>
        <p>Email: {props.user.email}</p>
        <br/>
    </div>
  );
}

export default User;
