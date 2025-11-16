import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 text-lg ${
      isActive ? "text-pink-500" : "text-white hover:text-pink-500"
    }`;

  return (
    <header className="bg-black/80 backdrop-blur-sm fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-white">
          Chez Ismi
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <NavLink to="/" className={linkClass}>Accueil</NavLink>
          <NavLink to="/le-v" className={linkClass}>Le V</NavLink>
          <NavLink to="/privatisation" className={linkClass}>Privatisation</NavLink>
          <NavLink to="/evenements" className={linkClass}>Événements</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Burger icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile sidebar */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm py-6 space-y-4 text-center">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Accueil</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/le-v" className={linkClass}>Le V</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/privatisation" className={linkClass}>Privatisation</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/evenements" className={linkClass}>Événements</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
