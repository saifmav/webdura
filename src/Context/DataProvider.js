import React, {createContext, useState} from "react"
import data from '../data'
export const DataContext = createContext()

export const DataProvider = (props) =>{

    const [allData, setAllData] = useState(data)
    
    return(
        <DataContext.Provider value={[allData, setAllData]}>
            {props.children}
        </DataContext.Provider>
    )
}
