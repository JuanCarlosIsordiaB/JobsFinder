import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const footerLinks = [
    { title: "About", path: "/" },
    { title: "Terms and Conditions", path: "/" },
    { title: "Newsletter", path: "/" },
    { title: "Services", path: "/" },
    { title: "Contact", path: "/" },
  ];
  return (
    <div className="w-full md:h-[60px] h-auto py-5 md:py-0 bg-white shadow-sm flex">
      <div className="flex md:flex-row flex-col md:h-[60px] h-full w-full md:gap-6 gap-0 md:px-[65px] px-[23px] md:items-center justify-between items-start">
        <div
          className="text-indigo-500 font-bold text-md cursor-pointer md:ml-m mb-5 md:mb-0 "
          onClick={() => navigate("/")}
        >
          <p>
            Find<span className="text-indigo-800">your</span>Dream
            <span className="text-indigo-800">Job</span>
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-4">
          {footerLinks.map((link) => (
            <a
              href={link.path}
              key={link.title}
              className="font-medium text-m text-slate-600 transition-all duration-200 hover:text-indigo-500"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
