import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TemplatePage from "../shared/TemplatePage";

function Projects() {
    return <Stack>
        <TemplatePage>
            <Typography
                variant='h4'
            >
                My Projects
            </Typography>
        </TemplatePage>
    </Stack>
}

export default Projects