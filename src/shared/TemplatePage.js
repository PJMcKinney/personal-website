import { Typography } from "@mui/material"
import { Container } from "@mui/system"

export default function TemplatePage(props) {
    return(
        <Container sx={{my: 5}}>
            <Typography gutterBottom variant="h2">{props.title}</Typography>
            {props.children}
        </Container>
    )
}