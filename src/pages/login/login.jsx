import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-10 bg-[#546fca]/80 rounded-b-2xl shadow-md ">
        <div className="px-4 sm:px-8 py-3 sm:py-4">
          <Link
            to="/"
            className="font-bold text-white t-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl"
          >
            TeleCMDB
          </Link>
        </div>
      </nav>

      {/* Login Section */}
      <div className="relative min-h-screen w-full pt-32 overflow-hidden">
        {/* Background Image */}
        <img
          src="assets/images/loginBackground.svg"
          className="absolute top-0 left-0"
        />

        {/* Fields */}
        <div className="w-full max-w-md rounded-4xl shadow-xl p-5 bg-[#546fca]/60 text-white relative z-10 mx-auto mt-10 border border-black">
          <h2
            className="text-2xl font-bold pb-7 text-center"
            style={{
              textShadow:
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
            }}
          >
            Se connecter
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
                style={{
                  textShadow:
                    "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
                }}
              >
                Adresse mail
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
                placeholder="exemple@mail.com"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
                style={{
                  textShadow:
                    "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
                }}
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
                placeholder="*********"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="w-[120px] sm:w-[120px] md:w-[130px] lg:w-[140px] text-black border border-black bg-[#ffc310] hover:bg-[#ffc310]/80 font-medium rounded-lg text-sm py-2.5 px-5 sm:py-3 sm:px-6 cursor-pointer"
              >
                Confirmer
              </button>
              <div className="items-center text-sm flex flex-col">
                <p>
                  Vous n'avez pas un compte ?
                  <Link to="/signup" className="cursor-pointer ml-1">
                    S'inscrire
                  </Link>
                </p>
                <Link to="/signup" className="cursor-pointer ml-1">
                  <p>Mot de passe oublier ?</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
