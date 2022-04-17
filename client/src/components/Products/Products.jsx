import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import Product from "./ProductItem";
import {GlobalState} from '../../GlobalState'

const Products = () => {
  const state = useContext(GlobalState)

  const [products] = state.ProductsAPI.products

  console.log(products)

  return (
    <div>
      <Box>
        <Container>
        <Typography variant="h6">Nuestros products</Typography>
          <Grid container py={5}  sx={{ justifyContent: "center" }}>
            {products.map((product) => (
              <Grid item md={4} sx={12} py={2} px={1} key={product._id}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Products;
