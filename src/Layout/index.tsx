import { Outlet } from "react-router-dom";

// import Header from '@/components/Header'
// import Sidebar from '@/components/Sidebar'
const Layout = () => {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex h-full">
        {/* <Sidebar /> */}
        {/* Main Content */}
        <div className="w-full">
          {/* <Header /> */}
          <main className=" p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
