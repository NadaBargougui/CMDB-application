import { Link } from "react-router-dom";

const signup = () => {
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

      {/* Sign up Section */}
      <div className="relative min-h-screen w-full pt-24 overflow-hidden">
        {/* Background Image */}
        <img
          src="assets/images/signupBackground.svg"
          className="absolute top-0 left-0"
          alt="Signup Background"
        />

        {/* Fields */}
        <div className="w-112 backdrop-blur-lg rounded-4xl shadow-lg p-5 bg-[#f94f1a]/60 text-white relative z-10 mx-auto mt-10 border border-black">
          <h2
            className="text-2xl font-bold pb-5 text-center"
            style={{
              textShadow:
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
            }}
          >
            {" "}
            S'inscrire
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium"
                style={{
                  textShadow:
                    "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
                }}
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="Nada Bargougui"
                required
              />
            </div>

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
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
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
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="*********"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="text-black border border-black bg-[#ffc310] hover:bg-[#ffc310]/80 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto cursor-pointer"
              >
                Confirmer
              </button>
              <div className="flex items-center text-sm">
                <p>Vous avez un compte ?</p>
                <Link to="/login" className=" cursor-pointer ml-1">
                  Se connecter
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
