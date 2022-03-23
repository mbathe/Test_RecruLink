import React from 'react';
import axios from 'axios';
import './App.css'
import ListUsers from './component/ListUsers'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {users: [], usersFilter: [], nameFilter :"", tagFilter:""};
      this.handleInputName = this.handleInputName.bind(this);
      this.filtreUser = this.filtreUser.bind(this);
      this.addTag = this.addTag.bind(this);
      this.handleInputTag = this.handleInputTag.bind(this);
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
                      country: user.location.country,
                      tags:[]
                  }    
              });
            this.setState({users:users})
            this.setState({usersFilter:users})
            
      })
    .catch((error)=>{console.log(error); })
    }
  
    componentWillUnmount() {
    }


    filtreUser = (nameParam, tagParam) => {
      if(nameParam===""){
        const userFound = this.state.users
        if(tagParam!==""){
          return userFound.filter(el=> {
            const userTagFound = el.tags.filter( tag => tag.toLowerCase().indexOf(tagParam.toLowerCase())!==-1)
            return userTagFound.length > 0;
          });
        }else{
          return userFound;
        }
        
      }else{
        const userFound = this.state.users.filter(el =>  el.name.toLowerCase().indexOf(nameParam.toLowerCase()) !== -1);
        if(tagParam!==""){
          return userFound.filter(el=> {
              const userTagFound = el.tags.filter( tag => tag.toLowerCase().indexOf(tagParam.toLowerCase())!==-1)
              return userTagFound.length > 0;
            });
        }else{
          return userFound;
        }
      }
     
    }

    addTag = (id, tag) => {
      const usersState = this.state.users;
      usersState[id].tags.push(tag.toString());
      this.setState({usersFilter: usersState});
      this.setState({users: usersState});
    }

    handleInputName(e){
        this.setState({
        nameFilter:e.target.value
        })
        const usersFilter = this.filtreUser(e.target.value, this.state.tagFilter);
        this.setState({usersFilter:usersFilter});
        
    }
  
    handleInputTag(e){
      this.setState({
        tagFilter: e.target.value
      })
      
      const usersFilter = this.filtreUser(this.state.nameFilter, e.target.value);
      this.setState({usersFilter:usersFilter});
     
    }

    render() {
      return (
        <div className="App">
        <header>
        <div>
          <input type="text" placeholder="Search by name" value= {this.state.nameFilter} onChange={this.handleInputName} ></input>
        </div>
        <div>
          <input type="text" placeholder="Search by tag" value= {this.state.tagFilter} onChange={this.handleInputTag} ></input>
        </div>
  
          <div>
           <ListUsers users = {this.state.usersFilter} addTag ={this.addTag} />
          </div>
        </header>
      </div>
      );
    }
  }

export default App;
