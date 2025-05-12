import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
    <div><Toaster /></div>
    <div className="min-h-screen  w-full bg-black text-white flex justify-center items-center overflow-hidden">
      
      <Outlet />
    </div>
    </>
  );
};

export default Layout;
