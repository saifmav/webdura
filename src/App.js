import React from 'react'
import Navbar from './Component/Navbar'
import CenterTab from './Component/Tabs'
import { ServicesProvider } from './Context/ServicesProvider'
import { DataProvider } from './Context/DataProvider'
import { PaymentProvider } from './Context/PaymentProvider'
import './App.css'

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <DataProvider>
          <ServicesProvider>
            <PaymentProvider>
            <Navbar />
              <CenterTab />
            </PaymentProvider>
          </ServicesProvider>
        </DataProvider>
      </div>
    );
  }
}


export default App;
