import React from 'react'
import styled from 'styled-components'

let NotFoundDiv=styled.div`
    background-color: #95c2de;
`;

let Mainbox=styled.div`
    background-color: #95c2de;
    margin: auto;
    height: 600px;
    width: 600px;
    position: relative;
`;

let ErrDiv=styled.div`
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 20%;
    top: 8%;
`;

let ErrDiv2=styled(ErrDiv)`
    left: 68%;
    top: 8%;
`;

let StyledI=styled.i`
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 15%;
    color: #ffffff;
`;

export default function NotFound (props){
    return (
        <NotFoundDiv>
            <Mainbox>
                <ErrDiv>4</ErrDiv>
                <StyledI className={"fa-question-circle fa-spin"}></StyledI>
                <ErrDiv2>4</ErrDiv2>
            </Mainbox>
        </NotFoundDiv>
    )

}
