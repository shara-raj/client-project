const HeroBackground = () => {
  return (
    //hero section video background
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay - #B0967E at 20% transparency (80% opacity) */}
      <div className="absolute inset-0 bg-[#e0cbb6]/90"></div>
    </div>
  );
};

export default HeroBackground;
