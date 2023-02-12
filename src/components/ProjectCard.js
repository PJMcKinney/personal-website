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
        <Paper>
            <Stack m={2}>
                <Stack justifyContent= "space-between" direction="row">
                    <Stack>
                        <Typography gutterBottom variant="h5">Title: {projects[projectId - 1].name}</Typography>
                        <Typography variant="h6">Description:</Typography>
                        <Typography variant="body">{backgroundBody}</Typography>
                        <Typography variant="body">Github: {<a href=""></a>}</Typography>
                        <Typography variant="h6">Technologies:</Typography>
                        <Typography variant="body">{educationBody}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}