import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
      primary: {
        main: '#1a1919'
      },
      background: {
        default: '#1a1919',
        paper: '#1a1919'
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