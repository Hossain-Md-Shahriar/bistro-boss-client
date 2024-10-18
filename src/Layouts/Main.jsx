import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="max-w-screen-xl mx-auto">
      {isLogin || <Navbar />}
      <div className="min-h-[calc(100vh-178px)]">
        <Outlet />
      </div>
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
