import React,{useState} from 'react'
import styled from 'styled-components';

let UserFormDiv=styled.div`
    width: 50%;
    margin: 30px auto;
`;

let NameSpan=styled.span`
    font-size: 15px;
    color:red;
`;

export default function UserForm(props){

    let [state,setState]=useState({
        name:props.userDetails.name||"",
        email:props.userDetails.email||"",
        dragons:props.userDetails.dragons||0
    })

    return(
        <UserFormDiv>
            <form onSubmit={(e)=>{e.preventDefault(); props.onClickForm(e,state)} } >
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" pattern="[a-z ,.'-]*" required value={state.name} onChange={(e)=>setState({name:e.target.value,email:state.email,dragons:state.dragons})}/>
                    <NameSpan>*Name should contain only the characters: a-z ,.'-</NameSpan>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    {(props.emailDisabled)?
                    <input type="email" class={`form-control`} id="email" disabled required  value={state.email} onChange={(e)=>setState({name:state.name,email:e.target.value,dragons:state.dragons})} />
                    :<input type="email" class={`form-control`} id="email" required  value={state.email} onChange={(e)=>setState({name:state.name,email:e.target.value,dragons:state.dragons})} />}
                    
                </div>
                <div class="mb-3">
                    <label for="dragons" class="form-label">Dragons</label>
                    <input type="number" class="form-control" id="dragons" required value={state.dragons} onChange={(e)=>setState({name:state.name,email:state.email,dragons:e.target.value})}/>
                </div>
                <button class="btn btn-primary" >{props.buttonText}</button>
            </form>
        </UserFormDiv>
    )

}