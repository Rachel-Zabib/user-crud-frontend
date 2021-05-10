import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux';
import {updateUser} from '../../actions/usersAction'
import UpdateUser from './UpdateUser';


function UpdateUserContainer(props) {

    let [state,setState]=useState({});

    useEffect(() => { 
        let userId=props.match.params.id;
        let user=props.users.find((e)=>e._id===userId)
        if(user)
            setState({name:user.name,email:user.email,dragons:user.dragons}) 
        else{
            alert("Incorrect user ID")
        }
       }, [])

   let updateUserClicked=(e,user)=>{
        let cb=()=>{
            alert("User updated successfully");
            props.history.push("/")
        }
        let userId=props.match.params.id;
        props.updateUser(userId,user,cb)
    }

    return (
        <UpdateUser user={state} updateUserClicked={updateUserClicked}/>
    )
 
}
const mapStateToProps = store => ({
    users: store.usersReducer.usersList
  });
  
  export default connect(mapStateToProps,{updateUser})(UpdateUserContainer);