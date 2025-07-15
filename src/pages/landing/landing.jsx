const Landing = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 bg-[#a5b7ff]">
        <div className="px-4">
          <div className="px-4 h-16 flex items-center">
            <a href="/" className="font-mono text-2xl font-bold text-white">
              MCDB TT
            </a>
          </div>
        </div>
      </nav>

      {/* Main Section with Background */}
      <div className="relative min-h-screen w-full pt-16 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/landingVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Landing;
