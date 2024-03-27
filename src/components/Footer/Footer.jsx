import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css'

function Footer(){
    return (
        <footer className='footer'>
            <div>
            <a href="https://github.com/elisestankus"><GitHubIcon fontSize='large' sx={{mx: 3, my: 1}}/></a> <a href="https://linkedin.com/in/elise-stankus-1679b7140"><LinkedInIcon fontSize='large' sx={{mx: 3, my: 1}}/></a>
            </div>
        </footer>
    )
}

export default Footer;


