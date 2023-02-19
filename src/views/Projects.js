import { Paper } from "@mui/material"
import { Stack } from "@mui/system"
import { Link, Outlet } from "react-router-dom"
import TemplatePage from "../shared/TemplatePage"
import { projects } from "../text/ProjectsList"

export default function Projects() {

    const projectLinks = projects.map(project => {
        return (
            <Link
                key={project.id}
                to={`/projects/${project.id}`}
                style={{
                    fontFamily: "'JetBrains Mono', 'monospace",
                    color: 'blue',
                    textDecoration: 'none',
                }}
            >
                {project.name}
            </Link>
        )
           
    })

    return (
        <TemplatePage title="My Projects">
            <Stack 
                direction="row"
                spacing={2}
            >
                <Paper elevation={2}>
                    <Stack justifyContent="center" alignItems="center" py={2} m={2} spacing={1}>
                        {projectLinks}
                    </Stack>
                </Paper>
                <Outlet context={projects}/>
            </Stack>
        </TemplatePage>
    )
}

