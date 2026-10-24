import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import "./ContactBand.css";

export default function ContactBand() {
  return (
    <section className="contact-band-section">
      <Reveal className="page-wrap"><div className="contact-band">
        <div><div className="section-kicker">Have an idea?</div><h2>Let's make something<br /><em>worth building.</em></h2><p>Open to thoughtful conversations, collaborations, and interesting problems.</p></div>
        <Link to="/contact" className="button contact-band-button">Start a conversation <ArrowUpRight size={18} /></Link>
        <span className="contact-band-orbit" />
      </div></Reveal>
    </section>
  );
}