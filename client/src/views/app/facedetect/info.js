import {
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/index";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const WebcamComponent = () => <Webcam />;
function Info() {
  const [carinfo, setcarinfo] = useState({
    img: "https://cdni.autocarindia.com/ExtraImages/20180402113123_NumberPlate_Swift.jpg",
    name: "Balaji",
    createdAt: "12/12/22",
    carNumber: "HR26DK8337",
    address: "1/24, East Street,Adhanur",
    city: "Villupuram",
    nationality: "India",
  });
  return (
    <Layout>
      <Card sx={{ height: "300px" }}>
        <CardMedia>
          <Grid
            container
            p={2}
            md={12}
            justifyContent="center"
            alignItems={"center"}
            spacing={10}
          >
            <Grid item md={5}>
              <img height={"100%"} width={"100%"} src={carinfo?.img}></img>
            </Grid>
            <Grid item md={5} direction={"column"}>
              <Typography> Name:{carinfo?.name}</Typography>
              <Typography> Car Number:{carinfo?.carNumber}</Typography>
              <Typography> Address:{carinfo?.address}</Typography>
              <Typography> City:{carinfo?.city}</Typography>
              <Typography> Nationality:{carinfo?.nationality}</Typography>
              <Typography> CreatedAt:{carinfo?.createdAt}</Typography>
            </Grid>
          </Grid>
        </CardMedia>
      </Card>
    </Layout>
  );
}

export default Info;
