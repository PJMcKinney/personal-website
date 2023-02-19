import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack, Container } from "@mui/system";
import { Link } from "react-router-dom";

const pages = [
    {
        title: 'About Me',
        link: '/'
    }, 
    {
        title: 'Projects',
        link: '/projects'
    }
]

export function Navbar() {

    return (
        <AppBar
            color="primary"
            position="static"
        >
            <Container>
                <Toolbar>
                    <Typography
                        display={{sm: "block", xs: "none"}}
                        variant="h1"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                          }}
                    >
                        PJ Mc Kinney
                    </Typography>

                    <Stack
                        direction='row'
                        justifyContent={{sm: "flex-end",xs: "center"}}
                        alignItems="baseline"
                        spacing={4}
                        sx={{ 
                            flexGrow: 1,
                            }}>
                        {pages.map((page, index) => (
                                <Link
                                    to={page.link}
                                    key={index}
                                    style={{
                                        fontFamily: "'JetBrains Mono', 'monospace",
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {page.title}
                                </Link>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}