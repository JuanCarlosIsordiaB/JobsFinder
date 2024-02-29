import React, { useState } from "react";
import Services from "../pages/Services";
import TopText from "../components/TopText";
import Filters from "../components/Filters";
import { jobs } from "../data/jobs";
import Hero from "../components/Hero";

const Home = () => {
  const [savedJobs, setSavedJobs] = useState(jobs);

  return (
    <div className="w-full">
      <Hero />
      <Services />
      <div className="w-full mt-12 mb-16">
        <TopText />
        <div className="w-full md:flex-row flex-col items-start relative md:px-16">
          <Filters />
        </div>
      </div>
    </div>
  );
};
export default Home;
