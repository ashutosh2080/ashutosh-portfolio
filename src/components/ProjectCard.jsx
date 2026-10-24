import { ArrowUpRight, CheckCircle2, Code2, Cpu, Orbit, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const artIcons = { rasb: Orbit, rudranta: Cpu, swabud: Rocket, robotics: Cpu, printing: Code2, hackamate: Code2 };

export default function ProjectCard({ project, compact = false }) {
  const ArtIcon = artIcons[project.visual] || Code2;
  return (
    <article className={`project-card surface ${compact ? "project-card-compact" : ""}`}>
      <div className={`project-art art-${project.visual}`}>
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <span className="art-number">{project.number}</span>
        <span className="art-symbol"><ArtIcon size={42} strokeWidth={1.35} /></span>
        <span className="art-status"><CheckCircle2 size={13} /> {project.status}</span>
      </div>
      <div className="project-card-body">
        <div className="project-eyebrow">{project.eyebrow}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.tags.slice(0, compact ? 3 : 5).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <Link to={`/projects/${project.id}`} className="card-link">Explore project <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
