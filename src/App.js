import React from 'react';
import axios from 'axios';
import './App.css'
import ListUsers from './component/ListUsers'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {users: [], usersFilter: []};
      this.handleInput = this.handleInput.bind(this);
      this.filtreUser = this.filtreUser.bind(this);
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
                      city: user.location.city,
                      country: user.location.country
                  }    
              });
            
            this.setState({users:users})
            this.setState({usersFilter:users})
            
      })
    .catch((error)=>{console.log(error); })
    }
  
    componentWillUnmount() {
    }


    filtreUser = (requete) => {
      return this.state.users.filter(el =>  el.name.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
    }

    handleInput(e){
      
      if(e.target.value===""){
        this.setState({usersFilter:this.state.users});
      }else{
        const userfilter = this.filtreUser(e.target.value);
        this.setState({usersFilter:userfilter});
      }
      
    }
  
    render() {
      return (
        <div className="App">
        <header>
        <div>
          <input type="text" placeholder="Search by name"  onChange={this.handleInput} ></input>
        </div>
  
          <div>
           <ListUsers users = {this.state.usersFilter} />
          </div>
        </header>
      </div>
      );
    }
  }

export default App;
