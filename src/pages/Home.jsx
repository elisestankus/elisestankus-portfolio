import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import  TextField  from "@mui/material/TextField";
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f5f5f5',
        },
    },
})


export default function Home() {

    
    
    return (
        <div>
            <Box alignItems="center">
            <Typography variant="h1" sx={{fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}>Welcome!</Typography>
            <Typography variant="h1" sx={{fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}>I'm Elise Stankus,</Typography>
            <Typography variant="h2" sx={{fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}>a full-stack web developer.</Typography>
            <ThemeProvider theme={theme}>
            <TextField label="Enter your name!" size='small' variant="outlined" color='primary' InputLabelProps={{sx: {fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}} sx={{my: 3, input: {color: 'whitesmoke'}}} InputProps={{sx: {fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif', }}}focused />
            </ThemeProvider>
            </Box>
            
        </div>
    );
}