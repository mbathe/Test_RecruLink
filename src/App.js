import React from 'react';
import axios from 'axios';
import User from './component/User';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {users: []};
    }
  
    componentDidMount() {
        axios.get('https://randomuser.me/api')
        .then((res)=>{     
            const users = res.data.results.map(user => 
              {
                return   {
                      name: `${user.name.first} ${user.name.last}`,
                      img: user.picture.large,
                      email: user.email,
                  }    
              });
            this.setState({users:users})
            console.log(users)
      })
    .catch((error)=>{console.log(error); })
    }
  
    componentWillUnmount() {
    }
  
    render() {
      return (
        <div >
           {this.state.users.map((user,index) => <User key ={index} user={user} />)}
        </div>
      );
    }
  }

export default App;
