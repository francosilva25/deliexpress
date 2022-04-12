import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

import "./style.css";

function Copyright(props) {
  return (
    <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    {...props}
    sx={{ textDecoration: "none", fontWeight: "400", paddingTop: "3rem" }}
  >
    {"Copyright © "}
    <Link
      color="inherit"
      href="./"
      sx={{ textDecoration: "none", fontWeight: "400" }}
    >
      Energía & Mantenimiento Eléctrico S.A.C
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
  );
}


const IntroductionPage = () => {
  return (
    <>
    
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Box >
          <Grid container justifyContent="center">
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                src="./LOGO REVISTA-E&ME-OK.svg"
                alt="logo"
                className="appLogo"
              />
              <Box pt={6}>
                <Typography variant="h1">EN CONSTRUCCIÓN...</Typography>
                <Typography variant="body1">
                  ¡Estaremos lanzando nuestro nuevo sitio muy pronto!
                </Typography>
              </Box>
              <Box py={2}>
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
                      paddingBlock: "1em",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {"Visitanos tambien en Facebook"}
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    <Container>
      <Copyright sx={{ mt: 5 }} />
    </Container>
    </>
  );
};

export default IntroductionPage;