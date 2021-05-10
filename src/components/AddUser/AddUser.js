import React from 'react'
import UserForm from '../UserForm/UserForm'
import styled from 'styled-components'

const AddUserH1=styled.h1`
    text-align: center;
    margin-top: 50px;
`;


export default function AddUser(props){

    return (
        <div>
            <AddUserH1>Add User</AddUserH1>
            <UserForm buttonText={"Add"} userDetails={{}} emailDisabled={false} onClickForm={props.addUserClicked}/>        
        </div>
    )
}
