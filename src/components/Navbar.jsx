import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../constants/constants";

const NavItems = ({ onItemClick } = {}) => (
  navLinks.map(({ id, path, name }) => (
    <li key={id} className="mx-4 my-6 list-none border-b border-sky-400/30 px-4 py-2 last:border-b-0 sm:border-0 sm:px-0 sm:py-0 sm:my-0">
      <Link to={path} onClick={onItemClick} className="inline-flex rounded-md px-3 py-1.5 text-blue-400 font-normal text-15px cursor-pointer hover:bg-sky-400/10 hover:text-blue-400/90 transition-colors">
        {name}
      </Link>
    </li>
  ))
)

const Navbar = () => {
  const [menuState, setMenuState] = useState({ pathname: null, isOpen: false });
  const { pathname } = useLocation();
  const isOpen = menuState.pathname === pathname && menuState.isOpen;
  const toggleMenu = () => setMenuState({ pathname, isOpen: !isOpen });
  const closeMenu = () => setMenuState({ pathname, isOpen: false });

 return (
   <header className="fixed top-1 left-3 right-3 z-50 rounded-2xl border border-blue-700 bg-inherit backdrop-blur-md shadow-md">
     <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-5 mx-auto c-space">
        <Link to="/" className="text-blue-400 font-bold text-xl hover:text-blue-400/90 transition-colors">
          Shalom
        </Link>
        
        <div className="flex items-center gap-2">
          <nav className="sm:flex hidden" aria-label="Primary">
            <NavItems />
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="sm:hidden rounded-md p-1 hover:bg-blue/90 transition-colors delay-75 focus:outline-none"
          >
            <img
              src={isOpen ? "assets/close.svg" : "/assets/menu.svg"}
              alt=""
              aria-hidden="true"
              className="cursor-pointer w-8 h-8 p-1"
            />
          </button>
        </div>
      </div>
     </div>
    {/* Full-screen backdrop overlay that closes the menu when clicking the screen.
        Rendered before the dropdown so the menu (z-20) stays clickable above it.
        Mobile-only: it must never block the desktop nav. */}
    {isOpen && (
      <div
        onClick={closeMenu}
        className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm sm:hidden"
        aria-label="Close menu"
      />
    )}
    <div className={`nav-sidebar ${isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 bg-blue-900/90 pointer-events-none"} cursor-pointer rounded-lg shadow-md`}>
        <nav className="p-5 bg-blue rounded-lg backdrop-blur-sm shadow-md" aria-label="Mobile">
          <NavItems onItemClick={closeMenu} />
        </nav>
       
     </div>
   </header>
 )
}

export default Navbar
