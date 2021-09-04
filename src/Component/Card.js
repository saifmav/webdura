import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Steps from "./Steps";
import person from "../Images/person.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
    },
  },
}));

export default function Card(props) {
  const classes = useStyles();
  const renderCard=props.data.map(data=>{
    return(
      <>
      {console.log("Hey",data.fields.name)}
      <span style={{fontWeight:"bolder",color:"teal"}}>{data.fields.name}</span>
      </>
    )
  })

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md ">
              <div className="row">
                <div className="col-sm-6">
                  <h2 style={{ color: "darkgoldenrod",marginTop:"10px"}}>Upcoming Service</h2>
                  <p>11.25am,12/01/2019</p>
                  <img
                    src={person}
                    style={{
                      display: "inline",
                      borderRadius: "50%",
                      height: "75px",
                    }}
                  /><span style={{fontWeight:"bolder",color:"teal"}}>Ray Pessley</span>
                </div>
                <div className="col-sm-6">
                  <Steps />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-sm-12">
                  <span style={{fontWeight:"lighter",width:"382px",textAlign:"justify"}}>Check in here or scan customer's QR CODE to check in when the service is about to start</span>
              </div>
            </div>
        </div>
      </Paper>
    </div>
  );
}
