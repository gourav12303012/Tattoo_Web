// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './pages/Homepage';
import Studio from './pages/Studio';
import TattooCategory from './pages/TattooCategory';
import About from './pages/About';
import DashboardPage from './pages/DashboardPage';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Testimonial from './pages/Testimonial';

const App = () => {
  const appRoute = createBrowserRouter([
    {path:"/",element:<Homepage/>},
    {path:"/Studio",element:<Studio/>},
    {path:"/TattooCategory",element:<TattooCategory/>},
    {path:"/About",element:<About/>},
    {path:"/DashboardPage",element:<DashboardPage/>},
    {path:"/Contact",element:<Contact/>},
    {path:"/Work",element:<Work/>},
    {path:"/Testimonial",element:<Testimonial/>},
  ])
  return (
   <RouterProvider router={appRoute}>
   
   </RouterProvider>
  );
};

export default App;
