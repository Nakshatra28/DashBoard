import React from "react";
import Linegraph from "../component/Linegraph";
import RadarChart from "../component/Radarchart";
import Recent from "./Recent";

const Maincontent = () => {
  return (
    <>
      <div className="bg-[#F9FAFB] ml-0 lg:ml-3 w-full min-h-screen shadow text-xs">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between border-b pb-2 rounded-b-lg bg-white border-b-gray-400 px-3">
          <div className="flex mt-2 justify-start items-start md:items-center gap-2">
            <div>
              <p className="text-sm ml-1 font-bold flex items-center gap-1">
                <i className="fa-solid fa-rocket"></i> Good Morning, Tom!
              </p>
              <p className="text-sm text-slate-400 ml-1">
                Tuesday, Aug 21th 2025
              </p>
            </div>
          </div>
          <div className="w-max mt-2 md:mt-0 mr-0 md:mr-4 rounded-lg flex items-center">
            <button className="bg-[#eaeaea] p-1 shadow shadow-black rounded-lg">
              <p className="text-xs font-semibold flex items-center gap-1">
                <i className="fa-solid fa-calendar"></i> prev 6 Months
              </p>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-2 p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="hover:scale-105 p-2 shadow-black rounded-lg shadow bg-white border-slate-500 transition">
            <div className="flex justify-between">
              <div>
                <p className="text-xs">Gross Revenue</p>
                <p className="font-bold text-2xl pb-3">$120,054.24</p>
              </div>
              <p className="text-xs flex justify-end items-center bg-green-300/30 text-green-600 font-bold w-max h-5 px-2 rounded-md">
                <i
                  className="fa-solid fa-arrow-trend-up fa-xs mr-1"
                  style={{ color: "#00ff1e" }}
                ></i>
                2.75
              </p>
            </div>
            <p className="text-xs">from Jan 1th - Aug 21th</p>
          </div>

          <div className="hover:scale-105 p-2 shadow-black rounded-lg shadow bg-white border-slate-500 transition">
            <div className="flex justify-between">
              <div>
                <p className="text-xs">Gross Revenue</p>
                <p className="font-bold text-2xl pb-3">$120,054.24</p>
              </div>
              <p className="text-xs flex justify-end items-center bg-red-300/30 text-red-600 font-bold w-max h-5 px-2 rounded-md">
                <i
                  className="fa-solid fa-arrow-trend-down fa-xs mr-1"
                  style={{ color: "#ff0000" }}
                ></i>
                2.75
              </p>
            </div>
            <p className="text-xs">from Jan 1th - Aug 21th</p>
          </div>

          <div className="hover:scale-105 p-2 shadow-black rounded-lg shadow bg-white border-slate-500 transition">
            <div className="flex justify-between">
              <div>
                <p className="text-xs">Gross Revenue</p>
                <p className="font-bold text-2xl pb-3">$120,054.24</p>
              </div>
              <p className="text-xs flex justify-end items-center bg-green-300/30 text-green-600 font-bold w-max h-5 px-2 rounded-md">
                <i
                  className="fa-solid fa-arrow-trend-up fa-xs mr-1"
                  style={{ color: "#00ff1e" }}
                ></i>
                2.75
              </p>
            </div>
            <p className="text-xs">from Jan 1th - Aug 21th</p>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-3 px-3">
          <div className="text-xs w-full lg:w-2/3 hover:scale-95 shadow-black rounded-lg shadow bg-white">
            <p className="p-2">
              <i className="fa-regular fa-user mr-2"></i> Activity
            </p>
            <Linegraph />
          </div>

          <div className="text-xs w-full lg:w-1/3 hover:scale-95 shadow-black rounded-lg shadow bg-white">
            <p className="pl-2 pt-2 text-xs">
              <i className="fa-regular fa-eye"></i> Usage
            </p>
            <RadarChart />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="shadow-black rounded-lg shadow p-2 m-3 bg-white">
          <p>$ Recent Transaction</p>
          <Recent />
        </div>
      </div>
    </>
  );
};

export default Maincontent;
