import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {
  setUsername,
  setEmail,
  setPassword,
} from "../../store/slices/userSlice";

const Signup = () => {
  //------------------onSubmit-----------------------------------------------------------
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setUsername(data.name));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    console.log("Form submitted:", data);
    // we can now use this data for an API call
  };

  //--------------------Yup Schema---------------------------------------------------------
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Must be at least 8 characters").required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match") // Removed the null value
      .required("Confirm your password"),
  });

  //--------------------useForm with yupResolver----------------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //-----------------------------------------------------------------------------
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("name")}
              />

              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name.message}</p>
              )}
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
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
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
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
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
                Confirmer Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-100 border border-black text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
                placeholder="*********"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm">
                  {errors.confirmPassword.message}
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
