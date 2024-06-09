import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="main-container container mx-auto d-flex justify-content-center align-items-center">
        <div className="mb-5 col-10">
          <h1 className="d-flex justify-content-center mb-3">A Bus App</h1>
          <div className="bg-white shadow rounded p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
