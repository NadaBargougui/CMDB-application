import { Link } from "react-router-dom";

const Home = () => {
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

      {/* sidebar Section */}
      <div className="fixed left-0 p-6 w-72 bg-[#546fca]/60 rounded-b-2xl shadow-lg h-screen overflow-y-auto">
        <ul className="space-y-4 mt-12 text-xl text-white font-semibold w-full">
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Sidi Bouzid
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Béja
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Ben Arous
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Bizerte
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Gabès
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Gafsa
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Jendouba
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Kairouan
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Kasserine
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Kebili
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Kef
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Mahdia
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Manouba
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Medenine
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Monastir
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Nabeul
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Sfax
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Ariana
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Siliana
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Sousse
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Tataouine
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Tozeur
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Tunis
          </li>
          <li className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3">
            Zaghouan
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
