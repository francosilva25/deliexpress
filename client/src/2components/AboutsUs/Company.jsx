import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const miembros = [
  {
    image: "./images/about-us/avatars/miembro1.png",
    name: "Juan José Silva Ramos",
    position: "Generente general",
    desc: "Adicto a los grandes retos.",
    links: [{ type: "whatsapp", url: "https://wa.me/51929311362" }],
  },
  {
    image: "./images/about-us/avatars/miembro2.jpg",
    name: "Marco Antonio Córdova",
    position: "Generente de administración y finanzas",
    desc: "Forjador de la rentabilidad segura.",
    links: [{ type: "whatsapp", url: "https://wa.me/51929311362" }],
  },
  {
    image: "./images/about-us/avatars/miembro3.jpg",
    name: "Orlando Ardito Chávez",
    position: "Comité de Seguridad Eléctrica",
    desc: "Defensor de la ética y de la calidad.",
    links: [{ type: "whatsapp", url: "https://wa.me/51929311362" }],
  },
  {
    image: "./images/about-us/avatars/miembro4.png",
    name: "Edwin Dextre Jara",
    position: "Comité de Prospectiva e Innovación",
    desc: "Visionero y Forjador de nuevos  emprenderos.",
    links: [{ type: "whatsapp", url: "https://wa.me/51929311362" }],
  },
  {
    image: "./images/about-us/avatars/miembro5.png",
    name: "José A. Velásquez",
    position: "Comité de Automatización Industrial",
    desc: "Visionero de grandes proyectos  y mejora continua.",
    links: [{ type: "whatsapp", url: "https://wa.me/51929311362" }],
  },
  {
    image: "./images/about-us/avatars/miembro6.png",
    name: "Franklin Tamayo Ordaya",
    position: "Comité de Trabajos con Tensión (TcT)",
    desc: "Forjador de futuros emprendedores en TcT.",
    links: [{ type: "whatsapp", url: "https://wa.me/51929311362" }],
  },
];

const renderIcon = (type) => {
  switch (type) {
    case "whatsapp":
      return <WhatsAppIcon />;
    case "github":
      return <GitHubIcon />;
    default:
      return null;
  }
};

const Company = () => {
  return (
    <>
      <Box py={7}>
        <Container maxWidth="lg">
          <Box pb={3}>
            <Typography variant="h5" color="secondary">
              Compañía
            </Typography>
            <Typography
              sx={{ maxWidth: { md: "500px" } }}
              variant="body1"
              pt={1}
            >
              Contamos con un equipo con alta experiencia y conocimiento del
              mercado para poder ofrecete los mejores productos y servicios.
            </Typography>
          </Box>

          <Box>
            <Grid
              container
              sx={{ width: "calc(100% + 20px)", marginLeft: "-20px" }}
            >
              {miembros.map((miembro) => (
                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={12}
                  sx={{ paddingLeft: "20px", paddingBottom: "2em" }}
                  key={miembro.name}
                >
                  <Paper
                    variant="outlined"
                    sx={{ padding: "20px", height: "90%" }}
                  >
                    <Grid container>
                      <Grid item md={6} sm={4} xs={6}>
                        <Avatar
                          alt="Remy Sharp"
                          src={miembro.image}
                          sx={{
                            borderRadius: "8px",
                            height: "70px",
                            width: "70px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        sm={8}
                        xs={6}
                        display="flex"
                        justifyContent="right"
                        align="right"
                      >
                        <Box>
                          {miembro.links.map((link) => (
                            <IconButton
                              aria-label="logo-appbar"
                              aria-controls="logo-appbar"
                              href={`${link.url}`}
                              rel="noopener noreferrer"
                              target="_blank"
                              key={link}
                            >
                              {renderIcon(link.type)}
                            </IconButton>
                          ))}
                        </Box>
                      </Grid>
                      <Grid item xs={12} pt={2}>
                        <Typography variant="body2">{miembro.name}</Typography>
                        <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                          {miembro.position}
                        </Typography>
                        <Divider
                          sx={{
                            marginBlockStart: "0.5em",
                            marginBlockEnd: "0.5em",
                          }}
                        />
                        <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                          {miembro.desc}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Company;