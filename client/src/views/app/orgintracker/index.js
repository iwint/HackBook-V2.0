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
import React, { useEffect, useState } from "react";
import Layout from "../index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import data from "../../../Data/domaintracker.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio, MagnifyingGlass } from "react-loader-spinner";
import Header from "../../../components/common/Header";

function OrginTracker() {
  const [search, setsearch] = useState("");
  const [result, setresult] = useState(null);
  const [loading, setloading] = useState(false);

  const onHandleSearch = () => {
    setloading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}`, {
        apiKey: process.env.REACT_APP_API_KEY,
        domainName: search,
        mode: "purchase",
      })
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
        <Header HeaderName={"Origin Tracker"} />

        <CardMedia>
          <Grid container p={3} pb={5} justifyContent="space-between">
            <TextField
              onChange={(e) => setsearch(e.target.value)}
              placeholder="example.com"
              sx={{ width: "50%" }}
              variant="outlined"
            ></TextField>
            <Button onClick={onHandleSearch} variant="contained">
              Search
            </Button>
          </Grid>
        </CardMedia>
      </Card>
      {result != null && (
        <Card sx={{ marginTop: "10px" }}>
          <CardMedia>
            <Grid m={2} container p={2} justifyContent="space-between">
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
              ) : result.length != 0 ? (
                result.records &&
                result.records?.map((e) => (
                  <Accordion sx={{ width: "100%" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        {new Date(e.audit.createdDate).toUTCString()}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <TextareaAutosize
                        maxRows={12}
                        sx={{ padding: "10px" }}
                        aria-
                        label="maximum height"
                        readOnly={true}
                        defaultValue={e.cleanText}
                        style={{ width: "100%" }}
                      />
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <div>No Result Found</div>
              )}
            </Grid>
          </CardMedia>
        </Card>
      )}
    </Layout>
  );
}

export default OrginTracker;
