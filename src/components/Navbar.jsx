import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Ashutosh home">
          <span className="brand-mark"><Terminal size={22} strokeWidth={2.2} /></span>
          <span className="brand-name">Ashutosh Kumar Jha<span className="brand-dot">.</span></span>
        </Link>
        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>{link.label}</NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <Link className="nav-contact" to="/contact">Let's talk <ArrowUpRight size={16} /></Link>
          <button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}