import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ccScreenshot from '../../assets/ccScreenshot.png';
import './Project.css'

function ProjectCard() {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper className="projectPaper"sx={{backgroundColor: 'whitesmoke', p: '.1px'}}>
                <img className="screenshot" src={ccScreenshot} alt="project screenshot" height="auto" width="100%" /> 
            </Paper>
        </Grid>
     )
}

export default ProjectCard;