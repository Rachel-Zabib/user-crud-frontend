import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid navDiv">
                        <a class="navbar-brand" href="/">Users</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link active" href="/add">Add-User</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
           
        )
    }
}
