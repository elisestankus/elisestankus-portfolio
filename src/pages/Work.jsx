import Grid from '@mui/material/Grid';
import ProjectCard from '../components/Project/Project';


export default function Work() {
    return (
        <div>
            <h2>Work Page</h2>
            <br />
            < Grid container spacing={3}>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </Grid>
        </div>
    );
}