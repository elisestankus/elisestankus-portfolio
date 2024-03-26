import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Nav />
      <Box component="main" sx={{ m: 5, p: 3 }}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default App
