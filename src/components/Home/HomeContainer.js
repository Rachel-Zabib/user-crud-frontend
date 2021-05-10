import React from 'react';
import { connect } from 'react-redux';
import {removeUser} from '../../actions/usersAction'
import Home from './Home';

function HomeContainer(props){
  
  let deleteButton=(e,user)=>{
        if(user.disabled)
        {
            alert("Do not allow delete users that were fetched from the remote server")
        }
        else{
            props.removeUser(user._id,()=> alert("User deleted successfully"))
        }
    }

    return (
       <Home users={props.users} deleteButton={deleteButton}/>
    )
  
}


const mapStateToProps = store => ({
    users: store.usersReducer.usersList
  });
  
  export default connect(mapStateToProps,{removeUser})(HomeContainer);
  
  