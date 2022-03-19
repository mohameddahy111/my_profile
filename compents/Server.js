import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';

export default function Server({ icon, src, text }) {
  return (
    <div >
      <Grid item md={4} xs={12} marginBottom='20px' >
      <Card style={{ width: '500px', height: '400px',  padding :'10px' ,borderRadius :'10px'}}>
        <Image src={src} width={500} height={300} />
        <CardActions>
          <CardActionArea>
            <Typography component={'h2'}variant >{text} </Typography>
          </CardActionArea>
        </CardActions>
      </Card>
      </Grid>
    </div>
  );
}
