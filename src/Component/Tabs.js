import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import Carousal from './Carousel'
import Card from './Card'
import data from '../data'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CenterTab = () => {
  const classes = useStyles();
  const [datas ,setDatas] = useState(data)
  console.log("🚀 ~ file: Tabs.js ~ line 22 ~ CenterTab ~ datas", datas)
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    return newValue
  };
  const nextTab = (index) => {
    setValue(index)
    return index
    // setValue(prevState=>{ let nextState = (parseInt(prevState)+1)+"" ; return nextState })
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
          data ={datas}
          />
        </TabPanel>
        <TabPanel value='2'>
        <Carousal/>
          <div style={{marginTop:"40px"}}></div>
          <Card 
          clickable={nextTab}
          data ={datas}
          />
        </TabPanel>
        <TabPanel value='3'>
        <Carousal/>
          <div style={{marginTop:"40px"}}></div>
          <Card 
          clickable={nextTab}
          data={datas}
          limit={5} 
          />
        </TabPanel>

      </TabContext>
    </div>
  );
};
export default CenterTab;
