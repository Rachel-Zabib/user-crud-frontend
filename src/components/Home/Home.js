import React,{Component} from 'react';
import { connect } from 'react-redux';
import {updateUsers} from '../../actions/usersAction'
import axios from 'axios'
import './Home.css';


class Home extends Component{
    constructor(props){
        super(props);
        this.deleteButton=this.deleteButton.bind(this);
    }
   deleteButton(e,user){
        if(user.disabled)
        {
            alert("Do not allow delete users that were fetched from the remote server")
        }
        else{
            axios.delete(`https://users-crud-app.herokuapp.com/users/${user._id}`).then( async (response)=>{
              let currentUsers= await axios.get(`https://users-crud-app.herokuapp.com/users`);
              this.props.updateUsers(currentUsers.data);
            }).catch((error)=>{
                console.log("error ",error);
            })
        }
    }

    render(){
        return (
            <div>
                <br/>
                <br/>
                <div class="container bootstrap snippets bootdey">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="main-box no-header clearfix">
                                <div class="main-box-body clearfix">
                                    <div class="table-responsive">
                                        <table class="table user-list">
                                            <thead>
                                                <tr>
                                                    <th class="text-center"><span>Name</span></th>
                                                    <th class="text-center"><span>Email</span></th>
                                                    <th class="text-center"><span>Dragons</span></th>
                                                    <th class="text-center">&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.users.map((user,i)=>{
                                                    return (
                                                        <tr key={i}>
                                                            <td class="text-center">{user.name}</td>
                                                            <td class="text-center">{user.email}</td>
                                                            <td class="text-center">{user.dragons} </td> 
                                                            <td style={{width: "20%"}}>
                                                                <a href={(user.disabled===false)&&`/update/${user._id}`} class={`table-link text-info ${(user.disabled===true)&& "disabledUser"}`}>
                                                                    <span class="fa-stack">
                                                                        <i class="fa fa-square fa-stack-2x"></i>
                                                                        <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                                    </span>
                                                                </a>
                                                                <div className={`deleteDiv ${(user.disabled===true)&& "disabledUser"}`} onClick={(e)=>{this.deleteButton(e,user)}}>
                                                                    <span class="fa-stack">
                                                                        <i class="fa fa-square fa-stack-2x"></i>
                                                                        <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = store => ({
    users: store.usersReducer.usersList
  });
  
  export default connect(mapStateToProps,{updateUsers})(Home);
  
  