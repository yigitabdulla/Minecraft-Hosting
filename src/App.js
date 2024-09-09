
import './App.css';
import Home from './pages/home/Home'
import Layout from './pages/layout/Layout';
import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Servers from './pages/servers/Servers';
import Contact from './pages/contact/Contact';
import Profile from './pages/profile/Profile';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/servers",
          element: <Servers/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },

      ]
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>

  );


}


export default App;
