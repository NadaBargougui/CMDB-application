import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleRegion } from "../../store/slices/regionSlice";
import { useNavigate } from "react-router-dom";
import {
  createDashboard,
  deleteDashboard,
} from "../../store/slices/dashboardSlice";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openRegion = useSelector((state) => state.region.openRegion);
  const dashboards = useSelector((state) => state.dashboard.dashboards);

  //-------------------------------------------------------------------
  const [showModal, setShowModal] = useState(false);
  const [searchRegion, setSearchRegion] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [dashboardName, setDashboardName] = useState("");
  const [filteredDashboards, setFilteredDashboards] = useState(dashboards);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState("");

  //-------------------------------------------------------------------
  const dashboardsToShow = dashboards.filter((db) => {
    const matchesRegion = selectedRegionFilter
      ? db.region === selectedRegionFilter
      : true;
    const matchesSearch =
      searchRegion.trim() !== ""
        ? db.name.toLowerCase().includes(searchRegion.toLowerCase())
        : true;
    return matchesRegion && matchesSearch;
  });

  //-------------------------------------------------------------------
  const allRegions = [
    "Sidi Bouzid",
    "Bir El Hfay",
    "Jelma",
    "Mezzouna",
    "Meknassy",
    "Menzel Bouzaiene",
    "Ouled Haffouz",
    "Regueb",
    "Sabela",
    "Sidi Ali Ben Aoun",
    "Sidi Bouzid Est",
    "Sidi Bouzid Ouest",
    "Souk Jedid",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Ariana",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  const filteredRegions = allRegions.filter((region) =>
    region.toLowerCase().includes(searchRegion.toLowerCase())
  );

  //------------------------------------------------------------------------
  const handleEditDashboard = (dashboard) => {
    navigate(
      `/dashboard/${encodeURIComponent(dashboard.region)}/${encodeURIComponent(
        dashboard.name
      )}`
    );
  };
  //---------------
  const handleDeleteDashboard = (dashboard) => {
    dispatch(deleteDashboard(dashboard));
  };
  //---------------
  const handleToggle = (region) => {
    dispatch(toggleRegion(region));
  };
  //---------------
  const handleSearch = () => {
    const filtered = dashboards.filter((d) =>
      d.name.toLowerCase().includes(searchRegion.toLowerCase())
    );
    setFilteredDashboards(filtered);
  };
  //---------------
  const handleCreateDashboard = () => {
    if (!selectedRegion || !dashboardName) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    //------------------------------------------------------------------------
    dispatch(createDashboard({ region: selectedRegion, name: dashboardName }));
    //------------------------------------------------------------------------
    setShowModal(false);
    setSearchRegion("");
    setSelectedRegion("");
    setDashboardName("");
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
              onClick={() => {
                handleToggle("sidi-bouzid");
                setSelectedRegionFilter("Sidi Bouzid");
                setSearchRegion("");
              }}
              className="hover:bg-white/60 hover:text-[#546fca] cursor-pointer w-full border border-white rounded-md px-4 py-3"
            >
              Sidi Bouzid
            </div>
            {openRegion === "sidi-bouzid" && (
              <ul className="pl-6 mt-2 space-y-1 text-base text-white/90">
                <li className="hover:bg-white/40 px-3 py-1 rounded cursor-pointer">
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
      {showModal && (
        <div className="fixed inset-0 flex items-center left-290 top-58 z-50">
          <div className="bg-white/80 rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#546fca]">
              Créer un tableau de bord
            </h2>

            {/* Region Search */}
            <input
              type="text"
              placeholder="Rechercher une région..."
              className="w-full p-2 border rounded mb-3"
              value={searchRegion}
              onChange={(e) => setSearchRegion(e.target.value)}
            />

            <ul className="max-h-40 overflow-y-auto border rounded mb-3">
              {filteredRegions.map((region, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedRegion(region)}
                  className={`p-2 cursor-pointer hover:bg-blue-100 ${
                    region === selectedRegion ? "bg-blue-200 font-semibold" : ""
                  }`}
                >
                  {region}
                </li>
              ))}
            </ul>

            {/* Dashboard Name */}
            <input
              type="text"
              placeholder="Nom du tableau de bord"
              className="w-full p-2 border rounded mb-4 bg-[#f8501b]/40"
              value={dashboardName}
              onChange={(e) => setDashboardName(e.target.value)}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={handleCreateDashboard}
                className="px-4 py-2 bg-[#fbc245] text-white rounded hover:bg-[#fbc245]/80"
              >
                Créer
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        title="Créer un tableau de bord"
        onClick={() => setShowModal(true)}
        className="cursor-pointer fixed bottom-6 right-6 bg-[#546fca] text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#546fca]/80 z-50"
      >
        +
      </button>
      {/* Dashboards List */}
      <div
        className="fixed left-72 top-86 right-32 p-6 z-40 h-[70vh] overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredDashboards.length > 0 ? (
          dashboardsToShow.map((db, i) => (
            <div
              key={i}
              className="flex items-center justify-between mb-4 bg-[#546fca]/40 hover:bg-[#f4f6fe]/40 text-black font-bold p-4 rounded-xl shadow-md border border-[#546fca]"
            >
              {/* Dashboard title */}
              <div>
                {db.name} - {db.region}
              </div>

              {/* Buttons to edit & delete */}
              <div className="flex gap-2">
                <button
                  className="cursor-pointer bg-[#546fca] hover:bg-[#5e71ac] text-white px-3 py-1 rounded"
                  onClick={() => handleEditDashboard(db)}
                  title="Entrer dans le tableau de bord"
                >
                  Éditer
                </button>
                <button
                  className="cursor-pointer bg-[#f8501b]/80 hover:bg-[#f8441b] text-white px-3 py-1 rounded"
                  onClick={() => {
                    const confirmDelete = window.confirm(
                      `Voulez-vous vraiment supprimer le tableau de bord "${db.name}" ?`
                    );
                    if (confirmDelete) {
                      handleDeleteDashboard(db);
                    }
                  }}
                  title="Supprimer le tableau de bord"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">Aucun tableau de bord trouvé.</p>
        )}
      </div>

      {/* Search bar */}
      <div className="fixed right-32 top-76 z-40">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un tableau de bord..."
            className="bg-white border border-[#546fca] p-2 rounded w-80 text-center"
            value={searchRegion}
            onChange={(e) => setSearchRegion(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute w-5 h-5 top-2.5 left-2.5 text-[#3c5297]"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Search Button */}
      <button
        className="fixed cursor-pointer right-6 top-76 z-40 rounded bg-[#fbc245] hover:bg-yellow-500 w-[100px] py-2.5 px-1 border border-[#ec400b] text-sm text-[#ec400b] font-semibold"
        type="button"
        onClick={handleSearch}
      >
        Recherche
      </button>
    </>
  );
};

export default Home;
