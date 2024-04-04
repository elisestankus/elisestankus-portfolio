import ccScreenshot from './assets/ccScreenshot.png';
import hgScreenshot from './assets/hgScreenshot.png'
import mjScreenshot from './assets/mjScreenshot.png'

const projects = [
    {
        imagePath: ccScreenshot,
        title: 'Crystal Clarity',
        description: 'A personal wellness application collaboratively developed using the MERN stack.',
        deployedURL: 'https://crystalclarity.onrender.com/',
        githubRepo: 'https://github.com/elisestankus/crystalclarity.git'

    },
    {
        imagePath: hgScreenshot,
        title: 'HackerGrove',
        description: 'A habit-tracking application for coders collaboratively built using MySQL, Handlebars, Express, and Node.js. ',
        deployedURL: 'https://hacker-grove-215ce88624e3.herokuapp.com/',
        githubRepo: 'https://github.com/elisestankus/hacker-grove.git'

    },
    {
        imagePath: mjScreenshot,
        title: 'Movie Journal',
        description: 'A front-end movie journal application collaboratively built using HTML, CSS, JavaScript, and Bulma. ',
        deployedURL: 'https://sav-the-sag.github.io/movie_project/',
        githubRepo: 'https://github.com/elisestankus/movie_journal.git'
        
    }


]

export default projects;