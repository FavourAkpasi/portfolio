import { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "../SideNav/SideNav";

const Navbar = () => {
  const NavLinks = ["ABOUT", "PROJECTS", "CONTACT"];

  const [top, setTop] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 620) {
      setTop(true);
    } else {
      setTop(false);
    }
  }

  // When the user scrolls the page, execute handleScroll
  window.onscroll = function () {
    handleScroll();
  };

  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
  const [openSideNav, setOpenSideNav] = useState(false);

  useEffect(() => {
    // track viewport width
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <nav
      className={top ? "box-shadow-sharp sticky " : "box-shadow-sharp"}
      id="navbar"
    >
      <a href="#home">
        <div className="logo">Favour Akpasi</div>
      </a>
      {viewportWidth > 768 ? (
        <div className="nav-link-group">
          {NavLinks.map((link, index) => (
            <div className="nav-link" key={index}>
              <a href={`#${link.toLowerCase()}`}> {link}</a>
            </div>
          ))}
          <a href="https://drive.google.com/file/d/1PVMYmXK-P6L3SDez8T9j5dHXkb70PbFm/view?usp=sharing">
            <motion.div
              className="resume box-shadow-diffuse"
              whileHover={{ scale: 1.1 }}
            >
              resume
            </motion.div>
          </a>
        </div>
      ) : (
        <>
          {!openSideNav && (
            <MenuIcon
              id="menu_bar"
              onClick={() => setOpenSideNav(!openSideNav)}
            />
          )}
          <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
