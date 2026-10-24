import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import "./Hero.css";

const PORTRAIT_PATH = "/images/mypic.jfif";
const RESUME_PATH = "/resume/Ashutosh_Kumar_Jha_Resume-h.pdf";

export default function Hero() {
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  return (
    <section className="hero-section">
      <div className="hero-grid page-wrap">
        <div className="hero-copy">
          <Reveal><div className="hero-overline"><span className="availability-dot" /> INDEPENDENT BUILDER · SOFTWARE & SYSTEMS</div></Reveal>
          <Reveal delay={70}><h1>Developer,<br /><em>Builder</em> &amp; Systems<br />Thinker<span className="hero-period">.</span></h1></Reveal>
          <Reveal delay={140}><p className="hero-description">Hi, I'm <strong>Ashutosh Kumar Jha</strong>. I build software, explore intelligent systems, and bring ideas into the physical world through robotics and IoT.</p></Reveal>
          <Reveal delay={200}>
            <div className="hero-actions">
              <Link to="/projects" className="button button-dark">Explore projects <ArrowUpRight size={18} /></Link>
              <Link to="/about" className="button button-outline"><Sparkles size={17} /> About my journey</Link>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="hero-stats">
              <div><strong>Software</strong><span>Web & AI systems</span></div>
              <div><strong>Hardware</strong><span>Robotics & IoT</span></div>
              <div><strong>Building</strong><span>Ideas into products</span></div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual-wrap" delay={120}>
          <div className={`hero-visual ${portraitLoaded ? "has-portrait" : "portrait-placeholder"}`}>
            {portraitLoaded && (
              <img
                className="hero-portrait"
                src={PORTRAIT_PATH}
                alt="Portrait of Ashutosh Kumar Jha"
                onError={() => setPortraitLoaded(false)}
              />
            )}
            {portraitLoaded && <div className="hero-visual-shade" />}
            <div className="hero-visual-top"><span>FIELD NOTES / 001</span><span>BUILD · LEARN · REPEAT</span></div>
            {!portraitLoaded && (
              <>
                <div className="hero-orbit hero-orbit-a" />
                <div className="hero-orbit hero-orbit-b" />
                <div className="hero-monogram">A<span>.</span></div>
                <div className="hero-floating-card float-card-one"><span className="mini-icon">{"</>"}</span><span><strong>Software</strong><small>Build with intent</small></span></div>
                <div className="hero-floating-card float-card-two"><span className="mini-icon">⌘</span><span><strong>Systems</strong><small>Connect the pieces</small></span></div>
              </>
            )}
            <div className="hero-visual-caption">
              <span className="hero-portrait-label">SOFTWARE · ROBOTICS · SYSTEMS</span>
              <strong>Ashutosh Kumar Jha</strong>
              <span className="hero-portrait-location">Building from South Asia</span>
            </div>
          </div>
          <div className="hero-image-foot"><span>Personal portfolio / 2026</span><a href={RESUME_PATH} download="Ashutosh_Kumar_Jha_Resume.pdf">Download resume <Download size={14} /></a></div>
        </Reveal>
      </div>
      <div className="hero-scroll page-wrap"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></div>
    </section>
  );
}
