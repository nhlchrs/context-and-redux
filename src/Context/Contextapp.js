import React from 'react'
import {useDataLayerValue} from '../ContextUseReducer/ContextApi'


function Contextapp() {
        // const [{state}] = useDataLayerValue()
        // console.log(state)
    return (
        <div>
            <h1>Context App Call</h1>
            {/* {state.user.map((item, index)=>(
                <h1 key={index}>{item.name}</h1>
            ))} */}
        </div>
    )
}

export default Contextapp
