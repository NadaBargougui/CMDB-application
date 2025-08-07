import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail, setPassword } from "../../store/slices/userSlice";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Login = () => {
  //---------------------onSubmit to dispatch data to redux----------------------------------
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: data.email,
        password: data.password,
      });
      console.log("Login successful:", response.data);

      dispatch(setEmail(data.email));
      dispatch(setPassword(data.password));
      console.log("Login info:", data);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      // Show error message
    }
  };

  //--------------------Yup Schema---------------------------------------------------------
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("L'adresse email est requise"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  //---------------useForm with yupResolver-----------------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //-------------------------------------------------------------------------------------
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-10 bg-[#546fca]/80 rounded-b-2xl shadow-md ">
        <div className="px-4 sm:px-3 md:px-5 py-2 sm:py-2 md:py-3">
          <Link
            to="/"
            className="font-bold text-white text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
                style={{
                  textShadow:
                    "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
                }}
              >
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
                placeholder="exemple@mail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
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
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
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
                  <p>Mot de passe oublié ?</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
