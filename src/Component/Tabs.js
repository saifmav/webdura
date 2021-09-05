import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import Carousal from './Carousel'
import Card from './Card'
// import data from '../data'
import { ServicesContext } from '../Context/ServicesProvider'
import { DataContext } from '../Context/DataProvider'
import { PaymentContext } from '../Context/PaymentProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CenterTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const [services, setServices ] = useContext(ServicesContext)
  const [allData, setAllData]= useContext(DataContext)
  // const [payment, setPayment]= useContext(services)
  
  

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const nextTab = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position='static'>
          <TabList onChange={handleChange} aria-label='simple tabs example'>
            <Tab label='Requests' value='1' />
            <Tab label='Services' value='2' />
            <Tab label='Payment' value='3' />
          </TabList>
        </AppBar>
        <TabPanel value='1'>
          <Carousal/>
          <div style={{marginTop:"40px"}}></div>
          <Card 
          clickable={nextTab}
          data={allData}
          limit={5} 
          />
        </TabPanel>
        <TabPanel value='2'>
        <Carousal/>
          <div style={{marginTop:"40px"}}></div>
          <Card 
          clickable={nextTab}
          data ={services}
          limit={5} 
          />
        </TabPanel>
        <TabPanel value='3'>
        <Carousal/>
          <div style={{marginTop:"40px"}}></div>
          <Card 
          clickable={nextTab}
          // data={payment}
          limit={5} 
          />
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default CenterTab;
