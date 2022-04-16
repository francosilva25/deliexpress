import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const objetivos = [
  "Información valiosa de interés del sector.",
  "Guía actualizada sobre Comercio Eléctrico e Industrial, proveedores productos y servicios.",
  "Guía actualizada sobre Comercio Ferretero, tiendas, proveedores y productos.",
  "Nuevos modelos de tiendas virtuales y Expo Ferias.",
  "V Congreso Internacional de Mantenimiento Eléctrico Perú 2022.",
  "III Congreso Internacional de Trabajos con Tensión-TcT PERÚ.",
  "III Seminario Internacional de Prospectiva, Tecnología e Innovación-INNOVATEC PERÚ.",
  "II Seminario Internacional de Eficiencia Energética Perú.",
  "III Seminario Internacional de Petroquímica Perú.",
  "I Convención Eléctrica Perú- AT, MT y BT.",
];

const ObjetivoPrincipal = () => {
  return (
    <Box bgcolor="#F9F9F9" py={7}>
      <Container>
        <Grid container>
          <Grid item md={7}>
            <Typography variant="h2">Nuestro objetivo principal</Typography>
            <Typography variant="body1" my={1}>
              Buscamos brindar una excelente herramienta que les permita crecer
              y aumentar las ventas y posicionar mejor los negocios. Ya somos
              una comunidad numerosa conformada por profesionales y técnicos e
              las áreas de operaciones y mantenimiento eléctrico, seguridad
              eléctrica, automatización, control y procesos – jefaturas técnicas
              y técnicos de trabajos con tensión, etc.
            </Typography>
            <Typography variant="body1" my={1}>
              Te ofrecemos lo siguiente de manera honesta:
            </Typography>
            {objetivos.map((objetivo) => (
              <Box key={objetivo} sx={{ display: "flex" }} py={1}>
                <Avatar
                  sx={{
                    maxWidth: "18px",
                    maxHeight: "18px",
                    backgroundColor: "#ffe6c2",
                  }}
                >
                  <CheckIcon
                    sx={{
                      maxWidth: "14px",
                      maxHeight: "14px",
                      color: "#e67a00",
                    }}
                  />
                </Avatar>
                <Typography variant="body2" sx={{ paddingLeft: "0.5em" }}>
                  {objetivo}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ObjetivoPrincipal;
