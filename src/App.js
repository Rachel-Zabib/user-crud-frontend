import React,{useEffect} from 'react'
import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchUsers} from './actions/usersAction'
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound';
import AddUserContainer from './components/AddUser/AddUserContainer';
import HomeContainer from './components/Home/HomeContainer';
import UpdateUserContainer from './components/UpdateUser/UpdateUserContainer';



function App(props) {

 useEffect(() => { 
  props.fetchUsers();
 }, [])

  // componentDidMount(){
  //   this.props.fetchUsers();
  // }
 
  
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/add" component={AddUserContainer}/>
          {(props.users.length>0)? <Route exact path="/update/:id" component={UpdateUserContainer}/>:<div></div>} 
          <Route component={NotFound}/> 
        </Switch>
      </Router> 
    </div>
  );
 
}

const mapStateToProps = store => ({
  users: store.usersReducer.usersList
});

export default connect(mapStateToProps,{fetchUsers})(App);

