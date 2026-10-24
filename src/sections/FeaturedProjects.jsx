import { ArrowUpRight, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section className="featured-section section-pad">
      <div className="page-wrap">
        <Reveal><div className="section-kicker"><Layers3 size={16} /> Selected work</div>
          <div className="featured-heading-row"><div><h2 className="section-heading">A few things I'm<br />building into reality.</h2><p className="section-intro">A mix of software, intelligent systems, and physical-world experiments. These projects are works in progress, documented as honestly as possible.</p></div>
            <Link to="/projects" className="button button-outline featured-all">All projects <ArrowUpRight size={17} /></Link>
          </div>
        </Reveal>
        <div className="featured-grid">{projects.slice(0, 3).map((project, i) => <Reveal key={project.id} delay={i * 90}><ProjectCard project={project} compact /></Reveal>)}</div>
      </div>
    </section>
  );
}