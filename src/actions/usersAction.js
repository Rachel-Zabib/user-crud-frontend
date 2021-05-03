import {UPDATE_USERS} from './constants'

export const updateUsers=(usersArray)=>{
    return {type:UPDATE_USERS,payload:usersArray}
}