import { Button, Container, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const logos = [
  "./images/about-us/logos/logo-LOGYTEC.png",
  "./images/about-us/logos/logo-knipex.png",
  "./images/about-us/logos/logo-INGETROL.png",
  "./images/about-us/logos/logo-IFITSA.png",
  "./images/about-us/logos/logo-able.png",
  "./images/about-us/logos/logo-Energotec.png",
];

const useStyles = makeStyles({
  imgLogo: {
    maxHeight: "56px",
    maxWidth: "125px",
  },
});

const Intro = () => {
  const classes = useStyles();

  return (
    <Box bgcolor="white">
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignContent="center" py={7}>
          <Grid item md={12} sm={12} xs={12} align="center">
            <Typography
              color="secondary"
              variant="body2"
              fontWeight="bold"
              component="div"
              py={1}
            >
              Sobre nosotros
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{ maxWidth: { md: "750px", xs: "100%" } }}
            >
              Novedosa publicación peruana con enfoque al desarrollo y difusión
              de investigaciones y nuevas tecnologías.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "650px" }} py={1}>
              Cubrimos mercados importantes del sector eléctrico como
              generación, transmisión y distribución. Además, promueve el
              desarrollo de las operaciones y mantenimiento eléctrico,
              inversiones y proyectos del sector industrial.
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12} align="center" py={2}>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/energiaymantenimientoelectrico"
              style={{ textDecoration: "none" }}
            >
              <Button
                color="secondary"
                variant="contained"
                style={{
                  boxShadow: "0px 0px 0px 0px",
                  paddingLeft: "4em",
                  paddingRight: "4em",
                  paddingBlock: "1em",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {"Visitanos tambien en Facebook"}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Box p={2}>
          <Grid container align="center" alignItems="center">
            {logos.map((logo, index) => (
              <Grid item md={2} sm={4} xs={6} key={index} p={2}>
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className={classes.imgLogo}
                />
              </Grid>
            ))}
            <Grid item xs={12} align="center" pb={4} justify="center">
              <Typography
                variant="body2"
                mt={2}
                sx={{ maxWidth: "400px", fontWeight: "300" }}
                align="center"
              >
                Contamos con el apoyo de destacadas empresas y marcas de
                prestigio nacional e internacional.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Intro;
