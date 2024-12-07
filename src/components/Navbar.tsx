function Navbar() {
  return (
    <header
      id="navbar"
      className="text-gray-600 w-full z-50 body-font fixed transition-all"
    >
      <div className="container  mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
          <img
            id="logo"
            src="JB_wb.ico"
            alt="Logo"
            className="size-24 "
            // viewbox="0 0 24 24"
          />
          <span className="ml-3 text-xl">Jayam Builders</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#hero" className="text-gray-100 mr-5 hover:text-gray-50">
            Home
          </a>
          <a href="#aboutus" className="text-gray-100 mr-5 hover:text-gray-50">
            About us
          </a>
          <a href="#projects" className="text-gray-100 mr-5 hover:text-gray-50">
            Projects
          </a>
          <a href="#contact" className="text-gray-100 mr-5 hover:text-gray-50">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
