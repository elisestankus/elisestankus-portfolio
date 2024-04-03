import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ccScreenshot from '../../assets/ccScreenshot.png';
import './Project.css'

function ProjectCard() {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper className="projectPaper" sx={{ backgroundColor: 'whitesmoke', p: '.1px' }} onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
                <img className="screenshot" src={ccScreenshot} alt="project screenshot" height="auto" width="100%" />
                {showOverlay &&
                    <div className='projectText'>
                        <Typography variant='h4' sx={{ fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif', color: '#f5f5f5' }}>Project title</Typography>
                        <Typography variant="h6" sx={{ fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif', color: '#f5f5f5' }}>Here's a description of the project, it probably can't be more than a sentence or two</Typography>
                    </div>
                }
            </Paper>
        </Grid>
    )
}

export default ProjectCard;