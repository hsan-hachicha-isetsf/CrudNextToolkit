"use client"
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from "use-shopping-cart" ;

const Cardprod = ({article}) => {
  const { addItem } = useShoppingCart();
  const addToCart = (product) => {
    const target = {
    id:product._id,
    title: product.designation,
    image: product.imageart,
    price : product.prix,
    qtestock : product.qtestock,
    quantity : 1
    };
    addItem(target);
    console.log('Item added to cart:', target);
    };
  return (
    <Card sx={{ maxWidth: 'auto',margin: 1 }} >
    <CardMedia
    component="img"
    alt="image"
    height="160"
    image={article.imageart}
    />
    <CardContent>
    <Typography gutterBottom variant="h6" component="div">
    {article.reference}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Prix : {article.prix} DT
    </Typography>
    </CardContent>
    <CardActions>
    <Button disabled={article.qtestock<=1}
    variant="contained" color="secondary" size="large"
    onClick={() =>
      addToCart(article)}   
    >
    {article.qtestock<=1? "OUT OF SOLD": "Add to cart"}
    </Button>
    </CardActions>
    </Card>
  )
}

export default Cardprod
