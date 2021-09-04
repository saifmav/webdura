import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yoga from "../Images/yoga.jpeg";
import Slider from "react-slick";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "35px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const sliderItems = [
  {
    img: yoga,
    heading: "Yoga and Pilate Training",
    subheading: "Training.Fitness",
    description:
      "This yoga and pilate training session is design for all level of trainees ...",
    session: "For one session",
    price: "$80.00",
  },
  {
    img: yoga,
    heading: "Yoga and Pilate Training",
    subheading: "Training.Fitness",
    description:
      "This yoga and pilate training session is design for all level of trainees ...",
    session: "For one session",
    price: "$80.00",
  },
];

const renderSlides = () =>
  sliderItems.map((elem) => (
    <div className="carousel container">
      <div className="row ">
        <div className="carousel-img col-12 col-md ">
          <img src={elem.img} style={{display:"inline"}}/>
        </div>
        <div className="col-12 col-md " style={{ textAlign: "left" }}>
          <h2>{elem.heading}</h2>
          <h4>{elem.subheading}</h4>
          <p>{elem.description}</p>
          <h6>
            <span style={{fontWeight:'lighter',marginRight:"100px"}}>{elem.session}</span>
            <span style={{color:"darkgoldenrod"}}>{elem.price}</span>
          </h6>
        </div>
      </div>
    </div>
  ));
const Carousel = (props) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Container>
        <Slider dots={true} className="dashboard-slider">
          {renderSlides()}
        </Slider>
      </Container>
    </div>
  );
};
export default Carousel;
