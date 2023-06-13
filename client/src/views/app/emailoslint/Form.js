/** @format */

import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiInput from "../../../components/MuiInput";
// import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

function Form({ setresult }) {
   const formik = useFormik({
      initialValues: {
         username: "",
      },
      onSubmit: (values) => {
         console.log("Submited", values);

         const options = {
            method: "POST",
            url: `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${process.env.REACT_APP_API_KEY}&emailAddress=${values.username}`,
            data: {
               email: values.username,
            },
         };

         axios
            .request(options)
            .then(function (response) {
               console.log(response);
               alert(JSON.stringify(response.data, null, 2));
               setresult(response.data.detected);
            })
            .catch(function (error) {
               console.error(error);
            });
      },
   });
   // const validationSchema = yup.object({});

   return (
      <>
         <Grid
            container
            p={2}
            mt={2}
            width={"40%"}
            direction={"column"}
            sx={{ backgroundColor: "#ffff" }}
            height={"100%"}
            borderRadius={"10px"}>
            <Grid container>
               <form onSubmit={formik.handleSubmit}>
                  <Grid
                     container
                     mt={1}
                     md={12}
                     sx={{
                        backgroundColor: "#ffff",
                        height: "100%",
                        borderRadius: "10px",
                     }}
                     spacing={1}
                     direction={"row"}>
                     <TextField
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        placeholder="Enter your username"
                     />

                     <Button
                        sx={{ marginTop: "8px" }}
                        type="submit"
                        variant="contained">
                        Submit
                     </Button>
                  </Grid>
               </form>
            </Grid>
         </Grid>
      </>
   );
}

export default Form;
