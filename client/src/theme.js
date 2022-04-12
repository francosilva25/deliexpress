import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0ACF83',
            contrastText: 'rgba(255,255,255)',
        },
        secondary: {
            main: '#0ACF83',
            contrastText: 'rgba(255,255,255)',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
            fontWeight: 800,
            fontSize: '2rem',
            color: '#303030'
        },
        h2: {
            fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
            fontWeight: 700,
            fontSize: '2rem',
            color: '#303030'
        },
        h5: {
            fontFamily: '"Open Sans", "Arial", sans-serif',
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        h6: {
            fontFamily: '"Open Sans", "Arial", sans-serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: "#505050"
        },
        h7: {
            fontFamily: '"Open Sans", "Arial", sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: "#505050"
        },
        h4: {
            fontSize: '1.7rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontFamily: '"IBM Plex Sans", "sans-serif"',
            fontWeight: '400',
            color: 'rgb(62, 80, 96)'
        },
        body2: {
            fontSize: '0.8rem',
            fontFamily: '"IBM Plex Sans", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: '800',
            color: "#505050",
        },
    },
});

export default theme;