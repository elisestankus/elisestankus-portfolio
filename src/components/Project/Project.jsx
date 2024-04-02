import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ccScreenshot from '../../assets/ccScreenshot.png';
import './Project.css'

function ProjectCard() {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper className="projectPaper"sx={{backgroundColor: 'whitesmoke', pt: '.1px'}}>
            <Typography className="projectTitle" variant="h4" fontFamily= '"Georgia", "Helvetica", "Arial", sans-serif' color="rgb(115, 147, 115)" align="center" sx={{mt: '2px', mx: '2px'}}>Crystal Clarity</Typography>
                <img className="screenshot" src={ccScreenshot} alt="project screenshot" height="auto" width="100%" /> 
                
            </Paper>
        </Grid>
     )
}

export default ProjectCard;