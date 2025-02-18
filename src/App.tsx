import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="bg-[url('/bg.png')] min-h-screen bg-cover bg-center bg-no-repeat">
        <Navbar />
        <section className="container  flex h-screen">
          <div className="flex flex-col justify-center h-full  max-w-[665px]  w-full">
            <div className="text-center lg:text-start">
              <h1 className="text-[#1E293B] font-bold text-4xl leading-[50.5px] sm:text-[42px] sm:leading-[57px] lg:text-6xl lg:leading-[76px]">Lessons and insights </h1>
              <h1 className="text-[#EF4444] font-bold text-4xl leading-[50.5px] sm:text-[42px] sm:leading-[57px] lg:text-6xl lg:leading-[76px]">from 8 years</h1>
            </div>
            <div className="text-center lg:text-start py-5">
              <p className="text-[#1E293B] font-normal text-xs leading-[23px] lg:text-base lg:leading-[26px] xl:text-xl xl:leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[507px]">
                <input
                  type="search"
                  placeholder="Masukan Kata Sandi"
                  className="bg-white placeholder-[#9CA3AF] text-sm  w-full text-[#9CA3AF] lg:text-base leading-9 py-5 px-4 rounded-lg outline-none"
                />
                <button type="button" className="bg-[#EF4444] text-white font-semibold text-base leading-9 py-2.5 px-6 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg">
                  search
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="container mt-[120px]">
        <div className="text-center">
          <h1 className=" font-bold text-2xl md:text-4xl leading-[32.66px] md:leading-[49px] text-slate-800">Feature</h1>
          <p className="font-normal text-xs leading-[22px] md:text-2xl text-slate-800 md:leading-[39px] pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 pb-40 gap-5">
          <div className="flex flex-col justify-center items-center">
            <img src="/icons/membership.svg" alt="" className="w-[76px] h-[76px] lg:w-[79px] lg:h-[77px]" />
            <div className="text-slate-800 text-center">
              <h2 className="font-bold text-2xl  leading-[32.68px] ">Membership</h2>
              <p className="font-normal text-lg leading-[26px] ">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/icons/association.svg" alt="" className="w-[79px] h-[77px]" />
            <div className="text-slate-800 text-center">
              <h2 className="font-bold text-2xl  leading-[32.68px] ">Association</h2>
              <p className="font-normal text-lg leading-[26px] ">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:col-span-2 lg:col-auto">
            <img src="/icons/club.svg" alt="" className="w-[79px] h-[77px]" />
            <div className="text-slate-800 text-center">
              <h2 className="font-bold text-2xl  leading-[32.68px] ">Clubs and Groups</h2>
              <p className="font-normal text-lg leading-[26px] max-w-[316px] lg:max-w-none">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
