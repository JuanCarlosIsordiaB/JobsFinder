import React from 'react'

 const Hero = () => {
  return (
    <div className="w-full h-[50vh] flex items-center md:justify-between justify-center md:px-24 px-5 relative bg-indigo-400">
      <div className="flex flex-col gap-3 z-50">
        <h1 className=" text-2xl md:text-4xl font-semibold text-indigo-100">
          Welcome to FindyourDreamJob
        </h1>
        <p className="text-gray-200 md:w-3/5 text-md md:text-xl leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum
          ad, reprehenderit quaerat fuga incidunt qui rem mollitia odio deserunt
          inventore possimus illo perferendis, quis, saepe maiores neque eveniet
          quod.
        </p>
        <button className="text-white rounded-md bg-indigo-600 hover:bg-indigo-700 transition-all py-3 w-40">
          Find Jobs Now
        </button>
      </div>
    </div>
  )
}

export default Hero
