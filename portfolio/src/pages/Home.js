import React, { useEffect, useState } from "react";

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`home-page ${scrolled ? "blur" : ""}`}>
      <div className="home-background"></div>
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio!</h1>
        <p className="home-desc">I'm a passionate developer with Frontend and Backend Skills in MERN, Programming Languages include Java, C.</p>
      </div>
    </div>
  );
}

export default Home;
