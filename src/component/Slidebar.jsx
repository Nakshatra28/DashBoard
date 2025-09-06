import { useState } from "react";

const Slidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle (Hamburger) button - visible only on mobile/tablet */}
      <div className="lg:hidden p-3">
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-gray-200 rounded-lg shadow-md"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md transform 
        transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:w-64`}
      >
        <div className="bg-[#f8f7f7] pt-2 pl-2 pr-1 h-full flex flex-col justify-between">
          <div>
            {/* Close button (only visible on mobile/tablet) */}
            <div className="flex justify-end lg:hidden">
              <button
                onClick={() => setOpen(false)}
                className="p-2 m-2 rounded-lg bg-gray-200 shadow"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Profile */}
            <div className="flex justify-start items-center gap-3 pb-3 border-b border-slate-300">
              <div>
                <img
                  className="size-8 rounded-lg"
                  src="./src/assets/user.jpg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-sm font-bold text-black">Tom IS Loading</h1>
                <p className="text-xs font-semibold text-black/60">
                  tom@hover.dev
                </p>
              </div>
              <div className="ml-auto flex gap-1">
                <button>
                  <i className="fa-solid fa-angle-up fa-2xs"></i>
                </button>
                <button>
                  <i className="fa-solid fa-angle-down fa-2xs"></i>
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center mt-4 mr-1 bg-[#f3f3f3] h-10 rounded-lg shadow px-2">
              <i className="fa-solid fa-magnifying-glass fa-xs mr-2"></i>
              <input
                className="outline-none flex-1 bg-transparent text-sm"
                type="search"
                placeholder="Search"
              />
              <button className="font-bold text-xs bg-white size-5 rounded-md">
                K
              </button>
            </div>

            {/* Menu */}
            <div className="flex-col mt-10 space-y-3 h-[60vh] overflow-y-auto">
              <div className="bg-white p-2 mr-1 shadow rounded-lg border transition active:scale-95">
                <button>
                  <i className="fa-regular fa-house fa-xs mr-2 text-gray-500"></i>
                  Dashboard
                </button>
              </div>
              <div className="bg-white p-2 mr-1 shadow rounded-lg transition active:scale-95">
                <button>
                  <i className="fa-solid fa-users fa-xs mr-2 text-gray-500"></i>
                  Team
                </button>
              </div>
              <div className="bg-white p-2 mr-1 shadow rounded-lg transition active:scale-95">
                <button>
                  <i className="fa-solid fa-paperclip fa-xs mr-2 text-gray-500"></i>
                  Invoices
                </button>
              </div>
              <div className="bg-white p-2 mr-1 shadow rounded-lg transition active:scale-95">
                <button>
                  <i className="fa-solid fa-link fa-xs mr-2 text-gray-500"></i>
                  Integration
                </button>
              </div>
              <div className="bg-white p-2 mr-1 shadow rounded-lg transition active:scale-95">
                <button>
                  <i className="fa-solid fa-dollar-sign fa-xs mr-2 text-gray-500"></i>
                  Finance
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end w-full px-2 py-3">
            <div>
              <p className="text-sm font-bold">Enterprise</p>
              <p className="text-xs text-gray-400">Pay as you go</p>
            </div>
            <div>
              <button className="bg-[#d3d3d3] p-1.5 text-xs mr-2 rounded-lg font-bold shadow">
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slidebar;
