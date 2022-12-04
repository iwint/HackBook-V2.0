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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { MagnifyingGlass } from "react-loader-spinner";
import Header from "../../../components/common/Header";
const DNSLookup = () => {
  const [search, setsearch] = useState("");
  const [result, setresult] = useState(null);
  const [loading, setloading] = useState(false);

  const onHandleSearch = () => {
    setloading(true);
    axios
      .get(
        `https://www.whoisxmlapi.com/whoisserver/DNSService?apiKey=${process.env.REACT_APP_API_KEY}&domainName=${search}&type=_all&outputFormat=JSON`,
      )
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          setresult(result.data.DNSData);
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
        <Header HeaderName={"DNS LookUp"} />
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
              ) : (
                result?.dnsRecords &&
                result?.dnsRecords?.map((e, i) => (
                  <Accordion key={i} sx={{ width: "100%" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{e.dnsType}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {e.name && <Typography>Name: {e.name}</Typography>}
                      {e.address && (
                        <Typography>Address: {e.address}</Typography>
                      )}
                      {e.ttl && <Typography>TTL: {e.ttl}</Typography>}
                    </AccordionDetails>
                  </Accordion>
                ))
              )}
            </Grid>
          </CardMedia>
        </Card>
      )}
    </Layout>
  );
};

export default DNSLookup;
