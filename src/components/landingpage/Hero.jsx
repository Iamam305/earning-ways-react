import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full bg-white">
      <div>
        <div className="container px-8 md:px-12 max-w-7xl mx-auto lg:px-7 xl:px-0">
          <div className="md:flex md:gap-12 pt-40 lg:py-56">
            <div className="md:w-6/12">
              <h1 className="text-gray-900 font-bold text-4xl xl:text-5xl">
                Learn to earn money online with{" "}
                <span className="text-cyan-500">Earning Ways</span>
              </h1>
              <p className="mt-8 text-gray-700">
                Earn money online while working from home at your comfort. get
                to know top in demand skills and how and where to learn them.
                Best freelance tips and guide ALL AT ONE PLACE
              </p>
              <div className="md:-mr-32">
                <button
                  type="button"
                  title="Start buying"
                  className="ml-auto mt-8 py-3 px-4 rounded-full text-center transition bg-gradient-to-b from-sky-400 to-cyan-300 md:px-8"
                >
                  <span className="hidden w-max text-white drop-shadow-md font-semibold md:block">
                    Get Started
                  </span>
                
                </button>
              </div>
            </div>
            <div className="mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12">
              <img
                src="https://i.ibb.co/bsGCtX1/undraw-Online-media-re-r9qv.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
