import React, {createContext, useReducer, useContext} from 'react';

export const DataLayer = createContext();


export const ContextApi=({children, initialState, reducer})=>(
<DataLayer.Provider value={useReducer(reducer, initialState)}>
        {children}
</DataLayer.Provider>
)



export const useDataLayerValue = () => useContext(DataLayer);

