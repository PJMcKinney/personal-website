import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useOutletContext, useParams } from "react-router-dom";
import {
    backgroundBody,
    educationBody, 
} from "../text/AboutBody";

export default function ProjectCard() {

    const { projectId } = useParams()
    const projects = useOutletContext()

    return(
        <Paper elevation={2}>
            <Stack m={2}>
                <Stack justifyContent= "space-between" direction="row">
                    <Stack spacing={1}>
                        <Typography gutterBottom variant="h5">Title: {projects[projectId - 1].name}</Typography>
                        <Typography variant="h6">Description:</Typography>
                        <Typography variant="body1">{backgroundBody}</Typography>
                        <Typography variant="h6">Technologies:</Typography>
                        <Typography variant="body1">{educationBody}</Typography>
                        <Typography 
                            variant="body1"
                            
                        >
                            Github:{<a href={projects[projectId - 1].githubLink}>{projects[projectId - 1].name}</a>}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}