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
        h4: {
            fontSize: '2rem',
        },
      },
  })

  export default theme