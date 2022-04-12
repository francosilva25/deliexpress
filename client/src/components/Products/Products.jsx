import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <Box>

      <Container>
        <Grid container py={5} sx={{ justifyContent: 'center'}}>
          <Grid item md={4}>
            <Product />
          </Grid>
        </Grid>
      </Container>
      </Box>
    </div>
  );
};

export default Products;
