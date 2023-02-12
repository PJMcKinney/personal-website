import { Link, Outlet } from "react-router-dom"
import TemplatePage from "../shared/TemplatePage"
import { projects } from "../text/ProjectsList"

export default function Projects() {

    const projectLinks = projects.map(project => {
        return <Link key={project.id} to={`/projects/${project.id}`}>{project.name}</Link>
    })

    return (
        <TemplatePage title="My Projects">
            {projectLinks}
            <Outlet context={projects}/>
        </TemplatePage>
    )
}

