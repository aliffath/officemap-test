import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuNavbar: string[] = ["Home", "Feature", "Service", "Product", "About Us"];
  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between lg:justify-end gap-10 items-center p-4">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <img src="/icons/List.svg" alt="Menu" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </button>

          <ul className="hidden lg:flex gap-10 text-gray-700">
            {menuNavbar.map((item) => (
              <li key={item} className="cursor-pointer text-[#1E293B] font-semibold text-sm">
                {item}
              </li>
            ))}
            <li className="cursor-pointer text-[#EF4444] font-semibold text-sm">Login</li>
          </ul>

          <button className="bg-[#EF4444] text-white px-5 py-[10px] rounded-[5px] font-bold text-sm">Sign Up</button>
        </div>

        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsOpen(false)}>
          <div className={`bg-white w-[250px] h-full p-6 shadow-md transform transition-all duration-500 ease-in-out will-change-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button className="mb-6 hover:rotate-90 transition-transform duration-300" onClick={() => setIsOpen(false)}>
              <img src="/icons/Close.svg" alt="Close" className="w-[15px] h-[21px]" />
            </button>

            <ul className="space-y-10">
              {menuNavbar.map((item) => (
                <li key={item} className="text-[#1E293B] font-bold text-sm cursor-pointer">
                  {item}
                </li>
              ))}
              <li className="cursor-pointer text-[#EF4444] font-bold text-sm">Login</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
