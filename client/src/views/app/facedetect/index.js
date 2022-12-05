import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../../../layouts/index';
import Webcam from 'react-webcam';
import CriminalPic from '../../../assets/Criminal.png';
import axios from 'axios';

function FaceDetect() {
  const [CaptureImg, setCaptureImg] = useState('');

  const webcamRef = React.useRef(null);
  const [result, setResult] = useState([]);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCaptureImg(imageSrc);
    console.log(imageSrc);
  }, [webcamRef]);
  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setCaptureImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFind = () => {};

  return (
    <Layout>
      <Grid container p={3} md={12} sx={{ backgroundColor: '#fff' }}>
        <Grid
          item
          md={4}
          mr={'20px'}
          sx={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
          }}
        >
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
          md={4}
          sx={{
            height: '330px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
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
                width: '60%',
              }}
              src={CaptureImg}
            />
          </Grid>
          <Grid
            style={{
              width: '100%',
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <Button
              sx={{ marginTop: '8px', width: '50%' }}
              type='submit'
              variant='contained'
              onClick={() => capture()}
            >
              Capture
            </Button>{' '}
            <Button
              sx={{ marginTop: '8px', width: '50%' }}
              type='submit'
              variant='contained'
              color='error'
              onClick={() => capture()}
            >
              Find
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Next Container */}
      {/* <Form /> */}
      <Grid
        container
        sx={{
          backgroundColor: '#ffff',
          marginTop: '15px',
          height: '100%',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        md={12}
        p={5}
      >
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '400px',
          }}
        >
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid item>Name</Grid>
            <Grid
              item
              style={{
                textAlign: 'start',
                width: '70%',
              }}
            >
              kariKada Bhai
            </Grid>
          </Grid>
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid item>Category</Grid>
            <Grid
              style={{
                textAlign: 'start',
                width: '70%',
              }}
              item
            >
              Criminal/Missing
            </Grid>
          </Grid>{' '}
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid item>Address</Grid>
            <Grid
              style={{
                textAlign: 'start',
                width: '70%',
              }}
              item
            >
              1/234, Street Name, Town, City
            </Grid>
          </Grid>{' '}
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid item>Crime</Grid>
            <Grid
              style={{
                textAlign: 'start',
                width: '70%',
                marginTop: '20px',
              }}
              item
            >
              1. Robbery
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            alignItem: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <img
            style={{
              height: '80%',
              width: '100px',
            }}
            src={CriminalPic}
          />
          <Grid
            style={{ color: '#E65C00', marginTop: '5px', fontSize: '14px' }}
          >
            Accuracy 89.58%
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default FaceDetect;
