import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="200px"
        image={product.images.url}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`S/. ${product.price}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Box py={1}>
          <Link id="btn_buy" href="#!" sx={{textDecoration: "none"}}>
            <Button size="medium" variant="contained" >
              Comprar
            </Button>
          </Link>
        </Box>
        <Box py={1}>
          <Link id="btn_buy" href={`/detail/${product._id}`} sx={{textDecoration: "none"}}>
            <Button size="medium" variant="outlined">
              Detalles
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Product;
