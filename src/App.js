import React from 'react'
import Navbar from './Component/Navbar'
import CenterTabs from './Component/Tabs'
import Carousel from './Component/Carousel'
import Card from './Component/Card';
import './App.css'
import data from './data';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:data
    }
  }
  render(){
    return(
      <div className="App">
      <Navbar/>
      <CenterTabs/>
      <Carousel/>
      <div style={{marginTop:"40px"}}>
      <Card data={this.state.data}/>
      </div> 
    </div>
    )
  }
}


export default App;
