import {UPDATE_USER,FETCH_USERS,ADD_USER,REMOVE_USER} from './constants'
import axios from 'axios';

export const fetchUsers=()=>(dispatch)=>{
    axios.get('https://users-crud-app.herokuapp.com/users').then((response)=>{
        let users=response.data;
        dispatch({type:FETCH_USERS,payload:users})
      }).catch((err)=>{
        console.log("error: ",err);
    })
}

export const updateUser=(userID,userDetails,cb=()=>{})=>dispatch=>{
    axios.put(`https://users-crud-app.herokuapp.com/users/${userID}`,userDetails).then((res)=>{
        let user=res.data;
        if(user!==null){
            dispatch({type:UPDATE_USER,payload:user});
            cb();
        }   
      }).catch((err)=>{
          console.log("error: ",err);
      })
}

export const addUser=(user,cb=()=>{})=>dispatch=>{
    axios.post("https://users-crud-app.herokuapp.com/users",user).then((res)=>{
        user=res.data;
        dispatch({type:ADD_USER,payload:user});
        cb();
        }).catch((err)=>{
            console.log("error: ",err);
        })
}


export const removeUser=(userID,cb=()=>{})=>dispatch=>{
    axios.delete(`https://users-crud-app.herokuapp.com/users/${userID}`).then((response)=>{
        let user=response.data;
        if(user!==null){
            dispatch({type:REMOVE_USER,payload:user})
            cb();
        }     
      }).catch((error)=>{
          console.log("error ",error);
      })
}