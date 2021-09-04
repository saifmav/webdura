import React from 'react'
import Navbar from './Component/Navbar'
import CenterTab from './Component/Tabs'
import './App.css'

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Navbar/>
      <CenterTab/>
    </div>
    )
  }
}


export default App;
