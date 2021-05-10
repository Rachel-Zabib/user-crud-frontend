import React from 'react'
import styled from 'styled-components'
import UserForm from '../UserForm/UserForm'

let H1Update=styled.h1`
    text-align: center;
    margin-top: 50px;
`;

export default function UpdateUser(props) {
    return (
        <div>
            <H1Update>Update user</H1Update>
            {(Object.keys(props.user).length !== 0)&&
                <UserForm buttonText={"Update"} userDetails={props.user} emailDisabled={true} onClickForm={props.updateUserClicked}/>        }
            
        </div>
    )
}
