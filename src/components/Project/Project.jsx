import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ccScreenshot from '../../assets/ccScreenshot.png';

function ProjectCard() {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper>
                <img src={ccScreenshot} alt="project screenshot" height="auto" width="100%" /> 
                <Typography variant="h4" fontFamily= '"Georgia", "Helvetica", "Arial", sans-serif' color="rgb(66, 86, 66)">Project title</Typography>
            </Paper>
        </Grid>
     )
}

export default ProjectCard;