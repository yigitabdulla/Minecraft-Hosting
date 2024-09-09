import Navbar from "../../components/navbar/Navbar";
import "./layout.scss";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {

  const location = useLocation();

  // Dynamically set background based on the route
  const getBackgroundClass = () => {
    switch (location.pathname) {
      case "/contact":
        return "background-component1";
      default:
        return "background-default";
    }
  };

  return (
    <div className={`layout ${getBackgroundClass()}`}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;