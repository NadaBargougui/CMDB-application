import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleRegion } from "../../store/slices/regionSlice";

const Home = () => {
  //-------------------------------------------------------------------
  const dispatch = useDispatch();
  const openRegion = useSelector((state) => state.region.openRegion);

  const handleToggle = (region) => {
    console.log("Clicked region:", region);
    dispatch(toggleRegion(region));
  };
  //-------------------------------------------------------------------
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-30 bg-[#546fca]/80 rounded-b-2xl shadow-md ">
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
      <div
        className="fixed left-0 p-6 w-72 z-20 bg-[#546fca]/60 h-screen overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <ul className="space-y-4 mt-12 text-xl text-white font-semibold w-full">
          <li>
            <div
              onClick={() => handleToggle("sidi-bouzid")}
              className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3"
            >
              Sidi Bouzid
            </div>
            {openRegion === "sidi-bouzid" && (
              <ul className="pl-6 mt-2 space-y-1 text-base text-white/90">
                <li className="hover:bg-white/40 px-3 py-1 rounded">
                  Bir El Hfay
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Jelma
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Mezzouna
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Meknassy
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Menzel Bouzaiene
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Ouled Haffouz
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Regueb
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Sabela
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Sidi Ali Ben Aoun
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Sidi Bouzid Est
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Sidi Bouzid Ouest
                </li>
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
                  Souk Jedid
                </li>
              </ul>
            )}
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
      {/* videos */}
      <div className="fixed right-0 flex -top-5">
        {/* First Video */}
        <video
          className="w-[700px] overflow-hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="assets/videos/homeBackground1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Second Video */}
        <video
          className="w-[700px] z-10 overflow-hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="assets/videos/homeBackground2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Body */}
      <div className="fixed left-72 p-320 mt-20 top-51 w-[360px] z-20 bg-[#d8dff5] overflow-y-auto"></div>
    </>
  );
};

export default Home;
