import React, { useContext } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  logo: {
    height: "32px",
  },
});

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged, setisLogged] = state.UserAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.UserAPI.isAdmin;
  const [cart] = state.UserAPI.cart;

  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  /*   const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }; */

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <Link
          to="/category"
          sx={{ textDecoration: "none" }}
          onClick={handleCloseNavMenu}
        >
          <Typography
            sx={{
              my: 2,
              mx: 2,
              display: "block",
              color: "#505050",
              fontWeight: "medium",
              "&:hover": {
                color: "#0ACF83",
              },
            }}
            component="div"
            variant="subtitle2"
          >
            Categorias
          </Typography>
        </Link>
        <Link
          to="/create_product"
          sx={{ textDecoration: "none" }}
          onClick={handleCloseNavMenu}
        >
          <Typography
            sx={{
              my: 2,
              mx: 2,
              display: "block",
              color: "#505050",
              fontWeight: "medium",
              "&:hover": {
                color: "#0ACF83",
              },
            }}
            component="div"
            variant="subtitle2"
          >
            Crear producto
          </Typography>
        </Link>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        {isAdmin ? null : (
          <>
            <Link
              to="history"
              sx={{ textDecoration: "none" }}
              onClick={handleCloseNavMenu}
            >
              <Typography
                sx={{
                  my: 2,
                  mx: 2,
                  display: "block",
                  color: "#505050",
                  fontWeight: "medium",
                  "&:hover": {
                    color: "#0ACF83",
                  },
                }}
                component="div"
                variant="subtitle2"
              >
                Historial
              </Typography>
            </Link>{" "}
            <Link
              to="cart"
              sx={{ textDecoration: "none" }}
              onClick={handleCloseNavMenu}
            >
              <Typography
                sx={{
                  my: 2,
                  mx: 2,
                  display: "block",
                  color: "#505050",
                  fontWeight: "medium",
                  "&:hover": {
                    color: "#0ACF83",
                  },
                }}
                component="div"
                variant="subtitle2"
              >
                Carrito
              </Typography>
            </Link>{" "}
          </>
        )}
        <Link to="/" sx={{ textDecoration: "none" }} onClick={logoutUser}>
          <Typography
            sx={{
              my: 2,
              mx: 2,
              display: "block",
              color: "#505050",
              fontWeight: "medium",
              "&:hover": {
                color: "#0ACF83",
              },
            }}
            component="div"
            variant="subtitle2"
          >
            Cerrar sesión
          </Typography>
        </Link>
      </>
    );
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "0px 0px 0px 0px",
        backgroundColor: "white",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid
            item
            sm={2}
            xs={4}
            sx={{
              borderRadius: "1px",
              display: {
                xs: "none",
                md: "flex",
                "&:hover": {
                  backgroundColor: "white",
                },
              },
            }}
          >
            <IconButton
              aria-label="logo-appbar"
              aria-controls="logo-appbar"
              href="/"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <img
                src="./deliexpress.png"
                alt="Logo energia sin texto"
                className={classes.logo}
              />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {isAdmin && adminRouter()}
            {isLogged ? (
              loggedRouter()
            ) : (
              <Link
                to="/login"
                sx={{ textDecoration: "none" }}
                onClick={handleCloseNavMenu}
              >
                <Typography
                  sx={{
                    my: 2,
                    mx: 2,
                    display: "block",
                    color: "#505050",
                    fontWeight: "medium",
                    "&:hover": {
                      color: "#0ACF83",
                    },
                  }}
                  component="div"
                  variant="subtitle2"
                >
                  Iniciar sesión
                </Typography>
              </Link>
            )}
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;