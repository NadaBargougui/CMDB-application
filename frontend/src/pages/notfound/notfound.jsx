import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-10 bg-[#546fca]/80 rounded-b-2xl shadow-md ">
        <div className="px-4 sm:px-8 py-3 sm:py-4">
          <Link
            to="/"
            className="font-bold text-white text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl"
          >
            TeleCMDB
          </Link>
        </div>
      </nav>

      {/* Sign up Section */}
      <div className="relative min-h-screen w-full pt-36 overflow-hidden">
        {/* Background Image */}
        <img
          src="assets/images/notfoundBackground.svg"
          className="absolute top-0 left-0"
        />
      </div>
    </>
  );
};

export default Notfound;
