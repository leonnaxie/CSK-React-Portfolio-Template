import { useState } from "react";
import "./index.css";

// ============================================================
// PORTFOLIO TEMPLATE
// ------------------------------------------------------------
// This is a starting point, not a finished product. Everything
// marked with TODO is meant for you to replace. The structure
// (Nav, Hero, About, Projects, Skills, Contact) is a common
// portfolio layout, but feel free to reorder, remove, or add
// sections as you learn more React.
//
// A few things worth noticing as you read this file:
// - All the "data" (projects, skills, links) lives in plain
//   arrays/objects near the top, then gets rendered with .map().
//   That's a common React pattern: keep content separate from
//   the JSX that displays it.
// - There's only one piece of state (the mobile menu toggle) so
//   you can see useState in a simple, real context.
// - All the styling lives in index.css, using plain class names
//   (no Tailwind). Open that file alongside this one.
// ============================================================

// TODO: replace with your own info
const PROFILE = {
  name: "Your Name",
  title: "Computer Science Student",
  tagline: "I build things for the web and I'm learning as I go.",
  email: "you@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
};

// TODO: replace with your own projects
const PROJECTS = [
  {
    title: "Project One",
    description: "A short description of what this project does and why you built it.",
    tech: ["React", "Node.js"],
    link: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and why you built it.",
    tech: ["Python", "SQL"],
    link: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and why you built it.",
    tech: ["JavaScript", "CSS"],
    link: "https://github.com/your-username/project-three",
  },
];

// TODO: replace with your own skills
const SKILLS = [
  "JavaScript",
  "React",
  "HTML & CSS",
  "Python",
  "Java",
  "Git",
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  // Tracks whether the mobile nav menu is open.
  // On small screens we hide the links behind a toggle button.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      {/* ---------- NAV ---------- */}
      <header className="nav-bar">
        <nav className="nav">
          <a href="#top" className="nav-name">
            {PROFILE.name}
          </a>

          {/* Links: visible on medium screens and up */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Toggle button: visible on small screens only */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {/* Mobile menu: only rendered when menuOpen is true */}
        {menuOpen && (
          <ul className="nav-links-mobile">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main id="top" className="content">
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <p className="eyebrow">{PROFILE.title}</p>
          <h1>{PROFILE.name}</h1>
          <p className="tagline">{PROFILE.tagline}</p>
          <div className="hero-buttons">
            <a href={`mailto:${PROFILE.email}`} className="button button-primary">
              Get in touch
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              View GitHub
            </a>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="section">
          <h2>About</h2>
          {/* TODO: write a couple of real paragraphs about yourself */}
          <p className="about-text">
            Write a short paragraph here about who you are, what you're
            studying, and what kind of projects or problems you enjoy working
            on. Keep it in your own voice — this section is what makes the
            page feel like you rather than a template.
          </p>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------- SKILLS ---------- */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skill-list">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="about-text">
            The easiest way to reach me is by email.
          </p>
          <div className="contact-links">
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}
