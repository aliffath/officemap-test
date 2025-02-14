import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="bg-[url('/bg.png')] min-h-screen bg-cover bg-center bg-no-repeat">
        <Navbar />

        <section className="container mx-auto px-4 w-full flex h-screen">
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
    </>
  );
}

export default App;
