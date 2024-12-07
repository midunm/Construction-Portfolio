function Projects() {
  return (
    <div id="projects" className="flex flex-col bg-gray-800 text-white">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-100">
          Our Projects
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
          Meet our skillful team who are the Building Blocks of Success
        </p>
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          {/* <!-- Card 1 --> */}
          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src="https://dummyimage.com/256x256/000/fff"
                alt="Project 1"
                className="w-full h-64 object-cover"
              />
              <h4 className="text-center mt-2 text-gray-100 font-medium">
                Project 1: Innovative Design
              </h4>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src="https://dummyimage.com/256x256/111/fff"
                alt="Project 2"
                className="w-full h-64 object-cover"
              />
              <h4 className="text-center mt-2 text-gray-100 font-medium">
                Project 2: Creative Concept
              </h4>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src="https://dummyimage.com/256x256/222/fff"
                alt="Project 3"
                className="w-full h-64 object-cover"
              />
              <h4 className="text-center mt-2 text-gray-100 font-medium">
                Project 3: Modern Approach
              </h4>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src="https://dummyimage.com/256x256/333/fff"
                alt="Project 4"
                className="w-full h-64 object-cover"
              />
              <h4 className="text-center mt-2 text-gray-100 font-medium">
                Project 4: Elegant Style
              </h4>
            </div>
          </div>
          {/* <!-- Card 5 --> */}
          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src="https://dummyimage.com/256x256/444/fff"
                alt="Project 5"
                className="w-full h-64 object-cover"
              />
              <h4 className="text-center mt-2 text-gray-100 font-medium">
                Project 5: Futuristic Idea
              </h4>
            </div>
          </div>
          {/* <!-- Card 6 --> */}
          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src="https://dummyimage.com/256x256/555/fff"
                alt="Project 6"
                className="w-full h-64 object-cover"
              />
              <h4 className="text-center mt-2 text-gray-100 font-medium">
                Project 6: Bold Execution
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
