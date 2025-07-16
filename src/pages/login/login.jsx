import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 bg-[#546fca]/80 rounded-b-2xl shadow-md ">
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
          <Link
            to="/"
            className="font-bold text-white t-xl sm:text-xl md:text-2xl lg:top-4xl xl:top-5xl"
          >
            TeleCMDB
          </Link>
        </div>
      </nav>

      {/* Login Section */}
      <div className="relative min-h-screen w-full pt-24 overflow-hidden">
        {/* Background Image */}
        <img
          src="assets/images/loginBackground.svg"
          className="absolute top-0 left-0"
        />

        {/* Fields */}
      </div>
    </>
  );
};

export default login;
