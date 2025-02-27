
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
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ServerSettings from './pages/serverSettings/ServerSettings';
import ServerConsole from './pages/serverConsole/ServerConsole';
import ServerPlayers from './pages/serverPlayers/ServerPlayers';
import ServerFolders from './pages/serverFolders/ServerFolders';


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
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
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
          path: "/profile/servers/:serverId/settings",
          element: <ServerSettings/>
        },
        {
          path: "/profile/servers/:serverId/console",
          element: <ServerConsole/>
        },
        {
          path: "/profile/servers/:serverId/players",
          element: <ServerPlayers/>
        },
        {
          path: "/profile/servers/:serverId/folders",
          element: <ServerFolders/>
        },
        {
          path: "/profile/servers/:serverId",
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
