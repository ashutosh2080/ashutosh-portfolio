import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Cpu, ExternalLink, Layers3, Orbit, Rocket, Workflow } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import Reveal from "../components/Reveal.jsx";
import "./ProjectDetail.css";

const artIcons = { rasb: Orbit, rudranta: Cpu, swabud: Rocket, robotics: Cpu, printing: Code2, hackamate: Code2 };

function Metric({ value, label }) {
  return <div className="case-metric"><strong>{value}</strong><span>{label}</span></div>;
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <section className="project-detail page-wrap section-pad"><p className="section-kicker">Project not found</p><h1 className="section-heading">That project isn't here yet.</h1><Link className="button button-dark" to="/projects"><ArrowLeft size={17} /> Back to projects</Link></section>;
  }

  const study = project.caseStudy;
  const ArtIcon = artIcons[project.visual] || Code2;
  return (
    <section className={`project-detail page-wrap section-pad project-detail-${project.visual}`}>
      <Reveal>
        <Link className="project-back-link" to="/projects"><ArrowLeft size={16} /> Back to all projects</Link>
        <div className={`project-detail-art art-${project.visual}`}>
          <div className="project-detail-orbit project-detail-orbit-one" /><div className="project-detail-orbit project-detail-orbit-two" />
          <span className="project-detail-number">CASE FILE / {project.number}</span>
          <div className="project-detail-icon"><ArtIcon size={64} strokeWidth={1.25} /></div>
          <span className="project-detail-status"><CheckCircle2 size={14} /> {project.status}</span>
        </div>
        <div className="project-detail-kicker-row"><span className="project-detail-eyebrow">{project.eyebrow}</span><span className="project-detail-category">{project.category}</span></div>
        <div className="project-detail-heading"><h1 className="section-heading">{project.title}<span className="hero-period">.</span></h1></div>
        <p className="project-detail-subtitle">“{study.subtitle}”</p>
        <p className="project-detail-lead">{project.detail}</p>
        <p className="project-detail-contribution"><strong>Project context:</strong> {study.contribution}</p>
      </Reveal>

      <div className="case-metrics-grid">
        <Metric value={project.status} label="CURRENT STATUS" />
        <Metric value={`${study.workflow.length} stages`} label="WORKFLOW BREAKDOWN" />
        <Metric value={`${study.features.length} areas`} label="FEATURES / CAPABILITIES" />
        <Metric value="Iterative" label="BUILD APPROACH" />
      </div>

      <div className="case-two-column">
        <Reveal className="case-section-card">
          <span className="section-kicker">01 / The problem space</span><h2>Challenges &amp; constraints</h2><p>{study.problem}</p>
        </Reveal>
        <Reveal className="case-section-card" delay={70}>
          <span className="section-kicker">02 / The architectural approach</span><h2>How I'm approaching it</h2><p>{study.solution}</p>
        </Reveal>
      </div>

      <section className="case-workflow-section">
        <Reveal><div className="section-kicker"><Workflow size={15} /> Execution pipeline</div><h2 className="section-heading">End-to-end workflow &amp; tools</h2><p className="section-intro">A practical breakdown of how the project moves from its core problem to a usable system.</p></Reveal>
        <div className="case-workflow-grid">
          {study.workflow.map((stage, index) => <Reveal key={stage.title} delay={(index % 2) * 65}><article className="case-stage"><div className="case-stage-top"><strong>{String(index + 1).padStart(2, "0")}</strong><span>STAGE</span></div><h3>{stage.title}</h3><p>{stage.text}</p><div className="case-stage-tools"><span>TOOLS &amp; CONCEPTS</span><div className="tag-list">{stage.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div></div></article></Reveal>)}
        </div>
      </section>

      <section className="case-ecosystem-section">
        <Reveal><div className="section-kicker"><Layers3 size={15} /> Full technology ecosystem</div><h2 className="section-heading">Tools, platforms &amp; methods</h2><p className="section-intro">Technologies currently used or planned for this project. Planned items are identified in the project status notes.</p></Reveal>
        <div className="case-tech-list">{study.architecture.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <div className="case-two-column case-deliverables-row">
        <Reveal className="case-section-card"><span className="section-kicker">Deliverables &amp; functional areas</span><h2>What the project covers</h2><ul className="case-feature-list">{study.features.map((feature) => <li key={feature}><CheckCircle2 size={16} />{feature}</li>)}</ul></Reveal>
        <Reveal className="case-section-card" delay={70}><span className="section-kicker">Current state &amp; next steps</span><h2>Build notes</h2><p>{study.statusNote}</p><div className="tag-list project-detail-tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></Reveal>
      </div>

      {project.externalLinks?.length > 0 && <div className="case-external-links">{project.externalLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={15} /></a>)}</div>}
      <div className="project-detail-bottom"><div><span className="section-kicker">Let's build thoughtfully</span><p>Have a question about this project or want to collaborate?</p></div><Link to="/contact" className="button button-dark">Get in touch <ArrowUpRight size={17} /></Link></div>
    </section>
  );
}
