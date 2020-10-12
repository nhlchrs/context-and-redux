import React, {createContext} from 'react';

export const DataLayer = createContext();

const intialState =[{
    user:[{id:1, name:'nihal'},{id:2, name:'rohit'}]
}];

export const ContextApi=({children})=>{
    
return (
<DataLayer.Provider value={intialState}>
        {children}
</DataLayer.Provider>
)
}

