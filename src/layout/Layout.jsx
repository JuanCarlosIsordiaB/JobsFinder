import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Services from "../pages/Services";
import TopText from "../components/TopText";
import Filters from "../components/Filters";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Services />
      <div className="w-full mt-12 mb-16">
        <TopText />
        <div className="w-full md:flex-row flex-col items-start relative md:px-16">
          <Filters />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
