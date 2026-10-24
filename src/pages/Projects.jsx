import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Filter } from "lucide-react";
import { categories, projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import "./Projects.css";

export default function Projects() {
  const [category, setCategory] = useState("All");
  const visible = useMemo(() => category === "All" ? projects : projects.filter((p) => p.category === category), [category]);
  return (
    <section className="projects-page page-wrap section-pad">
      <Reveal><div className="section-kicker"><Filter size={15} /> Curated project portfolio</div>
        <div className="projects-page-heading"><div><h1 className="section-heading">Ideas, experiments<br />&amp; things in progress.</h1><p className="section-intro">A growing collection of work across software, AI, entrepreneurship, robotics, and IoT. This is a living portfolio, not a list of claims.</p></div><div className="project-count"><strong>{projects.length.toString().padStart(2, "0")}</strong><span>PROJECTS / NOTES</span></div></div>
      </Reveal>
      <div className="filter-bar" aria-label="Filter projects">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`filter-chip ${category === item ? "selected" : ""}`}>{item}</button>)}</div>
      <div className="projects-grid">{visible.map((project, i) => <Reveal key={project.id} delay={(i % 3) * 70}><div id={project.id} className="project-anchor"><ProjectCard project={project} /></div></Reveal>)}</div>
      <div className="project-note"><span><ArrowDownRight size={18} /> More case studies will be added as project notes and screenshots are ready.</span><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={15} /></a></div>
    </section>
  );
}