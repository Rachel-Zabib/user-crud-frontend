import React from 'react'
import { connect } from 'react-redux';
import {addUser} from '../../actions/usersAction'
import AddUser from './AddUser';

function AddUserContainer(props){

    let addUserClicked=(e,user)=>{
        let cb=()=>{
            alert("User successfully added");
            props.history.push("/")/**** */
        }
        props.addUser(user,cb);
    }

    return (
       <AddUser addUserClicked={addUserClicked}/>
    )
}
const mapStateToProps = store => ({
    users: store.usersReducer.usersList
  });
  
  export default connect(mapStateToProps,{addUser})(AddUserContainer);