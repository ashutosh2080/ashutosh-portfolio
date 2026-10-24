import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Copy, Mail, MapPin, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import "./Contact.css";

const CONTACT_EMAIL = "jhaashutosh470@example.com"; // Replace with your preferred public contact email.

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Project collaboration", message: "" });
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  function submit(event) {
    event.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    const subject = encodeURIComponent(`${form.topic} — message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nReply email: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  }

  return (
    <section className="contact-page page-wrap section-pad">
      <Reveal><div className="section-kicker"><MessageCircle size={15} /> Contact & dispatch</div><h1 className="section-heading">Good things start<br />with a <em>conversation.</em></h1><p className="section-intro">Have a project idea, an interesting technical problem, or a potential collaboration? Send a note and tell me what you're working on.</p></Reveal>
      <div className="contact-layout">
        <Reveal><form className="contact-form surface" onSubmit={submit}>
          <div className="contact-form-heading"><h2>Send a message</h2><p>Fields marked with * are required.</p></div>
          <label>Your name *<input name="name" value={form.name} onChange={update} placeholder="How should I address you?" required autoComplete="name" /></label>
          <label>Your email *<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required autoComplete="email" /></label>
          <label>What is this about?<select name="topic" value={form.topic} onChange={update}><option>Project collaboration</option><option>Software development</option><option>AI / automation</option><option>Robotics / IoT</option><option>Education / mentoring</option><option>Something else</option></select></label>
          <label>Your message *<textarea name="message" value={form.message} onChange={update} placeholder="A little context about your idea..." rows="5" required /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-dark contact-submit" type="submit">Open email draft <ArrowUpRight size={17} /></button>
          <p className="form-note">This starter form opens your email application. It does not send or store your message automatically.</p>
        </form></Reveal>
        <Reveal delay={100}><aside className="contact-sidebar">
          <div className="contact-sidebar-card surface"><span className="contact-side-icon"><Mail size={20} /></span><span className="contact-side-label">EMAIL</span><h3>Prefer email?</h3><p>Use the address below .</p><button className="email-copy" onClick={copyEmail}><span>{CONTACT_EMAIL}</span>{copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}</button>{copied && <span className="copied-label">Copied to clipboard</span>}</div>
          <div className="contact-sidebar-card surface"><span className="contact-side-icon"><MapPin size={20} /></span><span className="contact-side-label">LOCATION</span><h3>South Asia</h3><p>Working across software, AI, robotics, and connected products.</p></div>
          <div className="contact-dark-card"><span className="contact-side-icon"><MessageCircle size={20} /></span><h3>Clear context helps.</h3><p>For project inquiries, share the problem, the outcome you want, and any useful timeline or constraints.</p></div>
        </aside></Reveal>
      </div>
    </section>
  );
}