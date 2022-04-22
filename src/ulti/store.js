import React, { useReducer, useState } from 'react'; 

const Store = React.createContext()

const MyStore = ({children}) => {
    const [store, setStore] = useReducer(ProductReducer,{})

    return <Store.Provider value={[store, dispatch]}>{children}</Store.Provider>

}