import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Nav />
      <Box component="main" sx={{ my: 10, mx: 5, p: 3, minHeight: '68vh'}}>
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}

export default App
