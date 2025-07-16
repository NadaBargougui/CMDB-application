import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 bg-[#546fca]/80 rounded-b-2xl shadow-md ">
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
          <a
            href="/"
            className="font-bold text-white t-xl sm:text-xl md:text-2xl lg:top-4xl xl:top-5xl"
          >
            TeleCMDB
          </a>
        </div>
      </nav>

      {/* Landing Section */}
      <div className="relative min-h-screen w-full pt-24 overflow-hidden">
        {/* Text between navbar and buttons */}
        <div className="absolute top-[20%] sm:top-[25%] md:top-[30%] lg:top-[35%] xl:top-[35%] left-[10%] z-10">
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-md">
            Bienvenue à la Base de Données <br />
            de Gestion de Configuration de <br />
          </h1>
          <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-md bg-gradient-to-r from-orange-600 to-yellow-200 bg-clip-text text-transparent">
            Tunisie Telecom
          </h1>
        </div>
        {/* Background Image */}
        <img
          src="assets/images/landingBackgroung.svg"
          className="absolute top-0 left-0"
        />
        {/* Welcome & Buttons */}
        <div className="absolute top-[45%] sm:top-[55%] md:top-[60%] lg:top-[65%] xl:top-[70%] left-1/2 transform -translate-x-1/2 z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 md:gap-16">
          <Link to="/login">
            <button
              type="button"
              className="w-40 sm:w-48 md:w-52 lg:w-60 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 text-white font-medium rounded-2xl bg-[#546fca]/80 hover:bg-[#546fca] transition-colors duration-300"
            >
              Se connecter
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              className="w-40 sm:w-48 md:w-52 lg:w-60 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 text-white font-medium rounded-2xl text-center bg-[#f94f1a]/80 hover:bg-[#f94f1a] transition-colors duration-300"
            >
              S'inscrire
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
