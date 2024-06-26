import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './Project.css'

function ProjectCard({ imagePath, title, description, deployedURL, githubRepo, frontEnd }) {
    const [showOverlay, setShowOverlay] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#f5f5f5',
            },
        },
    })

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper className="projectPaper" sx={{ backgroundColor: 'whitesmoke', p: '.1px' }} onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
                <img className="screenshot" src={imagePath} alt="project screenshot" height="100%" width="100%" />
                {showOverlay &&
                    <div className='projectOverlay'>
                        <div className='projectText'>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h4' sx={{ fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif', color: '#f5f5f5', fontSize: { xs: '1.5rem', sm: '1.6rem', md: '1.4rem', lg: '1.7rem' } }}>{title}</Typography>
                                <Typography variant="h7" sx={{ fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif', color: '#f5f5f5', fontSize: { xs: '1rem', sm: '1rem', md: '.85rem', lg: '1.1rem' } }}>{description} </Typography>
                                <br />
                                {frontEnd ? (
                                    <Button variant='outlined' size='small' color='primary' sx={{ m: { xs: .25, sm: 1 }, fontSize: { xs: '.7rem', sm: '.6rem', md: '.65rem', lg: '.8rem' }, fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif' }} href={deployedURL}>Visit website</Button>) : (
                                    <Button variant='outlined' size='small' color='primary' sx={{ m: { xs: .25, sm: 1 }, fontSize: { xs: '.7rem', sm: '.6rem', md: '.65rem', lg: '.8rem' }, fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif' }} href={deployedURL}>Watch video</Button>
                                )}
                                <Button variant='outlined' size='small' color='primary' sx={{ m: { xs: .25, sm: 1 }, fontSize: { xs: '.7rem', sm: '.6rem', md: '.65rem', lg: '.8rem' }, fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif' }} href={githubRepo}>Github repo</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                }
            </Paper>
        </Grid>
    )
}

export default ProjectCard;