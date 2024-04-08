import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import headshot from '../assets/headshot.png';

export default function AboutMe() {
    return (
        <div>
            <Typography variant="h2" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>About Me</Typography>
            <br />
            <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Typography variant="h6" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>
                Hi there! I'm Elise, a full-stack web developer currently residing in the San Francisco Bay Area. 
                From designing clean, elegant front-ends to building efficient, robust back-ends, web development allows me to engage my creative side and apply my strong problem-solving skills. 
                I have a Bachelor's of Science in Pharmacology from UC Santa Barbara and I've completed UC Berkeley's Full-Stack Web Development Bootcamp. 
                In addition to coding, I also enjoy reading, running, and designing knitwear.    
            </Typography>
            <img src={headshot} alt="picture of me." height="300px" width="250px" ></img>
            </Stack>
        </div>
    );
}