import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardMedia,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Layout from "../index";
import React, { useEffect, useState } from "react";
// import data from "../../../Data/email.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import checktrue from "../../../assets/green.png";
import red from "../../../assets/red.jpg";
import { toast, ToastContainer } from "react-toastify";
import { MagnifyingGlass } from "react-loader-spinner";
import Header from "../../../components/common/Header";

function EmailTracker() {
  const [result, setresult] = useState(null);
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);

  const onHandleSearch = () => {
    setloading(true);
    axios
      .get(
        `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${process.env.REACT_APP_API_KEY}&emailAddress=${search}`,
      )
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          setresult(result.data);
          setloading(false);
        } else {
          setresult([]);
        }
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        toast.error(err.message);

        console.log("====================================");
      });
  };

  return (
    <Layout>
      <ToastContainer />
      <Card>
        <Header HeaderName={"Email Tracker"} />

        <CardMedia>
          <Grid container p={3} pb={5} justifyContent="space-between">
            <TextField
              placeholder="abc@example.com"
              sx={{ width: "50%" }}
              variant="outlined"
              onChange={(e) => setsearch(e.target.value)}
            ></TextField>
            <Button variant="contained" onClick={onHandleSearch}>
              Search
            </Button>
          </Grid>
        </CardMedia>
      </Card>
      {result != null && (
        <Card sx={{ marginTop: "10px" }}>
          <CardMedia>
            <Grid m={2} xs={12} container p={2} justifyContent="space-between">
              {loading ? (
                <MagnifyingGlass
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="MagnifyingGlass-loading"
                  wrapperStyle={{}}
                  wrapperClass="MagnifyingGlass-wrapper"
                  glassColor="#c0efff"
                  color="#e15b64"
                />
              ) : (
                <Grid>
                  <Grid xs={12}>
                    DNS Check
                    <Grid xs={12}>
                      {result?.dnsCheck ? (
                        <img width={50} height={50} src={checktrue}></img>
                      ) : (
                        <img width={50} height={50} src={red}></img>
                      )}
                    </Grid>
                    <Typography> Domain: {result?.domain} </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography>
                      Email Address: {result?.emailAddress}{" "}
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography> User Name: {result?.username} </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography>MX Reccords</Typography>

                    {result?.mxRecords.map((e, i) => (
                      <Typography key={i}>{e}</Typography>
                    ))}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </CardMedia>
        </Card>
      )}
    </Layout>
  );
}

export default EmailTracker;
