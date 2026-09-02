import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 max-w-7xl relative mx-auto -mt-32 mb-0 px-6 sm:px-8 lg:px-16 xl:px-32 justify-between">
      <div className="bg-white border border-gray-200 relative w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[linear-gradient(130deg,#6581fe_0%,#1740fa_20%,#e6e7f0_20%,rgba(255,255,255,0)_90%)]" />
        <div className="mb-4">
          <h3 className="text-sm sm:text-base text-gray-500 uppercase tracking-widest font-semibold underline">EXPERIENCE</h3>
        </div>
        <div>
          <h1 className="tabular-nums text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-2 font-black">
            <CountUp start={0} end={100} duration={2} enableScrollSpy scrollSpyOnce />k
            <span className="text-2xl sm:text-3xl text-gray-300 align-top" style={{ fontFamily: 'Inter, sans-serif' }}>+</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-bold">Hours of consultation</p>
        </div>
        <p className="text-sm sm:text-base mt-6 text-gray-700 leading-relaxed text-left">
          Using our extensive experience in IT, we provide in-depth consultation
          on every IT Tech Solution in Nigeria and Africa.
        </p>
      </div>

      <div className="bg-white border border-gray-200 relative w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[linear-gradient(130deg,#f1d5a7_0%,#dd9828_20%,#e6e7f0_20%,rgba(255,255,255,0)_90%)]" />
        <div className="mb-4">
          <h3 className="text-sm sm:text-base text-gray-500 uppercase tracking-widest font-semibold underline">EXPERTISE</h3>
        </div>
        <div>
          <h1 className="tabular-nums text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-2 font-black">
            <CountUp start={0} end={25} duration={2} enableScrollSpy scrollSpyOnce />
            <span className="text-2xl sm:text-3xl text-gray-300 align-top" style={{ fontFamily: 'Inter, sans-serif' }}>+</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-bold">Clients satisfied</p>
        </div>
        <p className="text-sm sm:text-base mt-6 text-gray-700 leading-relaxed text-left">
          We’ve put smiles on over 25 clients’ faces through exceptional tech
          services. Our clients' satisfaction is our pride.
        </p>
      </div>

      <div className="bg-white border border-gray-200 relative w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[linear-gradient(130deg,#ecb22e_0%,#2212a0_20%,#e6e7f0_20%,rgba(255,255,255,0)_90%)]" />
        <div className="mb-4">
          <h3 className="text-sm sm:text-base text-gray-500 uppercase tracking-widest font-semibold underline">TRUST</h3>
        </div>
        <div>
          <h1 className="tabular-nums text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-2 font-black">
            <CountUp start={0} end={30} duration={2} enableScrollSpy scrollSpyOnce />
            <span className="text-2xl sm:text-3xl text-gray-300 align-top" style={{ fontFamily: 'Inter, sans-serif' }}>+</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-bold">Solutions delivered</p>
        </div>
        <p className="text-sm sm:text-base mt-6 text-gray-700 leading-relaxed text-left">
          We’ve brought over 30 game-changing tech solutions to life, turning
          business challenges into success stories.
        </p>
      </div>
    </div>
  );
}

export default Stats;
