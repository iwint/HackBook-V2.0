import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardMedia,
  Grid,
  List,
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

function PortScan() {
  const [search, setsearch] = useState("");
  const [result, setresult] = useState(null);
  const [loading, setloading] = useState(false);

  const onHandleSearch = () => {
    setloading(true);
    axios
      .get(
        `https://api.shodan.io/shodan/host/${search}?key=${process.env.REACT_APP_SCAN_API}`,
      )
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          console.log("====================================");
          console.log(result.data);
          console.log("====================================");
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
        <Header HeaderName={"Port Scan"} />
        <CardMedia>
          <Grid container p={3} pb={5} justifyContent="space-between">
            <TextField
              onChange={(e) => setsearch(e.target.value)}
              placeholder="127.0.0.1"
              sx={{ width: "50%" }}
              variant="outlined"
            ></TextField>
            <Button onClick={onHandleSearch} variant="contained">
              Scan Port
            </Button>
          </Grid>
        </CardMedia>
      </Card>
      {result != null && (
        <Card sx={{ marginTop: "10px" }}>
          <CardMedia>
            <Grid m={2} container p={2} direction={"column"}>
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
                result.ports && result.ports?.map((e) => <List>PORT: {e}</List>)
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

export default PortScan;
