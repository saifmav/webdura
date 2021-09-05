import React,{useContext, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"
import { ServicesContext } from "../Context/ServicesProvider"
import { DataContext } from "../Context/DataProvider";
// import { ActiveStepContext } from "../Context/ActiveStepProvider";
import data from '../data'


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Request", "Service", "Payment"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "You two had 12 deals before";
    case 1:
      return "You and Ray had 12 deals before";
    case 2:
      return "Finish your Payment";
    default:
      return "Unknown stepIndex";
  }
}

export default function Steps({id,ind}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0)
  const [services, setServices] = useContext(ServicesContext)
  const [allData, setAllData] = useContext(DataContext)
  const steps = getSteps();

  const handleNext = () => {
    data.forEach((dt) => {
      if (ind === dt.fields.id) {
        setServices([...services, dt])
      }
    })
    if(id === ind){
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    const remove =  allData.filter(dt => dt.fields.id !== id )
    setAllData(remove)
  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div style={{marginLeft:"30px"}}>
            <Typography className={classes.instructions}>
            {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
