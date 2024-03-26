import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Work from './pages/Work.jsx';

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
              index: true,
              element: <Home />,
          },
          {
              path: '/AboutMe',
              element: <AboutMe />,
          },
          {
              path: '/Work',
              element: <Work />,
          },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);