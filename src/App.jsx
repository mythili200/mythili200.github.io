import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
  Linkedin,
  Database,
  Server,
  Wrench,
  Eye,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
} from "lucide-react";
import {
  education,
  experiences,
  navItems,
  profile,
  projects,
  skillGroups,
} from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Section({ id, eyebrow, title, children }) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      className="section"
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}>
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <div className="heading-line" />
        </div>
        {children}
      </div>
    </motion.section>
  );
}

function Header({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="nav-shell">
        <a
          className="brand"
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            go("intro");
          }}>
          <span className="brand-mark">M</span>
          <span>
            <strong>Mythili</strong>
            <small>Software Developer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}>
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={profile.resume}
            target="_blank"
            rel="noreferrer">
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}>
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(id);
                }}>
                {label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}>
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const roles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "React.js Enthusiast",
    "Problem Solver",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="intro" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-inner">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-copy">
          <div className="availability">
            <span /> Open to opportunities
          </div>
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1>
            Mythili <span>P.</span>
          </h1>
          <div className="hero-role">
            <span>A </span>
            <AnimatePresence mode="wait">
              <motion.strong
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}>
                {roles[roleIndex]}
              </motion.strong>
            </AnimatePresence>
          </div>
          <p className="hero-description">
            Software Developer building responsive web applications and RESTful
            APIs with React, Laravel, Node.js, and modern JavaScript
            technologies.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects <ArrowDown size={17} />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me <Mail size={17} />
            </a>
            <a
              className="icon-link"
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noreferrer">
              <Github size={20} />
            </a>
            <a
              className="icon-link"
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} /> {profile.location}
            </span>
            <span>
              <Code2 size={15} /> Full Stack Development
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}>
          <div className="code-card">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <b>mythili.dev</b>
            </div>
            <pre>
              <code>{`const developer = {
  name: "Mythili P",
  role: "Software Developer",
  stack: [
    "React.js",
    "Node.js",
    "Laravel",
    "MySQL"
  ],
  focus: "Clean & scalable web apps"
};`}</code>
            </pre>
          </div>
          <div className="floating-chip chip-react">
            <Code2 size={16} /> React.js
          </div>
          <div className="floating-chip chip-api">
            <Server size={16} /> REST APIs
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="A developer who enjoys solving real problems.">
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">
            I&apos;m a self-motivated Full Stack Developer focused on building
            scalable, responsive web applications and RESTful APIs.
          </p>
          <p>
            I have hands-on experience across frontend and backend development
            with React, Node.js, Express.js, Laravel, PHP, MySQL, MongoDB, and
            related tooling. I enjoy turning requirements into clean,
            maintainable interfaces and reliable backend services.
          </p>
          <p>
            I&apos;m also exploring AI integration using Ollama and modern AI
            APIs to enhance user experiences.
          </p>
        </div>
        <div className="about-panel">
          <div className="stat">
            <strong>2.5+</strong>
            <span>Years of professional experience</span>
          </div>
          <div className="stat">
            <strong>Full Stack</strong>
            <span>Frontend, backend & API development</span>
          </div>
          <div className="stat">
            <strong>Modern Web</strong>
            <span>Responsive, accessible interfaces</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

