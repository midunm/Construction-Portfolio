function Partners() {
  return (
    <section id="partners" className="py-24 bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white">
            Our Partners
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            We work with the best Partners
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* <!-- Logo 1 --> */}
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-700 shadow-sm h-24 rounded-2xl bg-gray-800"
          >
            <svg
              className="h-9"
              viewBox="0 0 120 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8562_69352)">
                <path
                  d="M2.50597 14.6871H14.0468V17.9219L9.6962 18.261C2.68833 18.7827 0.5 20.6349 0.5 25.8523V26.8958C0.5 30.7044 3.15726 33.0001 7.2734 33.0001C10.5038 33.0001 12.3795 32.2436 14.6721 29.8958H15.0628V32.374H19.7V9.6001H2.50597V14.6871ZM14.0468 25.6697C12.614 27.1044 10.4778 28.0436 8.70626 28.0436C6.8045 28.0436 5.99688 27.3392 6.04898 25.7479C6.10108 23.5566 6.90866 23.0349 10.582 22.6958L14.0728 22.3566V25.6697H14.0468Z"
                  fill="#F18618"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.6086 9.78174H38.5644V14.3891H43.4613V32.3788H37.7526V14.855H29.6086V32.3788H23.8999V3H29.6086V9.78174Z"
                  fill="#1F49D2"
                />
                {/* <!-- Additional SVG paths --> */}
              </g>
              <defs>
                <clipPath id="clip0_8562_69352">
                  <rect
                    width="119"
                    height="36"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-700 shadow-sm h-24 rounded-2xl bg-gray-800"
          >
            <svg
              className="h-9"
              viewBox="0 0 142 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <!-- Insert SVG content for another logo --> */}
            </svg>
          </a>
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-700 shadow-sm h-24 rounded-2xl bg-gray-800"
          >
            {/* <!-- Add another logo here --> */}
          </a>
          <a
            href="#"
            className="flex justify-center items-center border border-solid border-gray-700 shadow-sm h-24 rounded-2xl bg-gray-800"
          >
            {/* <!-- Add another logo here --> */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Partners;
