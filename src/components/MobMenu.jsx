import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu, link }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={name} className="">
                {hasSubMenu ? (
                  <span
                    className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    <ChevronDown
                      className={`ml-auto transition-transform ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                ) : (
                  <Link
                    to={link}
                    className="block p-4 hover:bg-white/5 rounded-md"
                    onClick={() => setIsOpen(false)} // Tutup menu saat klik link utama
                  >
                    {name}
                  </Link>
                )}

                {hasSubMenu && isClicked && (
                  <ul className="ml-5">
                    {subMenu.map(({ name, icon: Icon, link }) => (
                      <li key={name}>
                        <Link
                          to={link}
                          className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-md"
                          onClick={() => {
                            setIsOpen(false); // Tutup menu setelah klik link
                          }}
                        >
                          <Icon size={17} />
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
