import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
      primary: {
        main: '#1a1919'
      },
      background: {
        default: '#1a1919',
        paper: 'white'
      },
    },
    typography: {
        fontFamily: ["'JetBrains Mono', 'monospace'"].join(','),
        h1: {
            fontSize: '2rem',
        },
        h2: {
          fontSize: '1.6rem',
        },
        body1: {
          fontSize: '0.8rem',
        },
      },
  })

  export default theme