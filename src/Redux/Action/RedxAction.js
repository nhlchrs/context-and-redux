import {ADD_USER} from './ReduxActiontype'

export const addUser = (name, id) =>{
    return{
        type : ADD_USER,
        payload : {id :id, name:name}
        }
}