const groupIcons = {
  Frontend: Code2,
  Backend: Server,
  Database,
  "Tools & Testing": Wrench,
};

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Tools I use to build products.">
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[group.title] || Code2;
          return (
            <motion.article
              className="skill-group"
              key={group.title}
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}>
              <div className="skill-heading">
                <span className="skill-icon">
                  <Icon size={20} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 · Experience"
      title="Experience that shaped my engineering approach.">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.article
            className="timeline-item"
            key={exp.company}
            variants={fadeUp}
            transition={{ delay: index * 0.1 }}>
            <div className="timeline-dot" />
            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <span className="role">{exp.role}</span>
                  <h3>{exp.company}</h3>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>
              <div className="experience-location">
                <MapPin size={14} /> {exp.location}
              </div>
              <div className="tag-row">
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <ul>
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 size={15} /> <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("gallery");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // Lock body scroll while modal is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard controls: ESC to close, Left/Right arrow keys to cycle screenshots
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const count = project.screenshots?.length || 1;
        setActiveScreenshotIdx((prev) => (prev > 0 ? prev - 1 : count - 1));
      } else if (e.key === "ArrowRight") {
        const count = project.screenshots?.length || 1;
        setActiveScreenshotIdx((prev) => (prev < count - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  const screenshots = project?.screenshots?.length
    ? project.screenshots
    : [
        {
          url: project.image,
          title: project.name,
          description: project.description,
        },
      ];

  const currentScreenshot = screenshots[activeScreenshotIdx] || screenshots[0];

  const getFallbackImage = () => {
    if (project?.id === "devflow") return "/assets/img/devflow.png";
    if (project?.id === "boutique") return "/assets/img/project2.png";
    return "/assets/img/project3.jpg";
  };

  const getHostLabel = () => {
    if (project.demo) {
      try {
        return new URL(project.demo).hostname;
      } catch {
        return project.demo.replace(/^https?:\/\//, "");
      }
    }
    return `${project.id || "preview"}.local`;
  };

  return createPortal(
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        backgroundColor: "rgba(3, 6, 12, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(12px, 3vw, 24px)",
        boxSizing: "border-box",
      }}>
      <motion.div
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, scale: 0.93, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        style={{
          width: "min(100%, 1100px)",
          maxHeight: "92vh",
          background: "linear-gradient(165deg, #101524 0%, #0a0d15 100%)",
          border: "1px solid rgba(110, 231, 247, 0.35)",
          borderRadius: "20px",
          boxShadow:
            "0 35px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(110, 231, 247, 0.12)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}>
        {/* Header Bar */}
        <div
          className="project-modal-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 22px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(16, 22, 34, 0.85)",
            backdropFilter: "blur(10px)",
            gap: 16,
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              minWidth: 0,
            }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                background: "rgba(110, 231, 247, 0.1)",
                border: "1px solid rgba(110, 231, 247, 0.25)",
                padding: "4px 10px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
              }}>
              <Sparkles size={12} />
              {project.category || "Case Study"}
            </span>
            <h3
              id="project-modal-title"
              style={{
                margin: 0,
                fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                fontWeight: 750,
                letterSpacing: "-0.02em",
                color: "#f8fafc",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
              {project.name}
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* View Switcher Tabs */}
            <div
              style={{
                display: "inline-flex",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "10px",
                padding: "3px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}>
              <button
                type="button"
                onClick={() => setActiveTab("gallery")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "7px",
                  fontSize: "0.76rem",
                  fontWeight: 650,
                  cursor: "pointer",
                  border: 0,
                  background:
                    activeTab === "gallery"
                      ? "rgba(110, 231, 247, 0.2)"
                      : "transparent",
                  color:
                    activeTab === "gallery" ? "var(--accent)" : "var(--muted)",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                <Eye size={13} />
                <span>Gallery ({screenshots.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "7px",
                  fontSize: "0.76rem",
                  fontWeight: 650,
                  cursor: "pointer",
                  border: 0,
                  background:
                    activeTab === "overview"
                      ? "rgba(110, 231, 247, 0.2)"
                      : "transparent",
                  color:
                    activeTab === "overview" ? "var(--accent)" : "var(--muted)",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                <Layers size={13} />
                <span>Overview &amp; Tech</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              title="Close modal (Esc)"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 11px",
                borderRadius: "9px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "var(--muted)",
                cursor: "pointer",
                fontSize: "0.76rem",
                fontWeight: 650,
                transition: "all 0.2s ease",
              }}>
              <span>Close</span>
              <kbd
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "4px",
                  padding: "1px 4px",
                  fontSize: "0.65rem",
                  color: "var(--muted-2)",
                }}>
                ESC
              </kbd>
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div
          style={{
            padding: "20px 24px",
            overflowY: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}>
          {activeTab === "gallery" ? (
            /* Gallery Stage */
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Browser Mockup Window */}
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid rgba(110, 231, 247, 0.25)",
                  background: "#070a10",
                  boxShadow: "0 18px 50px rgba(0, 0, 0, 0.7)",
                }}>
                {/* Mock Window Top Bar */}
                <div
                  style={{
                    height: 38,
                    background: "rgba(16, 22, 34, 0.9)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 14px",
                    gap: 8,
                  }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#ef4444",
                      }}
                    />
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#f59e0b",
                      }}
                    />
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#10b981",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      margin: "0 auto",
                      background: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "6px",
                      padding: "2px 14px",
                      fontSize: "0.72rem",
                      color: "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}>
                    <span style={{ color: "var(--accent)" }}>https://</span>
                    <span>{getHostLabel()}</span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      fontWeight: 700,
                    }}>
                    {activeScreenshotIdx + 1} / {screenshots.length}
                  </div>
                </div>

                {/* Screenshot Frame */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "clamp(260px, 46vh, 480px)",
                    background: "#05070c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}>
                  <img
                    src={currentScreenshot.url}
                    alt={currentScreenshot.title}
                    key={currentScreenshot.url}
                    onError={(e) => {
                      e.currentTarget.src = getFallbackImage();
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      background: "#07090e",
                    }}
                  />

                  {/* Navigation Chevrons */}
                  {screenshots.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveScreenshotIdx((prev) =>
                            prev > 0 ? prev - 1 : screenshots.length - 1,
                          )
                        }
                        aria-label="Previous screenshot"
                        style={{
                          position: "absolute",
                          left: 14,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          background: "rgba(8, 12, 20, 0.85)",
                          border: "1px solid rgba(110, 231, 247, 0.35)",
                          color: "var(--text)",
                          display: "grid",
                          placeItems: "center",
                          cursor: "pointer",
                          backdropFilter: "blur(8px)",
                          transition: "all 0.2s ease",
                          boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                        }}>
                        <ChevronLeft size={22} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveScreenshotIdx((prev) =>
                            prev < screenshots.length - 1 ? prev + 1 : 0,
                          )
                        }
                        aria-label="Next screenshot"
                        style={{
                          position: "absolute",
                          right: 14,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          background: "rgba(8, 12, 20, 0.85)",
                          border: "1px solid rgba(110, 231, 247, 0.35)",
                          color: "var(--text)",
                          display: "grid",
                          placeItems: "center",
                          cursor: "pointer",
                          backdropFilter: "blur(8px)",
                          transition: "all 0.2s ease",
                          boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                        }}>
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Caption & Description Box */}
              <div
                style={{
                  background: "rgba(16, 22, 34, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    background: "rgba(110, 231, 247, 0.12)",
                    border: "1px solid rgba(110, 231, 247, 0.3)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                  <Sparkles size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      margin: "0 0 4px",
                      fontSize: "0.96rem",
                      fontWeight: 700,
                      color: "#f8fafc",
                    }}>
                    {currentScreenshot.title}
                  </h4>
                  {currentScreenshot.description && (
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.83rem",
                        color: "var(--muted)",
                        lineHeight: 1.55,
                      }}>
                      {currentScreenshot.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Clickable Thumbnail Strip */}
              {screenshots.length > 1 && (
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    overflowX: "auto",
                    paddingBottom: 4,
                  }}>
                  {screenshots.map((s, idx) => {
                    const isSelected = idx === activeScreenshotIdx;
                    return (
                      <button
                        key={s.title || idx}
                        type="button"
                        onClick={() => setActiveScreenshotIdx(idx)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 14px",
                          borderRadius: "9px",
                          background: isSelected
                            ? "rgba(110, 231, 247, 0.16)"
                            : "rgba(255, 255, 255, 0.035)",
                          border: isSelected
                            ? "1px solid var(--accent)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                          color: isSelected ? "var(--accent)" : "var(--muted)",
                          fontSize: "0.77rem",
                          fontWeight: isSelected ? 700 : 500,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          boxShadow: isSelected
                            ? "0 0 15px rgba(110, 231, 247, 0.2)"
                            : "none",
                          transition: "all 0.2s ease",
                        }}>
                        <Eye size={13} />
                        <span>{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Overview & Architecture Stage */
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 22,
                alignItems: "start",
              }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div
                  style={{
                    background: "rgba(16, 22, 34, 0.55)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "14px",
                    padding: "18px 20px",
                  }}>
                  <h4
                    style={{
                      margin: "0 0 8px",
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      fontWeight: 700,
                    }}>
                    System Architecture &amp; Engineering Overview
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--muted)",
                      fontSize: "0.85rem",
                      lineHeight: 1.65,
                    }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--muted-2)",
                      display: "block",
                      marginBottom: 8,
                    }}>
                    Core Technologies &amp; Libraries:
                  </span>
                  <div className="tag-row" style={{ margin: 0 }}>
                    {project.tags?.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(16, 22, 34, 0.55)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "18px 20px",
                }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    display: "block",
                    marginBottom: 12,
                  }}>
                  Key Engineering Deliverables:
                </span>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: 12,
                  }}>
                  {project.features?.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: "0.83rem",
                        color: "#cbd5e1",
                        lineHeight: 1.5,
                      }}>
                      <CheckCircle2
                        size={16}
                        style={{
                          color: "var(--accent)",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer */}
        <div
          style={{
            padding: "14px 22px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(12, 16, 25, 0.88)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "0.74rem", color: "var(--muted-2)" }}>
              Keyboard:{" "}
              <kbd
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: "2px 5px",
                  borderRadius: 4,
                }}>
                ←
              </kbd>{" "}
              <kbd
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: "2px 5px",
                  borderRadius: 4,
                }}>
                →
              </kbd>{" "}
              to navigate,{" "}
              <kbd
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: "2px 5px",
                  borderRadius: 4,
                }}>
                ESC
              </kbd>{" "}
              to close
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 16px",
                  borderRadius: "9px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "var(--text)",
                  fontSize: "0.82rem",
                  fontWeight: 650,
                  transition: "all 0.2s ease",
                }}>
                <Github size={15} />
                <span>View Source Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 18px",
                  borderRadius: "9px",
                  background: "var(--accent)",
                  color: "#090b10",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 18px rgba(110, 231, 247, 0.35)",
                }}>
                <ExternalLink size={15} />
                <span>Launch Live Demo</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 14px",
                borderRadius: "9px",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "var(--muted)",
                fontSize: "0.82rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}>
              <X size={15} />
              <span>Close</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}

