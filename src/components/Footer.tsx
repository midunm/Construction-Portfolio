import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start "
            ></a>
            <p className="py-8 text-sm text-gray-400 lg:max-w-xs text-center lg:text-left ">
              Have any query? Feel free to ask us
            </p>
            <a
              href="#contact"
              className="py-2.5 px-5 h-9 block w-fit bg-stone-700 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-stone-600 lg:mx-0"
            >
              Contact us
            </a>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-medium mb-7">
              Jayam Builders
            </h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="#hero" className="text-gray-400 hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#aboutus"
                  className="text-gray-400 hover:text-gray-300"
                >
                  About
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-gray-300"
                >
                  Projects
                </a>
              </li>
              <li className="mb-6">
                <a href="#team" className="text-gray-400 hover:text-gray-300">
                  Team
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#partners"
                  className="text-gray-400 hover:text-gray-300"
                >
                  Partners
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-gray-300"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
        </div>
        {/* <!--Grid--> */}
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-400">
              ©<a href="https://pagedone.io/">Jayam Builders</a> 2024, All
              rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-stone-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g id="Social Media">
                    <path id="Vector" d="..." fill="white" />
                  </g>
                </svg>
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-stone-600"
              >
                <svg
                  className="w-[1.25rem] h-[1.125rem] text-white"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..." fill="currentColor" />
                </svg>
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-stone-600"
              >
                <svg
                  className="w-[1rem] h-[1rem] text-white"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..." fill="currentColor" />
                </svg>
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-stone-600"
              >
                <svg
                  className="w-[1.25rem] h-[0.875rem] text-white"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..." fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
