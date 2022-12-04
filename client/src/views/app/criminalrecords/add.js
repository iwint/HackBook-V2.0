import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../../../layouts/index';

// import * as yup from "yup";
import { Formik, useFormik } from 'formik';
import Webcam from 'react-webcam';

function Add() {
  const [CaptureImg, setCaptureImg] = useState('');
  const webcamRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setCaptureImg(imageSrc);
  }, [webcamRef]);

  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setCaptureImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Layout>
      <Grid container p={3} md={12} sx={{ backgroundColor: '#fff' }}>
        <Grid item md={4} mr={'20px'} alignItems={'center'}>
          <Webcam
            ref={webcamRef}
            muted={true}
            style={{
              textAlign: 'center',
              zindex: 9,
              width: '90%',
              height: '330px',
              backgroundColor: '#000',
              borderRadius: '10px',
            }}
          />
        </Grid>
        <Grid
          md={3}
          sx={{
            height: '330px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1px',
          }}
        >
          <Grid
            justifyContent='center'
            alignItems={'center'}
            style={{
              width: '100%',
            }}
          >
            <Button
              sx={{ width: '100%' }}
              type='submit'
              variant='contained'
              component='label'
            >
              Upload File
              <input type='file' onChange={handleImageChange} hidden />
            </Button>
            <Button
              sx={{ marginTop: '8px', width: '100%' }}
              type='submit'
              variant='contained'
            >
              Full Screen
            </Button>
          </Grid>
          <Grid
            sx={{
              padding: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px',
              border: CaptureImg !== '' ? '1px solid #000' : '',
            }}
            mt={2}
          >
            <img
              style={{
                width: '80%',
              }}
              src={CaptureImg}
            />
          </Grid>
          <Grid
            style={{
              width: '100%',
            }}
          >
            <Button
              sx={{ marginTop: '8px', width: '100%' }}
              type='submit'
              variant='contained'
              onClick={() => capture()}
            >
              capture
            </Button>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            height: '60%',
          }}
          md={4}
          ml={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <TextField
              sx={{ marginBottom: '10px' }}
              fullWidth
              id='name'
              name='name'
              label='Name'
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              sx={{ marginBottom: '10px' }}
              fullWidth
              id='location'
              name='location'
              label='Location'
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
            />
            <Button color='primary' variant='contained' fullWidth type='submit'>
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Add;
