import React, { useState} from 'react';
import axios from 'axios';
import './User.css';
import plus from './plus.png';
import moins from './moins.png';

function User(props) {
  
  const [expended,setExpended] = useState(false);

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

        {expended && <div>
          <br/>
          <p className='p'>Test 1: 87%</p>
          <p className='p'>Test 2: 100%</p>
          <p className='p'>Test 3: 92%</p>
          <p className='p'>Test 4: 86%</p>
          <p className='p'>Test 5: 89%</p>
          <p className='p'>Test 6: 88%</p>
          <p className='p'>Test 7: 91%</p>
          <p className='p'>Test 8: 87%</p>
          
        </div>}
        
      </div>
      <div onClick={()=> setExpended(!expended)} className="expended" >
          {expended===false? <img src={plus} className="image" alt='img' /> : <img src={moins} className="image" alt='img' /> }
      </div>
    </li>
    
  );
}

export default User;
