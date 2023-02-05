import { Divider } from "@mui/material"
import { Stack } from "@mui/system"

export default function TemplatePage(props) {
    return(
        <Stack my={2} mx={6} spacing={2}>
            {props.children}
            <Divider />
        </Stack>
    )
}