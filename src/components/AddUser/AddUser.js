import React, { Component } from 'react'
import UserForm from '../UserForm/UserForm'
import './AddUser.css'
import { connect } from 'react-redux';
import {updateUsers} from '../../actions/usersAction'
import axios from 'axios';

class AddUser extends Component {

    addUserClicked(e,user){
        axios.post("http://localhost:5000/users",user).then((res)=>{
          let userList= [...this.props.users];
          userList.push(res.data);
          this.props.updateUsers(userList);
          alert("User successfully added");
          this.props.history.push("/")
        }).catch((err)=>{
            console.log("error: ",err);
        })


    }

    render() {
        return (
            <div className="addUserDiv">
                <h1>Add User</h1>
                <UserForm buttonText={"Add"} userDetails={{}} emailDisabled={false}  onClickForm={this.addUserClicked.bind(this)}/>        
            </div>
        )
    }
}
const mapStateToProps = store => ({
    users: store.usersReducer.usersList
  });
  
  export default connect(mapStateToProps,{updateUsers})(AddUser);