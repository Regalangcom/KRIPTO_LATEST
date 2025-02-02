import { useState, useEffect } from "react";
import { Menus } from "../../components/utils/utils.js";
import logo from "../../assets/AUDITOR-AI-ICON-NO-BG.png";
import DesktopMenu from "../../components/DesktopMenu";
import { Menu, X, ArrowUp } from "lucide-react";
import MobMenu from "../MobMenu.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {}, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`h-16 fixed top-0 left-0 w-full bg-[#18181A] shadow-md z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-opacity-80" : ""
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-2">
          <div className="flex items-center gap-x-3">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-cover md:w-12 md:h-12"
            />
            <h3 className="text-lg md:text-xl font-bold font-mono text-white">
              AIAuditor
            </h3>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex items-center gap-x-6 font-mono text-white">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          {/* Button + Mobile Menu */}
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => setAlertOpen(true)}
              className="bg-violet-900 font-mono text-white text-sm px-2 py-2 rounded-xl shadow-md hover:bg-violet-700 transition duration-300"
            >
              Add Chrome Extensions
            </button>
          </div>
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </nav>
      </header>

      {/* Alert Modal */}
      {isAlertOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Coming Soon 🚀
            </h2>
            <p className="text-gray-600 mt-2">Features under development.</p>
            <button
              onClick={() => setAlertOpen(false)}
              className="mt-4 px-4 py-2 bg-violet-900 text-white rounded-lg shadow-md hover:bg-violet-700 transition"
            >
              Oke
            </button>
          </div>
        </div>
      )}

      {/* Floating Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-violet-900 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navbar;
