import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import  TextField  from "@mui/material/TextField";


const theme = createTheme({
    palette: {
        primary: {
            main: '#f5f5f5',
        },
    },
})


export default function Home() {

    const [userName, setUserName] = useState('');
    const [comma, setComma] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (value.length > 0) {
            setComma(', ');
        } else {
            setComma('')
        }

        return setUserName(value);

    };

    


    
    return (
        <div>
            <Box alignItems="center">
            <Typography variant="h1" sx={{fontSize: {xs: '3.5rem', sm: '5rem'}, fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}>Welcome{comma}{userName}!</Typography>
            <Typography variant="h1" sx={{fontSize: {xs: '3.5rem', sm: '5rem'},fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}>I'm Elise Stankus,</Typography>
            <Typography variant="h2" sx={{fontSize: {xs: '3rem', sm: '4rem'},fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}>a full-stack web developer.</Typography>
            <ThemeProvider theme={theme}>
            <TextField 
            label="Enter your name!"
            value={userName} 
            size='small' 
            variant="outlined" 
            color='primary' 
            InputLabelProps={{sx: {fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'}}} 
            sx={{my: 3, input: {color: 'whitesmoke'}}} 
            InputProps={{sx: {fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif', }}}
            focused 
            onChange={handleInputChange}/>
            </ThemeProvider>
            </Box>
        </div>
    );
}