function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getFallbackImage = (project) => {
    if (project?.id === "devflow") return "/assets/img/devflow.png";
    if (project?.id === "boutique") return "/assets/img/project2.png";
    return "/assets/img/project3.jpg";
  };

  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title="Selected work and engineering showcases.">
      <div className="projects-grid">
        {projects.map((project, index) => {
          return (
            <motion.article
              className="project-card"
              key={project.name}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              onClick={() => setActiveModalProject(project)}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = getFallbackImage(project);
                  }}
                />
                <div className="project-number">0{index + 1}</div>
                <div className="project-view-badge">
                  <span>
                    <Eye size={14} />
                    Click to Open Showcase Popup
                  </span>
                </div>
              </div>

              <div className="project-body">
                {project.category && (
                  <span className="project-category">{project.category}</span>
                )}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span>+{project.tags.length - 4} more</span>
                  )}
                </div>

                <div
                  className="project-links"
                  onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="project-preview-btn"
                    onClick={() => setActiveModalProject(project)}>
                    <Sparkles size={14} />
                    <span>
                      Explore Showcase ({project.screenshots?.length || 1})
                    </span>
                  </button>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={15} /> Source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Interactive Popup Modal mounted directly to document.body via createPortal */}
      <AnimatePresence>
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}

function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 · Education"
      title="Education and foundation.">
      <div className="education-card">
        <div className="education-icon">
          <GraduationCap size={28} />
        </div>
        <div>
          <span className="eyebrow">Bachelor&apos;s Degree</span>
          <h3>{education.degree}</h3>
          <p>{education.institution}</p>
          <div className="education-meta">
            <span>CGPA: {education.cgpa}</span>
            <span>
              {education.school} · {education.schoolQualification}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\nReply to: ${data.get("email")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="06 · Contact"
      title="Let's build something useful.">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="lead">
            Have a project, role, or idea you&apos;d like to discuss? Send a
            message and I&apos;ll get back to you.
          </p>
          <div className="contact-list">
            <a href={`mailto:${profile.email}`}>
              <span>
                <Mail size={18} />
              </span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`}>
              <span>
                <Phone size={18} />
              </span>
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>
                <Linkedin size={18} />
              </span>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>
                <Github size={18} />
              </span>
              GitHub
            </a>
          </div>
          <a
            className="resume-link"
            href={profile.resume}
            target="_blank"
            rel="noreferrer">
            <Download size={17} /> Download resume <ArrowUpRight size={15} />
          </a>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell me a little about your project or opportunity..."
            />
          </label>
          <button className="btn btn-primary submit-btn" type="submit">
            <Send size={17} /> Send message
          </button>
          {sent && (
            <p className="form-note">
              Your email client should open with the message prepared.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Mythili P</strong>
          <span>Software Developer · MERN Stack Developer</span>
        </div>
        <div className="footer-social">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub">
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Mythili P. All rights reserved.</p>
      </div>
      <AnimatePresence>
        {top && (
          <motion.button
            className="back-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}>
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = ["intro", ...navItems.map(([id]) => id)];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
