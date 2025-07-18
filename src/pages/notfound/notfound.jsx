import { Link } from "react-router-dom";

const notfound = () => {
  return (
    <>
      {/* Background Image */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <img
          src="assets/images/notfoundBackground.svg"
          className="min-h-screen w-full absolute top-0 left-0"
        />
        {/* Message */}
        <div className="relative z-20 text-black mt-64 px-132 py-20">
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-4xl font-bold">
            Oops, cette page <br /> n'existe pas !
          </h1>
          <Link
            to="/"
            className="block mt-6 text-md sm:text-md md:text-lg lg:text-xl px-6 py-2 text-black font-bold"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
};

export default notfound;
