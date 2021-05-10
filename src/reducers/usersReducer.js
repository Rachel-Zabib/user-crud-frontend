import {UPDATE_USER,FETCH_USERS,ADD_USER,REMOVE_USER} from '../actions/constants'

const initialState={usersList:[]};

export default function usersReducer(state=initialState,action){
    switch(action.type){
        case FETCH_USERS:{
            return ({...state,usersList:action.payload });
        } 
        case UPDATE_USER:{
            let userToUpdate=action.payload;
            let users=state.usersList;
            let index=users.findIndex((e)=>e._id===userToUpdate._id);
            if(index!==-1)
            {
                users[index]=userToUpdate;
                return ({...state,usersList:users})
            }
            return state;
        }
        case ADD_USER:{
            let users=state.usersList;
            users.push(action.payload)
            return ({...state,usersList:users})
        }
        case REMOVE_USER:{
            let userToRemove=action.payload;
            let users=[...state.usersList];
            let index=users.findIndex((e)=>e._id===userToRemove._id);
            if(index!==-1)
            {
                users.splice(index,1)
                return ({...state,usersList:users})
            }
            return state;
        }   
        default:
            return state;
    }
}