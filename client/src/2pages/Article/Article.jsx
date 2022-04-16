import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  articleImg: {
    width: "100%",
    height: "450px",
    objectFit: "cover",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
});

const Article = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Box my={8}>
          <Grid container>
            <Grid item md={8} xs={12}>
              <Typography variant="h1" sx={{ textTransform: "uppercase" }}>
                SNMPE: empresas del sector hidrocarburos pagaron us$ 749.8
                millones de regalías al estado de enero a setiembre 2021
              </Typography>
              <Typography variant="body1" pt={1}>
                Cifra representa un crecimiento de 130% con relación a similar
                periodo 2020.
              </Typography>
              <Typography variant="body2" pt={1}>
                20 octubre 2021
              </Typography>
              <img
                src="/images/articles/article1.jpg"
                alt=""
                className={classes.articleImg}
              />
              <Box py={1}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#f97316",
                    height: "75px",
                    backgroundColor: "#f97316",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography color="white" variant="h6">
                    PUBLICIDAD
                  </Typography>
                </Paper>
              </Box>
              <Typography>
                Un total de 749.8 millones de dólares pagaron al Estado peruano
                las empresas que trabajan en el sector hidrocarburos por
                concepto de regalías de enero a setiembre de 2021, indicó la
                Sociedad Nacional de Minería, Petróleo y Energía (SNMPE).
                <br />
                <br />
                El gremio minero energético informó que esta cifra (US$ 749.8
                millones) representó un crecimiento de 130% con relación a los
                US$ 325.6 millones de dólares que abonaron las compañías
                petroleras por regalías en el periodo de enero a setiembre de
                2020.
                <br />
                <br />
                Las empresas que operan en la industria hidrocarburífera
                nacional -detalló-pagaron 130.9 millones de dólares por concepto
                de regalías en setiembre 2021, lo que significó un incremento de
                196.5 % respecto a similar mes del 2020 (US$ 44.1 millones).
                <br />
                <br />
                Asimismo, citó que las regalías de setiembre último (US$ 130.9
                millones) también fueron superiores a las reportadas en igual
                mes del año 2019 (US$ 62.5 millones).
                <br />
                <br />
                El gremio minero energético explicó que, en setiembre del
                presente año, las compañías del sector hidrocarburos abonaron
                por concepto de regalías: US$ 63.2 millones por la explotación
                de gas natural y US$ 15.8 millones por petróleo; así como US$
                51.9 millones por la producción líquidos de gas natural.
                <br />
                <br />
                La SNMPE comentó que, al cierre del tercer trimestre del año, el
                aumento de las regalías se vio favorecido por el incremento de
                los precios internacionales del petróleo y gas natural, así como
                por la reactivación de la economía mundial y nacional.
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} pl={{ md: 5 }} pt={{ xs: 4, md: 0 }}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#f97316",
                  height: "300px",
                  backgroundColor: "#f97316",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography color="white" variant="h6">
                  PUBLICIDAD
                </Typography>
              </Paper>
              <Box pt={2}>
                <Typography variant="h4">CONTACTO</Typography>
                <Typography variant="body1" py={2}>
                  Para contactos de publicidad o cualquier otra consulta, por
                  favor contáctese con:
                </Typography>
                <Box
                  p={4}
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                >
                  <img
                    src="/images/about-us/avatars/miembro1.png"
                    alt=""
                    style={{ borderRadius: "50%", height: "250px" }}
                  />
                </Box>
                <Typography variant="body1">Juan José Silva Ramos</Typography>
                <Typography variant="body1">jjsilvaperu@gmail.com</Typography>
                <Typography variant="body1">+51 929 311 362</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Article;
