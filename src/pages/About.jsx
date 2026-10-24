import { ArrowUpRight, BrainCircuit, Code2, Cpu, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import "./About.css";

const focus = [
  { icon: Code2, title: "Software development", text: "Frontend experiences, APIs, databases, and maintainable full-stack applications." },
  { icon: BrainCircuit, title: "AI & intelligent systems", text: "Learning how AI tools, retrieval, automation, and agent workflows can become useful products." },
  { icon: Cpu, title: "Robotics & IoT", text: "Connecting software to sensors, microcontrollers, physical interfaces, and prototypes." },
  { icon: HeartHandshake, title: "Entrepreneurship & education", text: "Turning technical curiosity into products, workshops, and opportunities to learn by doing." }
];

export default function About() {
  return (
    <section className="about-page page-wrap section-pad">
      <div className="about-hero">
        <Reveal><div className="section-kicker">A little about me</div><h1 className="section-heading">I like understanding<br />how things <em>work.</em></h1><p className="section-intro">I'm Ashutosh — a student, developer, and builder interested in the overlap between software, AI, entrepreneurship, and physical systems.</p><p className="about-copy">I learn best by building: breaking a problem into parts, trying an approach, finding what fails, and iterating until it becomes something useful. My projects range from full-stack applications to robotics, IoT, and 3D-printed prototypes.</p><div className="about-actions"><Link to="/projects" className="button button-dark">See what I'm building <ArrowUpRight size={17} /></Link><Link to="/contact" className="text-link">Get in touch <ArrowUpRight size={17} /></Link></div></Reveal>
        <Reveal delay={120}><div className="about-art"><div className="about-art-grid" /><div className="about-art-orbit" /><div className="about-letter">A<span>.</span></div><div className="about-art-label">ALWAYS IN BETA / ALWAYS LEARNING</div><div className="about-sticky"><span>Current mindset</span><strong>Make it work.<br />Understand why.<br />Make it better.</strong></div></div></Reveal>
      </div>
      <Reveal><div className="about-section-heading"><div className="section-kicker">Areas I keep exploring</div><h2 className="section-heading">Different disciplines.<br />One builder's mindset.</h2></div></Reveal>
      <div className="focus-grid">{focus.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 70}><article className="focus-card surface"><span className="focus-icon"><Icon size={23} /></span><span className="focus-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      <Reveal><div className="about-bottom"><div><div className="section-kicker">What matters to me</div><h2>Useful work. Honest progress.<br /><em>Continuous learning.</em></h2></div><p>This portfolio will evolve alongside the work. As projects mature, I'll add real screenshots, technical write-ups, decisions, and lessons learned — not just polished claims.</p></div></Reveal>
    </section>
  );
}