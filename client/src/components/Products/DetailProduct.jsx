import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GlobalState } from "../../GlobalState";
import Footer from "../Footer";
import Product from "./ProductItem";

const DetailProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <Box>
      <Container>
        <Grid container py={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <CardMedia
                component="img"
                sx={{ maxWidth: 500 }}
                image={detailProduct.images.url}
                alt={detailProduct.title}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body2">{`Vendido por ${detailProduct.description}`}</Typography>
            <Typography variant="h5">{detailProduct.title.toUpperCase()}</Typography>
            <Typography variant="p" py={1}>{`S/. ${detailProduct.price}`}</Typography>
            <Typography variant="body1" py={1}>{detailProduct.content}</Typography>
            <Typography variant="body2" py={1}>Stock: 10</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 4, mb: 4 }}
            >
              Comprar ahora
            </Button>
          </Grid>
        </Grid>
        <Grid container py={4}>
          <Grid item xs={12} py={2}>
            <Typography variant="h6">Productos Relaccionados</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyItems="center" alignItems="center" display="flex">
              {products.map((product) => {
                return product.category === detailProduct.category ? (
                  <Grid item xs={4} p={1} key={product._id}>
                    <Product product={product} />
                  </Grid>
                ) : null;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default DetailProduct;
