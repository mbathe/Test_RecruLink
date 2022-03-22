import React from 'react';
import axios from 'axios';
import User from './component/User';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
        axios.get('https://randomuser.me/api')
        .then((res)=>{     
            const users = res.data.results.map(e=> e);
            
            console.log(users)
      })
    .catch((error)=>{console.log(error); })
    }
  
    componentWillUnmount() {
    }
  
    render() {
      return (
        <div >
          {this.state.users.map((user) => <p>Bonjour</p>)}
        </div>
      );
    }
  }