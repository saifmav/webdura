import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


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

export default function Steps({step, handleReset, activeStep}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {step.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === step.length ? (
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
