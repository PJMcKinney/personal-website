import { Typography } from "@mui/material"
import { Stack } from "@mui/system"

export default function TemplatePage(props) {
    return(
        <Stack my={2} mx={6} spacing={2}>
            <Typography variant="h4">{props.title}</Typography>
            {props.children}
        </Stack>
    )
}