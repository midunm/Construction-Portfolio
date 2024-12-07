function Hero() {
  return (
    <div id="hero" className="bg-gray-800 text-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="max-w-3xl text-center mx-auto mt-20">
          <h1 className="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100">
            Now it's easier than ever to build
          </h1>
        </div>
        <div className="max-w-3xl text-center mx-auto mt-20">
          <p className="text-lg text-gray-400">
            Some text to be displayed related to the above heading
          </p>
        </div>
        <div className="text-center mt-20">
          <a
            className="duration-500 inline-flex justify-center items-center gap-x-3 text-center bg-gray-700 hover:bg-gray-600 shadow-lg border border-transparent text-white text-sm font-medium rounded-full py-3 px-6 transition-all"
            href="#contact"
          >
            Contact US
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
