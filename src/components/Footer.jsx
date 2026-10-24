import { ArrowUpRight, BriefcaseBusiness, Camera, Code2, Mail, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-panel">
        <div className="footer-main">
          <div>
            <Link to="/" className="footer-brand"><span className="footer-mark"><Terminal size={19} /></span> Ashutosh Kumar Jha<span className="brand-dot">.</span></Link>
            <p>Building ideas into working systems.<br />Software · AI · Robotics · IoT</p>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/ashutosh-kumar-jha-381604303" target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
            <a href="https://github.com/ashutosh2080" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ArrowUpRight size={14} /></a>
            <a href="https://www.instagram.com/ashutoshjha_470" target="_blank" rel="noreferrer"><Camera size={16} /> Instagram <ArrowUpRight size={14} /></a>
            <Link to="/contact"><Mail size={16} /> Contact <ArrowUpRight size={14} /></Link>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Ashutosh Kumar Jha. Built with curiosity.</span><span>Designed to evolve.</span></div>
      </div>
    </footer>
  );
}
