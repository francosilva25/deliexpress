import {
  AppBar,
  Container,
  IconButton,
  InputBase,
  Link,
  Menu,
  MenuItem,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const pages = [
  { title: "Nosotros", link: "about" },
  { title: "Productos", link: "productos" },
  { title: "Iniciar Sesión", link: "login" },
];

const useStyles = makeStyles({
  logo: {
    height: "32px",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  border: "1px solid #E5E7EB",
  backgroundColor: "#F9FAFB",
  "&:hover": {
    backgroundColor: "#F9FAFB",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#6B7280",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    color: "#6B7280",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const NavBar = () => {
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
            xs={5}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "left",
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

          <Grid
            item
            md={5}
            xs={10}
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
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
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default NavBar;
