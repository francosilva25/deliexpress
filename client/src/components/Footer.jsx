import {
  Box,
  Button,
  Container,
  Divider,
  GlobalStyles,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const footers = [
  {
    title: "Empresa",
    description: ["Sobre nosotros", "Historia", "Contactanos"],
  },
  {
    title: "Redes",
    description: ["Facebook"],
  },
  {
    title: "Explora",
    description: ["Productos"],
  },
  {
    title: "Productos",
    description: ["Politica de privacidad", "Terminos de uso"],
  },
];

const useStyles = makeStyles({
  imgLogo: {
    maxHeight: "32px",
    paddingBottom: "0.5rem",
  },
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ textDecoration: "none", fontWeight: "300", paddingTop: "1rem" }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mui.com/"
        sx={{ textDecoration: "none", fontWeight: "300" }}
      >
        DeliExpress
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Contact() {
  return (
    <Grid container pt={2} pb={5}>
      <Grid item md={6}>
        <Typography variant="h5">¡Suscríbase a nuestro boletín!</Typography>
        <Typography variant="h6">Sin spam, garantizado.</Typography>
        <ul>
          <Typography>
            Alertas de precio personalizadas de publicidad
          </Typography>
          <Typography>Novedades y ofertas</Typography>
          <Typography>Eventos imperdibles</Typography>
        </ul>

      </Grid>
      <Grid item md={6}>
      <form style={{paddingRight: "1rem"}}>
          <TextField fullWidth type="email" color="secondary" placeholder="Ingrese su correo" label="Ingrese su correo" sx={{marginBottom: "1rem"}}></TextField>
          <Button fullWidth size="large" variant="contained" color="secondary">
            SUSCRIBIRSE
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Box
        sx={{
          borderTop: "1px solid #E5E7EB",
        }}
        py={4}
      >
        <Container maxWidth="lg" component="footer">
          <Grid container py={2}>
            <Grid item xs={12}>
              <Contact />
              <Divider />
            </Grid>
            <Grid item md={6} xs={12} pb={{ xs: 4 }} pt={4}>
              <Box pr={10}>
                <img
                  src="./logo512.png"
                  alt="footer-logo"
                  className={classes.imgLogo}
                />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.875rem", py: 1 }}
                >
                  Crea su mejor anuncio y <br /> exponga su mejor tecnología.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
                  energiaymantenimientoelectrico@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} pt={4} pb={2}>
              <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                  <Grid item xs={6} sm={3} key={footer.title}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      gutterBottom
                    >
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            variant="body1"
                            color="text.secondary"
                            sx={{ textDecoration: "none" }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
