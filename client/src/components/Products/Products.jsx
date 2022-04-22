import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import {GlobalState} from '../../GlobalState'
import Loading from '../../pages/utils/loading/Loading'

const Products = () => {
  const state = useContext(GlobalState)
  const [products] = state.ProductsAPI.products
  const [isAdmin] = state.UserAPI.isAdmin

  return (
    <div>
      <Box>
        <Container>
        <Typography variant="h6">Nuestros products</Typography>
          <Grid container py={5}  sx={{ justifyContent: "center" }}>
            {products.map((product) => (
              <Grid item md={4} xs={12} py={2} px={1} key={product._id}>
                <ProductItem product={product} isAdmin={isAdmin}/>
              </Grid>
            ))}
          </Grid>
          {products.length === 0 && <Loading />}
        </Container>
      </Box>
    </div>
  );
};

export default Products;
