// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './pages/Homepage';
import Studio from './pages/Studio';

const App = () => {
  const appRoute = createBrowserRouter([
    {path:"/",element:<Homepage/>},
    {path:"/Studio",element:<Studio/>},
  ])
  return (
   <RouterProvider router={appRoute}>
   
   </RouterProvider>
  );
};

export default App;
