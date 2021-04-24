import { createMuiTheme } from '@material-ui/core';

export function getTheme(mode: "light"|"dark" = "light") {
  return createMuiTheme({
    palette: {
      type: mode,
      primary: {
        main: "#673AB7"
      },
      secondary: {
        main: "#01A8D5"
      }
    },
    typography: {
      fontFamily: "Inter, Sen, sans-serif",
      fontWeightBold: 900,
      fontWeightMedium: 500,
      fontWeightRegular: 500,
      fontSize: 16,
    },
    shape: {
      borderRadius: 5
    },
    overrides: {
      MuiButton: {
        label: {
          fontSize: '16px',
          textTransform: 'none',
          justifyContent: 'flex-start'
        }
      }
    },
  });
}