import {UPDATE_USERS} from '../actions/constants'

const initialState={usersList:[]};

export default function usersReducer(state=initialState,action){
    switch(action.type){
        case UPDATE_USERS:
            return ({...state,usersList:action.payload })
        default:
            return state;
    }
}