// MUI 스타일 테마 설정

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#82AEF5'
    },
    secondary: {
      main: '#5F7DFF'
    },
    error: {
      main: '#E50914'
    },
    background: {
      
    },
    text: {
      secondary: '#2B6678'
    }
  },

  typography: {
    // fontFamily: ''
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    }
  }


});