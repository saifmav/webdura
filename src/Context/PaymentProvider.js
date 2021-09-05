import React, {createContext, useState} from "react";

export const PaymentContext = createContext()

export const PaymentProvider = (props) =>{

    const [payment, setPayment] = useState()
    
    return(
        <PaymentContext.Provider value={[payment, setPayment]}>
            {props.children}
        </PaymentContext.Provider>
    )
}
