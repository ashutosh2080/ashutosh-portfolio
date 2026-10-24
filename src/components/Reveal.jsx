import useReveal from "../hooks/useReveal.js";

export default function Reveal({ children, className = "", delay = 0 }) {
  useReveal();
  return <div data-reveal className={className} style={{ "--reveal-delay": `${delay}ms` }}>{children}</div>;
}