import React,{useSelector, useDispatch, useState} from 'react'
import {connect} from 'react-redux'
import {addUser} from '../Action/RedxAction'
function Reduxapp(props) {
    const [name, setuser] = useState('Nihal')
console.log(props)
    // const reduc = useSelector(state=>state.reducer)
    // console.log(reduc)
    // const dispatch = useDispatch()
    const id = Math.random();
    // console.log(props.add_User())
    return (
        <div>
            <h1>Redux app </h1>
            <input type="text" value={name} onChange={e=>setuser(e.target.value)} />
            {/* <button onClick={props.add_User(name ,id)}>Add</button> */}

            {props.userData.map((item, index)=>(
                <h2 key={index}>{item.name}</h2>
            ))}
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        userData:state.reducer.user
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        add_User: (name,id)=>dispatch(addUser(name, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reduxapp)
