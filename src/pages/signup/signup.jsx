import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail, setPassword } from "../features/user/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const { username, email, password } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup info:", { username, email, password });
    // we can now use this data for an API call
  };

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
      <div className="relative min-h-screen w-full pt-44 overflow-hidden">
        {/* Background Image */}
        <img
          src="assets/images/signupBackground.svg"
          className="absolute top-0 left-0"
        />

        {/* Fields */}
        <div className="w-full max-w-md rounded-4xl shadow-xl p-7 bg-[#546fca]/60 text-white relative z-10 mx-auto border border-black">
          <h2
            className="text-2xl font-bold pb-5 text-center"
            style={{
              textShadow:
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
            }}
          >
            S'inscrire
          </h2>
          <form onSubmit={handleSubmit}>
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
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
                placeholder="Nada Bargougui"
                value={username} //////////////////////////////////
                onChange={(e) => dispatch(setUsername(e.target.value))} //////////////////////////////////
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
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
                placeholder="exemple@mail.com"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
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
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
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

export default Signup;
