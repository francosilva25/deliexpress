import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Product = ({title, desc, img}) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Box py={1}>
          <Button size="large" variant="contained">
            Comprar
          </Button>
        </Box>
        <Box py={1}>
          <Button size="large" variant="outlined">
            Detalles
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Product;
