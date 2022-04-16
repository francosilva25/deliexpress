import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  heroImg: {
    maxWidth: "100%",
  },
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Box
          p={1.5}
          bgcolor="#FAFAFA"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="body1" align="center">
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </Typography>
        </Box>
        <Container sx={{ py: 8 }}>
          <Grid container alignItems="center">
            <Grid item md={6} sm={6} xs={12} pr={4} py={2}>
              <Typography variant="h1" color="black">
                Te regalamos 25 % de descuento en tu primera compra
              </Typography>
              <Typography variant="body1" py={1}>
                No queremos que te desesperes esperando. Por eso contamos con un
                equipo listo para entregarte tus productos en la menor cantidad
                de tiempo posible. DeliExpress es un servicio creado para
                facilitar la vida de las personas. Brindamos acceso inmediatos a
                todo tipo de comidas de disversos establecimientos para
                satisfacer tus gustos.
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12} py={2}>
              <a href="/404">
                <img
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="a"
                  className={classes.heroImg}
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HeroSection;
