import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

let DeleteDiv=styled.div`
    display: inline-block;
    color: red;
    opacity:${props=>props.disableduser? 0.2:1};
    
    &:hover{
        cursor:${props=>props.disableduser? "unset":"pointer"};
    }
`;

let RedSpan=styled.span`
    color: red;
`;

let UpdateLink=styled(Link)`
    opacity:${props=>props.disableduser? 0.2:1};
        
    &:hover{
        cursor:${props=>props.disableduser? "unset":"pointer"};
}
`;



export default function Home(props){
    return (
        <div>
            <br/>
            <br/>
            <div class="container bootstrap snippets bootdey">
                <div>
                    <span class="fa-stack text-info">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                    <span> Edit user </span>
                    <RedSpan className={"fa-stack"}>
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </RedSpan>
                    <span> Delete user </span>
                </div>
                <br/>
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
                                            {props.users.map((user,i)=>{
                                                return (
                                                    <tr key={i}>
                                                        <td class="text-center">{user.name}</td>
                                                        <td class="text-center">{user.email}</td>
                                                        <td class="text-center">{user.dragons} </td> 
                                                        <td style={{width: "20%"}}>
                                                            <UpdateLink to={(user.disabled===false)&&`/update/${user._id}`} className={`table-link text-info`}  disableduser={(user.disabled===true)|| false} >
                                                                <span class="fa-stack">
                                                                    <i class="fa fa-square fa-stack-2x"></i>
                                                                    <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                                </span>
                                                            </UpdateLink>
                                                            <DeleteDiv disableduser={(user.disabled===true)|| false}  onClick={(e)=>{props.deleteButton(e,user)}}>
                                                                <span class="fa-stack">
                                                                    <i class="fa fa-square fa-stack-2x"></i>
                                                                    <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                                </span>
                                                            </DeleteDiv>
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

  
  