function About() {
  return (
    <section id="aboutus" className="py-24 bg-gray-800 text-white">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Us image"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="About Us image"
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-2xl font-medium title-font mb-4 text-gray-100">
                  About Us
                </h2>
                <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                  Every project we've undertaken has been a collaborative
                  effort, where every person involved has left their mark.
                  Together, we've not only constructed buildings but also built
                  enduring connections that define our success story.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3
                    id="num1"
                    className="text-gray-100 text-4xl font-bold font-manrope leading-normal"
                  >
                    33+
                  </h3>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Years of Experience
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4
                    id="num2"
                    className="text-gray-100 text-4xl font-bold font-manrope leading-normal"
                  >
                    125+
                  </h4>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Successful Projects
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4
                    id="num3"
                    className="text-gray-100 text-4xl font-bold font-manrope leading-normal"
                  >
                    52+
                  </h4>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Happy Clients
                  </h6>
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="sm:w-fit w-full px-3.5 py-2 bg-gray-700 hover:bg-gray-600 transition-all duration-500 ease-in-out rounded-lg shadow-lg flex justify-center items-center"
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Reach us
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
