import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SingleCardDisplay({ imageUri, name, oracleText, typeLine }) {
  return (
    <Card sx={{
      maxWidth: 300,
      margin: "0 auto",
      padding: 1,
    }}>
      <CardMedia
        component='img'
        sx={{ objectFit: 'scale-down' }}
        image={imageUri}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {typeLine}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oracleText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Collection</Button>
      </CardActions>
    </Card>
  );
}

export { SingleCardDisplay };