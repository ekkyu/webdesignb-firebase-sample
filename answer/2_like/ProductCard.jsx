import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LikeButton from './LikeButton';

export default function ProductCard({ id, name, text, price, image }) {
  const [count, setCount] = useState(0);

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia sx={{ height: 180 }} image={image} title={name} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{text}</Typography>
        <Typography variant="h6">{price}円</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          カートに入れる
        </Button>
        <Typography>{count}個　{price * count}円</Typography>
      </CardActions>
      <CardActions>
        <LikeButton id={id} />
      </CardActions>
    </Card>
  );
}
