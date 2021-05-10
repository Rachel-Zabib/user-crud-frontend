import React from 'react';
import styled from 'styled-components';

let NavDiv=styled.div`
    margin-left: 5%;
`;

let Header;
export default Header=(props)=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavDiv className={"container-fluid"}>
                    <a class="navbar-brand" href="/">Users</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active" href="/add">Add-User</a>
                            </li>
                        </ul>
                    </div>
                </NavDiv>
            </nav>
        </div>
        
    )
}
