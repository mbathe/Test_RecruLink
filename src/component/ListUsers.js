import User from './User';
import './User.css'
function ListUsers(props){
    const users = props.users;
  
    const listUsers = users.map((user, index) =>  <User key ={index} user ={user} id ={index} addTag={props.addTag} />)

    return ( 
        <div className="list-wrapper">
            <ul className="list">
                {listUsers} 
            </ul>
        </div>
    );
    
  }

  export default ListUsers;