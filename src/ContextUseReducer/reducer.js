import { ADD_USER } from './ContextReducerActiontype';


export const initialState ={
    user:[{id:1, name:'nihal'},{id:2, name:'rohit'}]
};



const reducer = (state, action)=>{
    switch(action.type){
        case ADD_USER:
            return{
                ...state,
                user: [...state, {id:Math.random(), name:action.payload}]
            }

        default : return {...state}
    }
}


export default reducer;