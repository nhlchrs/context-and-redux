import React,{useState} from 'react' 
import {useDataLayerValue} from './ContextApi';
import {addUser} from './ContextReduceraction'
function ContextReducerapp() {
    const [user, setuser] = useState('')
    const id=Math.random();
    // const [{state}] = useDataLayerValue();
    //  console.log(state)
    return (
        <div>
            <h1>Context Reducer App</h1>
            <input type="text" value={user} onChange={e=>setuser(e.target.value)} />
            <button onClick={()=>addUser(user,id)}>Add</button>
        </div>
    )
}

export default ContextReducerapp