import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Steps from "./Steps";
import person from "../Images/person.jpeg";
import Container from '@material-ui/core/Container';

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
  const renderCard = props.data.map((data) => {
    return (
      <>
        {console.log("Hey", data.fields.name)}
        <Paper elevation={3}>
          <div className="container">
            <div className="row ">
              <div className="col-12 col-md ">
                <div className="row">
                  <div className="col-sm-6">
                    <h2 style={{ color: "darkgoldenrod", marginTop: "10px" }}>
                      {data.fields.status[1]}
                    </h2>
                    <p>11.25am,12/01/2019</p>
                    <img
                      src={person}
                      style={{
                        display: "inline",
                        borderRadius: "50%",
                        height: "75px",
                      }}
                    />
                    <span style={{ fontWeight: "bolder", color: "teal" }}>
                      {data.fields.name}
                    </span>
                    <p
                      style={{
                        fontWeight: "bolder",
                        marginLeft: "85px",
                        marginTop: "-32px",
                        fontSize: "12px",
                      }}
                    >
                      {data.fields.location}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <Steps status={data.fields.status}/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontWeight: "lighter",
                  width: "382px"
                }}
              >
                Check in here or scan customer's QR CODE to check in when the
                service is about to start
              </p>

              <p style={{fontWeight:"bold"}}>{data.fields.scheduled_at}</p>
              <p style={{color:"teal",fontWeight:"bold",marginTop:"-15px"}}>{data.fields.address}</p>
            </div>
          </div>
        </Paper>
      </>
    );
  });

  return <Container maxWidth="sm">{renderCard}</Container>;
}
