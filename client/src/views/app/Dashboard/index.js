import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import Layout from '../../../layouts/index';
import IWIN from '../../../assets/Image/Iwin.jpg';
import BALA from '../../../assets/Image/balaji.jpg';
import GOPI from '../../../assets/Image/Gopi.jpg';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Dashboard() {
  const theme = useTheme();
  return (
    <Layout>
      <Grid
        container
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Grid>
          <Typography variant='h5' color={'#2B3674'} fontWeight={'bold'}>
            New Features
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='https://www.millow.io/images/HOW-TO-CHECK-CRIMINAL-RECORDS-ONLINE-IN-INDIA.jpg'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Criminal Records
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202203/face-600x900.png?itok=4wm2x8C2'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Face Detection
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>{' '}
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk668vjHPYXDTTuwE_tLPNE_2HJs_IqbislgMclgNMvqO2lohVLSzRE9boAUtI7fev-Ts&usqp=CAU'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    OSINT
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Typography variant='h5' color={'#2B3674'} fontWeight={'bold'}>
          About us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component='img'
                sx={{ width: 151 }}
                image={GOPI}
                alt='Live from space album cover'
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 1 1 1' }}>
                  <Typography component='div' variant='h5'>
                    Gobinath.B
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    component='div'
                  >
                    Cyber Security Analyst
                  </Typography>
                </CardContent>
                {/* <Box
                sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
              ></Box> */}
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component='img'
                sx={{ width: 151 }}
                image={BALA}
                alt='Live from space album cover'
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 1 1 1' }}>
                  <Typography component='div' variant='h5'>
                    Balaji.S
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    component='div'
                  >
                    Full Stack Developer
                  </Typography>
                </CardContent>
                {/* <Box
                sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
              ></Box> */}
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component='img'
                sx={{ width: 151 }}
                image={IWIN}
                alt='Live from space album cover'
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 1 1 1' }}>
                  <Typography component='div' variant='h5'>
                    Iwin.T
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    component='div'
                  >
                    React Developer
                  </Typography>
                </CardContent>
                {/* <Box
                sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
              ></Box> */}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Dashboard;
