import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Wrench } from "lucide-react";
import { experience } from "../data/experience.js";
import Reveal from "../components/Reveal.jsx";
import "./Experience.css";

const milestones = [
  { icon: GraduationCap, title: "Learning by building", label: "Education & self-directed learning", text: "Combining formal study with independent projects, experimentation, and practical technical learning." },
  { icon: BriefcaseBusiness, title: "Rudranta Tech", label: "Entrepreneurship", text: "Exploring how technology, STEM education, and hands-on engineering can become useful products and experiences." },
  { icon: Wrench, title: "Independent builds", label: "Software, AI & hardware", text: "Developing RASB, prototyping connected devices, and learning through the full build-test-improve cycle." }
];

export default function Experience() {
  return (
    <section className="experience-page page-wrap section-pad">
      <Reveal><div className="section-kicker"><BriefcaseBusiness size={15} /> Experience & timeline</div><h1 className="section-heading">A journey shaped<br />by <em>building things.</em></h1><p className="section-intro">My experience is a combination of entrepreneurship, project ownership, technical exploration, and learning in public. This timeline is intentionally focused on work I can describe honestly.</p></Reveal>
      <div className="timeline-list">{experience.map((item, i) => <Reveal key={item.organization} delay={i * 70}><article className="timeline-entry"><div className="timeline-period">{item.period}</div><div className="timeline-marker"><span /></div><div className="timeline-card surface"><div className="timeline-topline"><span>{item.organization}</span><span className="timeline-index">0{i + 1}</span></div><h2>{item.role}</h2><p>{item.description}</p><div className="tag-list">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></article></Reveal>)}</div>
      <Reveal><div className="experience-note"><div><div className="section-kicker">A note on this page</div><h2>Work in progress, documented clearly.</h2><p>Specific dates, formal titles, credentials, and measurable outcomes will be added when the details are verified.</p></div><a href="https://github.com/" target="_blank" rel="noreferrer">Explore code <ArrowUpRight size={16} /></a></div></Reveal>
      <div className="milestone-grid">{milestones.map(({ icon: Icon, title, label, text }, i) => <Reveal key={title} delay={i * 70}><article className="milestone-card surface"><span className="milestone-icon"><Icon size={22} /></span><span className="milestone-label">{label}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
    </section>
  );
}