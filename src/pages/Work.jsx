import Grid from '@mui/material/Grid';
import projects from '../projects.jsx';
import ProjectCard from '../components/Project/Project';


export default function Work() {
    return (
        <div>
            <h1>Work</h1>
            <br />
            <h4>A few projects I've worked on recently!</h4>
            <br />
            < Grid container spacing={3}>
                {projects.map(project => <ProjectCard {...project} key={projects.indexOf(project)} />)}
                
            </Grid>
        </div>
    );
}