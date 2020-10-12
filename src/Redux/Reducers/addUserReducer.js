import { ADD_USER } from '../Action/ReduxActiontype';


export const initialState ={
    user:[{id:1, name:'nihal'},{id:2, name:'rohit'}]
};



const reducer = (state=initialState, action)=>{
    console.log(action.payload)
    switch(action.type){
        case ADD_USER:
            return{
                ...state,
                user : [...state, action.payload]
            }

        default : return state
    }
}


export default reducer;