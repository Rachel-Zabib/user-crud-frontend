import React , {Component} from 'react'
import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import {updateUsers} from './actions/usersAction'
import axios from 'axios'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';
import NotFound from './components/NotFound/NotFound';



class App extends Component {

  componentDidMount(){
    axios.get('http://localhost:5000/users').then((response)=>{
      let users=response.data;
      this.props.updateUsers(users)
    })
  }

  render(){
    return (
      <div>
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/add" component={AddUser}/>
            <Route exact path="/update/:id" component={UpdateUser}/>
            <Route component={NotFound}/> 
          </Switch>
        </Router> 
      </div>
    );
  }
}

const mapStateToProps = store => ({
  users: store.usersReducer.usersList
});

export default connect(mapStateToProps,{updateUsers})(App);

