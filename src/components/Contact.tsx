import { sendEmail } from "../helpers/mail";
function Contact() {
  return (
    <section
      id="contact"
      className="text-gray-300 body-font bg-gray-800 relative"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            // style="filter: grayscale(1) contrast(1.2) opacity(0.4)" */}
          {/* ></iframe> */}
          <div className="bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-400">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-stone-400 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-400">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-2xl font-medium title-font mb-4 text-gray-300">
            Contact us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">Some address</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-stone-400 focus:ring-2 focus:ring-stone-500 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-stone-400 focus:ring-2 focus:ring-stone-500 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-stone-400 focus:ring-2 focus:ring-stone-500 h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            className="px-3.5 py-2 bg-stone-500 hover:bg-stone-400 transition-all duration-500 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex text-gray-800"
            onClick={sendEmail}
          >
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Don't worry, we don't save or share any of your information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
