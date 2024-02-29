import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[60px] bg-white shadow-sm absolute top-0 flex z-10">
      <div className="w-full md:px-[75px] px-[23px] flex items-center justify-between ">
        <div
          className="text-indigo-500 font-bold text-xl md:text-2xl cursor-pointer md:ml-5"
          onClick={() => navigate("/")}
        >
          <p>
            Find<span className="text-indigo-800">your</span>Dream
            <span className="text-indigo-800">Job</span>
          </p>
        </div>
        <div className="hidden md:flex items-center">
          <nav>
            <a
              href=""
              className="font-medium text-xl mx-3 text-slate-400 hover:text-indigo-500 transition-all"
            >
              Home
            </a>
            <a
              href=""
              className="font-medium text-xl mx-3 text-slate-400 hover:text-indigo-500 transition-all"
            >
              Listed Jobs
            </a>
            <a
              href=""
              className="font-medium text-xl mx-3 text-slate-400 hover:text-indigo-500 transition-all"
            >
              Newsletter
            </a>
            <a
              href=""
              className="font-medium text-xl mx-3 text-slate-400 hover:text-indigo-500 transition-all"
            >
              Contact
            </a>
            <a
              href=""
              className="font-medium text-xl mx-3 text-white bg-indigo-500 p-3 rounded-md hover:bg-indigo-900 transition-all"
            >
              LogIn
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
