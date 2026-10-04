import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
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
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
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
      variants={staggerContainer}>
      <div className="container">
        <div className="section-heading">
          <motion.span variants={fadeUp} className="eyebrow">
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp}>{title}</motion.h2>
          <motion.div
            className="heading-line"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          />
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
          <motion.span
            className="brand-mark"
            whileHover={{ rotate: 360, scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            M
          </motion.span>
          <span>
            <strong>Mythili</strong>
            <small>Software Developer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <motion.a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}>
              {label}
            </motion.a>
          ))}
          <motion.a
            className="nav-resume"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            Resume <ArrowUpRight size={15} />
          </motion.a>
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
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: "easeOut" }}>
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
  }, [roles.length]);

  return (
    <section id="intro" className="hero">
      <div className="hero-grid" />
      <motion.div
        className="hero-glow glow-one"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-glow glow-two"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.07, 0.15, 0.07],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="container hero-inner">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hero-copy">
          <motion.div variants={fadeUp} className="availability">
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />{" "}
            Open to opportunities
          </motion.div>
          <motion.p variants={fadeUp} className="hero-kicker">Hello, I&apos;m</motion.p>
          <motion.h1 variants={fadeUp}>
            Mythili <span>P.</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="hero-role">
            <span>A </span>
            <AnimatePresence mode="wait">
              <motion.strong
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.32 }}>
                {roles[roleIndex]}
              </motion.strong>
            </AnimatePresence>
          </motion.div>
          <motion.p variants={fadeUp} className="hero-description">
            Software Developer building responsive web applications and RESTful
            APIs with React, Laravel, Node.js, and modern JavaScript
            technologies.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <motion.a
              className="btn btn-primary"
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              View Projects <ArrowDown size={17} />
            </motion.a>
            <motion.a
              className="btn btn-secondary"
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              Contact Me <Mail size={17} />
            </motion.a>
            <motion.a
              className="btn btn-resume"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Download size={16} /> Resume
            </motion.a>
            <motion.a
              className="icon-link"
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Github size={20} />
            </motion.a>
            <motion.a
              className="icon-link"
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-meta">
            <span>
              <MapPin size={15} /> {profile.location}
            </span>
            <span>
              <Code2 size={15} /> Full Stack Development
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div
            className="code-card"
            whileHover={{ y: -6, rotate: 0, boxShadow: "0 35px 100px rgba(0,0,0,0.5)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}>
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
          </motion.div>
          <motion.div
            className="floating-chip chip-react"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.12, y: -14 }}>
            <Code2 size={16} /> React.js
          </motion.div>
          <motion.div
            className="floating-chip chip-api"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            whileHover={{ scale: 1.12, y: 14 }}>
            <Server size={16} /> REST APIs
          </motion.div>
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
        <motion.div variants={fadeUp} className="about-copy">
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
        </motion.div>
        <motion.div variants={fadeUp} className="about-panel">
          <motion.div
            className="stat"
            whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.02)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <strong>2.5+</strong>
            <span>Years of professional experience</span>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.02)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <strong>Full Stack</strong>
            <span>Frontend, backend &amp; API development</span>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.02)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <strong>Modern Web</strong>
            <span>Responsive, accessible interfaces</span>
          </motion.div>
        </motion.div>
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
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.title] || Code2;
          return (
            <motion.article
              className="skill-group"
              key={group.title}
              variants={fadeUp}
              whileHover={{
                y: -6,
                borderColor: "rgba(110, 231, 247, 0.35)",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}>
              <div className="skill-heading">
                <motion.span
                  className="skill-icon"
                  whileHover={{ rotate: 10, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                  <Icon size={20} />
                </motion.span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      borderColor: "rgba(110, 231, 247, 0.6)",
                      color: "#ffffff",
                      backgroundColor: "rgba(110, 231, 247, 0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    {item}
                  </motion.span>
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
        {experiences.map((exp) => (
          <motion.article
            className="timeline-item"
            key={exp.company}
            variants={fadeUp}>
            <motion.div
              className="timeline-dot"
              animate={{
                boxShadow: [
                  "0 0 0 4px rgba(110, 231, 247, 0.08)",
                  "0 0 0 9px rgba(110, 231, 247, 0.25)",
                  "0 0 0 4px rgba(110, 231, 247, 0.08)",
                ],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="experience-card"
              whileHover={{
                y: -4,
                borderColor: "rgba(110, 231, 247, 0.35)",
                boxShadow: "0 18px 50px rgba(0, 0, 0, 0.45)",
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}>
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
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      borderColor: "rgba(110, 231, 247, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    {tech}
                  </motion.span>
                ))}
              </div>
              <ul>
                {exp.bullets.map((bullet) => (
                  <motion.li
                    key={bullet}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}>
                    <CheckCircle2 size={15} /> <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
          <AnimatePresence mode="wait">
            {activeTab === "gallery" ? (
              /* Gallery Stage */
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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

                  {/* Screenshot Frame with Cross-Fade */}
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
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentScreenshot.url}
                        src={currentScreenshot.url}
                        alt={currentScreenshot.title}
                        initial={{ opacity: 0, scale: 0.985 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.01 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
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
                    </AnimatePresence>

                    {/* Navigation Chevrons */}
                    {screenshots.length > 1 && (
                      <>
                        <motion.button
                          type="button"
                          onClick={() =>
                            setActiveScreenshotIdx((prev) =>
                              prev > 0 ? prev - 1 : screenshots.length - 1,
                            )
                          }
                          aria-label="Previous screenshot"
                          whileHover={{
                            scale: 1.12,
                            backgroundColor: "rgba(110, 231, 247, 0.22)",
                          }}
                          whileTap={{ scale: 0.92 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
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
                            boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                          }}>
                          <ChevronLeft size={22} />
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={() =>
                            setActiveScreenshotIdx((prev) =>
                              prev < screenshots.length - 1 ? prev + 1 : 0,
                            )
                          }
                          aria-label="Next screenshot"
                          whileHover={{
                            scale: 1.12,
                            backgroundColor: "rgba(110, 231, 247, 0.22)",
                          }}
                          whileTap={{ scale: 0.92 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
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
                            boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                          }}>
                          <ChevronRight size={22} />
                        </motion.button>
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
                        <motion.button
                          key={s.title || idx}
                          type="button"
                          onClick={() => setActiveScreenshotIdx(idx)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
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
                        </motion.button>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ) : (
              /* Overview & Architecture Stage */
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
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
              </motion.div>
            )}
          </AnimatePresence>
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
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.04,
                  y: -1,
                  boxShadow: "0 6px 25px rgba(110, 231, 247, 0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
              </motion.a>
            )}
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
            </motion.button>
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
              whileHover={{
                y: -9,
                borderColor: "rgba(110, 231, 247, 0.4)",
                boxShadow:
                  "0 22px 60px rgba(0, 0, 0, 0.55), 0 0 30px rgba(110, 231, 247, 0.12)",
              }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
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
                <motion.div
                  className="project-view-badge"
                  animate={{ opacity: [0.9, 1, 0.9] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}>
                  <span>
                    <Eye size={14} />
                    Click to Open Showcase Popup
                  </span>
                </motion.div>
              </div>

              <div className="project-body">
                {project.category && (
                  <span className="project-category">{project.category}</span>
                )}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.slice(0, 4).map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{
                        scale: 1.07,
                        borderColor: "rgba(110, 231, 247, 0.5)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 4 && (
                    <span>+{project.tags.length - 4} more</span>
                  )}
                </div>

                <div
                  className="project-links"
                  onClick={(e) => e.stopPropagation()}>
                  <motion.button
                    type="button"
                    className="project-preview-btn"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    onClick={() => setActiveModalProject(project)}>
                    <Sparkles size={14} />
                    <span>
                      Explore Showcase ({project.screenshots?.length || 1})
                    </span>
                  </motion.button>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.08, y: -1 }}
                      whileTap={{ scale: 0.94 }}>
                      <Github size={15} /> Source
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.08, y: -1 }}
                      whileTap={{ scale: 0.94 }}>
                      <ExternalLink size={15} /> Live demo
                    </motion.a>
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
      <motion.div
        className="education-card"
        variants={fadeUp}
        whileHover={{
          y: -4,
          borderColor: "rgba(110, 231, 247, 0.35)",
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}>
        <motion.div
          className="education-icon"
          whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}>
          <GraduationCap size={28} />
        </motion.div>
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
      </motion.div>
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
        <motion.div variants={fadeUp} className="contact-copy">
          <p className="lead">
            Have a project, role, or idea you&apos;d like to discuss? Send a
            message and I&apos;ll get back to you.
          </p>
          <div className="contact-list">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ x: 5, color: "var(--accent)" }}
              transition={{ duration: 0.2 }}>
              <span>
                <Mail size={18} />
              </span>
              {profile.email}
            </motion.a>
            <motion.a
              href={`tel:${profile.phone}`}
              whileHover={{ x: 5, color: "var(--accent)" }}
              transition={{ duration: 0.2 }}>
              <span>
                <Phone size={18} />
              </span>
              {profile.phone}
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 5, color: "var(--accent)" }}
              transition={{ duration: 0.2 }}>
              <span>
                <Linkedin size={18} />
              </span>
              LinkedIn
            </motion.a>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 5, color: "var(--accent)" }}
              transition={{ duration: 0.2 }}>
              <span>
                <Github size={18} />
              </span>
              GitHub
            </motion.a>
          </div>
          <motion.a
            className="resume-link"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Download size={17} /> Download resume <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>
        <motion.form variants={fadeUp} className="contact-form" onSubmit={submit}>
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
          <motion.button
            className="btn btn-primary submit-btn"
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Send size={17} /> Send message
          </motion.button>
          {sent && (
            <p className="form-note">
              Your email client should open with the message prepared.
            </p>
          )}
        </motion.form>
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
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.92 }}>
            <Github size={18} />
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.92 }}>
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.92 }}>
            <Mail size={18} />
          </motion.a>
        </div>
        <p>© {new Date().getFullYear()} Mythili P. All rights reserved.</p>
      </div>
      <AnimatePresence>
        {top && (
          <motion.button
            className="back-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            whileHover={{ scale: 1.14, y: -4 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}>
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

function App() {
  const [active, setActive] = useState("about");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

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
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, transformOrigin: "0%" }}
      />
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
