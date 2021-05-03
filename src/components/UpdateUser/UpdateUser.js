import React, { Component } from 'react'
import UserForm from '../UserForm/UserForm'
import './UpdateUser.css'
import { connect } from 'react-redux';
import {updateUsers} from '../../actions/usersAction'
import axios from 'axios';

class UpdateUser extends Component {
    constructor(props){
        super(props);
        this.state={
        }   
    }

    componentDidMount(){
        let userId=this.props.match.params.id
        axios.get(`https://users-crud-app.herokuapp.com/users/${userId}`).then((res)=>{
            let user=res.data;
            this.setState({name:user.name,email:user.email,dragons:user.dragons}) 
        }).catch((err)=>{
            alert("Incorrect user ID")
            console.log("error:",err);
        })
    }


    updateUserClicked(e,user){
        let userId=this.props.match.params.id
        axios.put(`https://users-crud-app.herokuapp.com/users/${userId}`,user).then(async (res)=>{
          let response=await axios.get(`https://users-crud-app.herokuapp.com/users`);
          this.props.updateUsers(response.data);
          alert("User updated successfully");
          this.props.history.push("/")
        }).catch((err)=>{
            console.log("error: ",err);
        })


    }

    render() {
        return (
            <div className="UpdateUserDiv">
                <h1>Update user</h1>
                {(Object.keys(this.state).length !== 0)&&
                 <UserForm buttonText={"Update"} userDetails={this.state} emailDisabled={true} onClickForm={this.updateUserClicked.bind(this)}/>        }
               
            </div>
        )
    }
}
const mapStateToProps = store => ({
    users: store.usersReducer.usersList
  });
  
  export default connect(mapStateToProps,{updateUsers})(UpdateUser);