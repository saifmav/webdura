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
  const [value, setValue] = useState('1');
  const [activeStep, setActiveStep] = useState(0)
  const [services, setServices ] = useState([])
  
  
  const handleNext = (id) => {
    data.forEach((dt) => {
      if (id === dt.fields.id) {
        setServices([...services, dt])
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    })

    const remove =  datas.filter(dt => dt.fields.id !== id )
    setDatas(remove)
  }


  const handleBack = (id) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const handleReset = (id) => {
    setActiveStep(0);
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          data={datas}
          limit={5} 
          actStep ={activeStep}
          next={handleNext}
          back={handleBack}
          reset={handleReset}
          />
        </TabPanel>
        <TabPanel value='2'>
        <Carousal/>
          <div style={{marginTop:"40px"}}></div>
          <Card 
          clickable={nextTab}
          data ={services}
          limit={5} 
          actStep ={activeStep}
          next={handleNext}
          back={handleBack}
          reset={handleReset}

          />
        </TabPanel>
        <TabPanel value='3'>
        <Carousal/>
          <div style={{marginTop:"40px"}}></div>
          <Card 
          clickable={nextTab}
          data={datas}
          limit={5} 
          actStep ={activeStep}
          reset={handleReset}
          />
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default CenterTab;
