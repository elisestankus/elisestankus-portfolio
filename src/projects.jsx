import ccScreenshot from './assets/ccScreenshot.png';
import hgScreenshot from './assets/hgScreenshot.png'
import mjScreenshot from './assets/mjScreenshot.png'
import coderCoveScreenshot from './assets/coderCoveScreenshot.png'
import svgGenScreenshot from './assets/svgGenScreenshot.png'

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
        description: 'A front-end movie journal application collaboratively built using HTML, CSS, JavaScript, Bulma, the  OMDB API, and the YouTube API. ',
        deployedURL: 'https://sav-the-sag.github.io/movie_project/',
        githubRepo: 'https://github.com/elisestankus/movie_journal.git'
        
    },
    {
        imagePath: coderCoveScreenshot,
        title: 'Coder Cove',
        description: 'A full stack blog application independently built using MySQL, Handlebars, Express, and Node.js.',
        deployedURL: 'https://coder-cove-105ba26a819d.herokuapp.com/',
        githubRepo: 'https://github.com/elisestankus/coder-cove.git'

    },
    {
        imagePath: svgGenScreenshot,
        title: 'SVG Logo Generator',
        description: 'A command-line SVG logo generator application independently built using Node.js and Inquirer. Tested using Jest.',
        deployedURL: 'https://drive.google.com/file/d/1W7tLVVeBCkozPAY0LiwH4jdmb_3NMVFY/view?usp=sharing',
        githubRepo: 'https://github.com/elisestankus/SVG-logo-generator.git'

    }


]

export default projects;