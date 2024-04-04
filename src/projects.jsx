import ccScreenshot from './assets/ccScreenshot.png';
import hgScreenshot from './assets/hgScreenshot.png'
import mjScreenshot from './assets/mjScreenshot.png'
import coderCoveScreenshot from './assets/coderCoveScreenshot.png'

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

    }


]

export default projects;