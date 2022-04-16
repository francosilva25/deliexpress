import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Product from "./Product";

const productos = [
  {
    titulo: "Lomo Saltado",
    restaurante: "La buena sazón",
    precio: "S/24.00",
    imagen:
      "https://www.eatperu.com/wp-content/uploads/2019/06/lomo-saltado-with-rice-and-cilantro-recipe.jpg",
  },
  {
    titulo: "Carapulcra",
    restaurante: "La buena sazón",
    precio: "S/18.00",
    imagen:
      "https://www.comedera.com/wp-content/uploads/2021/08/carapulcra-peruana.jpg",
  },
  {
    titulo: "Seco de Res",
    restaurante: "La buena sazón",
    precio: "S/26.00",
    imagen:
      "https://micomidaperuana.com/wp-content/uploads/2019/09/seco-res-frejoles.jpg",
  },
  {
    titulo: "Arroz con Pato",
    restaurante: "La buena sazón",
    precio: "S/20.00",
    imagen: "https://www.chefspencil.com/wp-content/uploads/Arroz-con-Pato.jpg",
  },
  {
    titulo: "Ceviche Clásico",
    restaurante: "La Mar Brava",
    precio: "S/15.00",
    imagen:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2017%2F03%2F08%2Fceviche-de-pescado-tilapia-2000.jpg&q=60",
  },
  {
    titulo: "Ceviche Mixto",
    restaurante: "La Mar Brava",
    precio: "S/20.00",
    imagen:
      "https://www.cevichede.com/wp-content/uploads/2020/05/CevicheMixto-500x465.jpg",
  },
  {
    titulo: "Tiradito",
    restaurante: "La Mar Brava",
    precio: "S/25.00",
    imagen:
      "https://www.seriouseats.com/thmb/HKGFrG1urEoU5P8OykgA3qlCXZg=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__03__20190314-tiradito-vicky-wasik-10-c69c3c7a4274408f91d38a15beb4cf93.jpg",
  },
  {
    titulo: "Causa Marina",
    restaurante: "La Mar Brava",
    precio: "S/30.00",
    imagen:
      "https://images.squarespace-cdn.com/content/v1/5a959137f2e6b109633506e8/1524615891334-E4TNOI5YP3SDU91CG8YD/CausaRellena.png",
  },
];

const Products = () => {
  return (
    <div>
      <Box>
        <Container>
        <Typography variant="h6">Nuestro productos</Typography>
          <Grid container py={5} sx={{ justifyContent: "center" }}>
            
            {productos.map((product, index) => (
              <Grid item md={4} py={2}>
                <Product
                  title={product.titulo}
                  desc={product.restaurante}
                  img={product.imagen}
                  key={index}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Products;
