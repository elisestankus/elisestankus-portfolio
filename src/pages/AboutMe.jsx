import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import headshot from '../assets/headshot.png';

export default function AboutMe() {
    return (
        <div>
            <Typography variant="h2" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>About Me</Typography>
            <br />
            <Stack direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                <div>
                <Typography variant="h6" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>
                    Hi there! I'm Elise, a full-stack web developer currently residing in the San Francisco Bay Area. 
                    My interest in coding was first piqued during my senior year of college. Although I majored in Pharmacology, when the pandemic kept me out of the lab and classes moved online I had the opportunity to take an introduction to programming course. Around the same time, I was also exposed to some basics of web development and form validation while conducting bug testing of an application developed by UCSB’s Center for Science and Engineering Partnerships where I was an Evaluation Intern for two years.
                    </Typography>
                    <br />
                    <Typography variant="h6" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>
                    These academic and work experiences, combined with my personal interest in analyzing and envisioning improvements in the UI/UX design of websites I use or discover, motivated me to further explore a career in web development by recently attending and completing UC Berkeley’s Full-Stack Web Development Bootcamp.
                    </Typography>
                    <br />
                    <Typography variant="h6" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>
                    In both my individual bootcamp course work and as project manager for several group projects, I have discovered that my strong creative, analytic, and problem-solving skills, combined with my passion for learning and improvement, are well-matched to the requirements and rigor of web development. I enjoyed the challenge and creativity required to solve coding puzzles and design client-side UIs. Moreover, many of the skills acquired in my previous work and academics, such as project management, database management, and a strong attention to detail, contributed significantly to my personal and team project successes.
                    </Typography>
                    <br />
                    <Typography variant="h6" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>
                    I’ve always been a fast learner, diving deep into acquiring new skills – whether it’s teaching myself to knit, learning a new language, or developing my programming skills. From the UC Berkeley program I now have a solid foundation in the MERN stack, as well as experience with a diverse foundation of front-end and back-end technologies. In addition to the technologies and languages listed below, I am also currently learning AWS and Python.
                    </Typography>
                    <br />
                    <Typography variant="h6" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif'>
                    I graduated with honors with a Bachelor of Science in Pharmacology from UC Santa Barbara and I've completed UC Berkeley's Full-Stack Web Development Bootcamp. When I’m not at the computer, I’m usually reading, running, or designing knitwear.
                </Typography>
                </div>
                <img src={headshot} alt="picture of me." height="300px" width="250px" ></img>
            </Stack>
            <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="space-evenly" sx={{paddingTop: 2}}>
                <Paper sx={{backgroundColor:'rgba(245, 245, 245, .8)', p: 1, textAlign: 'center', width: {sm: '100%', md: '25%'}}} >
                    <Typography variant="h5" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                    Languages 
                    </Typography>
                    <br />
                    
               
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        HTML
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        CSS
                    </Typography>
                    <br/>
                    
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        JavaScript
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        SQL
                    </Typography>
                 
                   
                </Paper>
                <Paper sx={{backgroundColor:'rgba(245, 245, 245, .8)', p: 1,  textAlign: 'center', width: {sm: '100%', md: '25%'}}}>
                    <Typography variant="h5" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Front-End Tech
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        React
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Handlebars
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Bootstrap
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Material UI
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Bulma
                    </Typography>
                   
                </Paper>
                <Paper sx={{backgroundColor:'rgba(245, 245, 245, .8)', p: 1,  textAlign: 'center', width: {sm: '100%', md: '25%'}}}>
                <Typography variant="h5" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Back-End Tech
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Express.js
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Node.js
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        MongoDB
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        MySQL
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        GraphQL
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        JWT
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Bcrypt
                    </Typography>
                    <br />
                </Paper>
                <Paper sx={{backgroundColor:'rgba(245, 245, 245, .8)', p: 1,  textAlign: 'center', width: {sm: '100%', md: '25%'}}}>
                <Typography variant="h5" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                       Additional Tools
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Jest
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Insomnia
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Netlify
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Heroku
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Render
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        Git
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        VS Code
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        API integration
                    </Typography>
                    <br />
                    <Typography variant="h7" fontFamily='"Georgia", "Helvetica", "Arial", sans-serif' sx={{color: 'rgb(74, 107, 74)'}}>
                        JQuery
                    </Typography>
                    <br />
                </Paper>
            </Stack>
        </div>
    );
}