import React from "react";

const Services = () => {
  const servicesList = [
    {
      title: "Web Development",
      desc: "Full Stack developers have a great demand for work worldwide, start looking for your ideal position",
    },
    {
      title: "Blockchain Development",
      desc: "Blockchain Developers are needed for the future. Find your new tech job. We help you with that.",
    },
    {
      title: "AI Development",
      desc: "Companies today need AI developers, start looking for your next job and generate money.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-8 mt-16 md:px-0 px-5">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="font-bold text-xl md:text-3xl text-indigo-500">
          Our Services
        </h2>
        <p className="text-gray-500 text-sm">
          We provide the best services for our clients. Start finding your dream
          Job. It' so easy!
        </p>
        <div className="flex md:w-[65%]  mx-auto w-full items-center gap-8 md:flex-row flex-col mt-10">
          {servicesList.map((service, index) => (
            <div
              className="w-full bg-white hover:bg-indigo-50 transition-all duration-300 shadow-lg p-5 rounded-lg border border-gray-300 flex flex-col items-center gap-4"
              key={index}
            >
              <h3 className="text-indigo-500 font-semibold">
                {" "}
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-gray-700">{service.desc}</p>
              <a
                href="#"
                className="text-white bg-indigo-500 hover:bg-indigo-700 transition-all rounded-md px-2 text-md"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
