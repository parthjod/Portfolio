import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      setIsBottom(scrollTop + clientHeight >= scrollHeight - 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${isBottom ? "visible" : ""}`}>
      <p>© 2025 ParthPortfolio | Built with love</p>
    </footer>
  );
}

export default Footer;
