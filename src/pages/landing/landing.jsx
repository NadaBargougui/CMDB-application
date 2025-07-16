const Landing = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 bg-[#546fca]/80 rounded-b-2xl shadow-md ">
        <div className="px-6 sm:px-8 py-4 sm:py-5 flex items-center">
          <a
            href="/"
            className="font-bold text-white t-xl sm:text-2xl md:text-3xl"
          >
            TeleCMDB
          </a>
        </div>
      </nav>

      {/* Landing Section */}
      <div className="relative min-h-screen w-full pt-24 overflow-hidden">
        {/* Text between navbar and buttons */}
        <div className="absolute top-[30%] left-[8%] z-10">
          <h1 className="text-black t-5xl sm:text-5xl md:text-3xl font-bold drop-shadow-md">
            Bienvenue à la Base de Données <br /> de Gestion de Configuration de
            <br />
          </h1>
          <h1 className=" text-5xl font-bold drop-shadow-md bg-gradient-to-r from-orange-600 to-yellow-200 bg-clip-text text-transparent">
            Tunisie Telecom
          </h1>
        </div>
        {/* Background Image */}
        <img
          src="assets/images/landingBackgroung4.svg"
          className="absolute top-0 left-0"
        />
        {/* Welcome & Buttons */}
        <div className="absolute top-[65%] left-[20%] z-10 flex gap-16">
          <button
            type="button"
            className="w-60 text-white font-medium rounded-2xl text-2xl px-10 py-5 text-center bg-[#546fca]/80 hover:bg-[#546fca] transition-colors duration-300"
          >
            Se connecter
          </button>
          <button
            type="button"
            className="w-60 text-white font-medium rounded-2xl text-2xl px-10 py-5 text-center bg-[#f94f1a]/80 hover:bg-[#f94f1a] transition-colors duration-300"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
