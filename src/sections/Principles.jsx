import { ArrowUpRight, Blocks, Compass, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import "./Principles.css";

const principles = [
  { icon: Blocks, title: "Build end to end", text: "I like understanding how the interface, backend, data, and real-world constraints fit together." },
  { icon: Compass, title: "Learn by making", text: "Prototypes, experiments, and debugging turn abstract ideas into practical understanding." },
  { icon: Lightbulb, title: "Stay curious", text: "Software, AI, electronics, and product thinking are connected parts of the same learning journey." }
];

export default function Principles() {
  return (
    <section className="principles-section section-pad">
      <div className="page-wrap principles-layout">
        <Reveal><div className="section-kicker">How I approach the work</div><h2 className="section-heading">Curiosity first.<br /><em>Execution</em> always.</h2><p className="section-intro">I'm interested in the full path from a question to a useful, working thing — not just the technology in isolation.</p><Link to="/about" className="text-link principles-link">More about my approach <ArrowUpRight size={17} /></Link></Reveal>
        <div className="principle-list">{principles.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 90}><article className="principle-item"><span className="principle-icon"><Icon size={22} /></span><div><h3>{title}</h3><p>{text}</p></div><span className="principle-index">0{i + 1}</span></article></Reveal>)}</div>
      </div>
    </section>
  );
}