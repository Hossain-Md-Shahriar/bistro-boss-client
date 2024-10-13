import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-178px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
