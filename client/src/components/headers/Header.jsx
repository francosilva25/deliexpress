import React, { useContext } from 'react'
import {GlobalState} from '../../GlobalState'
import {
  AppBar,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { title: "Nosotros", link: "about" },
  { title: "Productos", link: "productos" },
  { title: "Carrito", link: "cart" },
  { title: "Iniciar Sesión", link: "login" },
];

const useStyles = makeStyles({
  logo: {
    height: "32px",
  },
});

const Header = () => {
  //const value = useContext(GlobalState)

  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
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
              /* backgroundColor: "blue", */
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
              /* backgroundColor: "red" */
            }}
          >
            {pages.map((page) => (
              <Link
                href={page.link}
                sx={{ textDecoration: "none" }}
                onClick={handleCloseNavMenu}
                key={page.title}
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
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon sx={{ color: "#111827" }} />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>

{/*           <Grid
            item
            md={5}
            xs={10}
            bgcolor='blue'
            sx={{
              flexGrow: 1,
              display: { md: "none" },
              justifyContent: "right",
            }}
            alignItems="center"
          >
            <Box alignContent="center">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Header