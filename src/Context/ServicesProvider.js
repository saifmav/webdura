import React, {createContext, useState} from "react";

export const ServicesContext = createContext()

export const ServicesProvider = (props) =>{

    const [services, setServices] = useState([]);
    
    return(
        <ServicesContext.Provider value={[services, setServices]}>
            {props.children}
        </ServicesContext.Provider>
    )
}
