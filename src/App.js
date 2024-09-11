
import './App.css';
import Home from './pages/home/Home'
import Layout from './pages/layout/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Servers from './pages/servers/Servers';
import Contact from './pages/contact/Contact';
import Profile from './pages/profile/Profile';
import UserServers from './pages/userServers/UserServers';
import Server from './pages/server/Server';
import Cart from './pages/cart/Cart';


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
        {
          path: "/profile/servers",
          element: <UserServers/>
        },
        {
          path: "/profile/servers/:id",
          element: <Server/>
        },
        {
          path: "/cart",
          element: <Cart/>
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
