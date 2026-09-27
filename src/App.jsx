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

function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  const handleOpenModal = (project) => {
    setActiveModalProject(project);
    setActiveScreenshotIdx(0);
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
  };

  // Lock body scrolling while popup modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProject]);

  // Keyboard navigation: ESC to close, Left/Right arrow keys to cycle screenshots
  useEffect(() => {
    if (!activeModalProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowLeft") {
        const count = activeModalProject.screenshots?.length || 1;
        setActiveScreenshotIdx((prev) => (prev > 0 ? prev - 1 : count - 1));
      } else if (e.key === "ArrowRight") {
        const count = activeModalProject.screenshots?.length || 1;
        setActiveScreenshotIdx((prev) => (prev < count - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalProject]);

  const getFallbackImage = (project) => {
    if (project?.id === "devflow") return "/assets/img/devflow.png";
    if (project?.id === "boutique") return "/assets/img/project2.png";
    return "/assets/img/project3.jpg";
  };

  const screenshots = activeModalProject?.screenshots?.length
    ? activeModalProject.screenshots
    : activeModalProject
      ? [
          {
            url: activeModalProject.image,
            title: activeModalProject.name,
            description: activeModalProject.description,
          },
        ]
      : [];

  const currentScreenshot = screenshots[activeScreenshotIdx] || screenshots[0];

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
              onClick={() => handleOpenModal(project)}>
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
                    onClick={() => handleOpenModal(project)}>
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

      {/* Interactive Popup Modal Dialog */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="project-modal-backdrop" onClick={handleCloseModal}>
            <motion.div
              className="project-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}>
              {/* Modal Header */}
              <div className="project-modal-header">
                <div className="modal-header-info">
                  <span className="modal-category-badge">
                    <Sparkles size={13} />
                    {activeModalProject.category || "Project Case Study"}
                  </span>
                  <h3 id="modal-project-title">{activeModalProject.name}</h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={handleCloseModal}
                  title="Close popup (Esc)">
                  <span>Close</span>
                  <kbd>ESC</kbd>
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="project-modal-body">
                {/* Left Column: Interactive Screenshot Carousel Stage */}
                <div className="modal-stage">
                  <div className="modal-img-box">
                    <img
                      src={currentScreenshot?.url || activeModalProject.image}
                      alt={currentScreenshot?.title || activeModalProject.name}
                      key={currentScreenshot?.url}
                      onError={(e) => {
                        e.currentTarget.src =
                          getFallbackImage(activeModalProject);
                      }}
                    />
                    {screenshots.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="modal-nav-btn prev"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveScreenshotIdx((prev) =>
                              prev > 0 ? prev - 1 : screenshots.length - 1,
                            );
                          }}
                          aria-label="Previous screenshot">
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          type="button"
                          className="modal-nav-btn next"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveScreenshotIdx((prev) =>
                              prev < screenshots.length - 1 ? prev + 1 : 0,
                            );
                          }}
                          aria-label="Next screenshot">
                          <ChevronRight size={20} />
                        </button>
                        <div className="modal-slide-counter">
                          {activeScreenshotIdx + 1} / {screenshots.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Screenshot Caption */}
                  <div className="modal-caption">
                    <h4>
                      <Sparkles size={16} color="var(--accent)" />
                      <span>
                        {currentScreenshot?.title || activeModalProject.name}
                      </span>
                    </h4>
                    {currentScreenshot?.description && (
                      <p>{currentScreenshot.description}</p>
                    )}
                  </div>

                  {/* Screenshot Thumbnails Strip */}
                  {screenshots.length > 1 && (
                    <div className="modal-thumbs">
                      {screenshots.map((s, idx) => (
                        <button
                          key={s.title || idx}
                          type="button"
                          className={`modal-thumb-btn ${
                            idx === activeScreenshotIdx ? "active" : ""
                          }`}
                          onClick={() => setActiveScreenshotIdx(idx)}>
                          <Eye size={12} />
                          <span>{s.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Architecture & Engineering Details */}
                <div className="modal-details">
                  <div className="modal-desc-box">
                    <h4>Architecture &amp; System Overview</h4>
                    <p>{activeModalProject.description}</p>
                  </div>

                  <div>
                    <span className="modal-section-label">
                      TECHNOLOGIES &amp; LIBRARIES:
                    </span>
                    <div className="tag-row" style={{ margin: 0 }}>
                      {activeModalProject.tags?.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="modal-section-label">
                      KEY CAPABILITIES &amp; DELIVERABLES:
                    </span>
                    <ul className="modal-highlights">
                      {activeModalProject.features?.map((feat) => (
                        <li key={feat}>
                          <CheckCircle2 size={16} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer Action Buttons */}
              <div className="project-modal-footer">
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-cta-secondary">
                    <Github size={16} />
                    <span>View Source Code</span>
                  </a>
                )}
                {activeModalProject.demo && (
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-cta-primary">
                    <ExternalLink size={16} />
                    <span>Launch Live Demo</span>
                  </a>
                )}
                <button
                  type="button"
                  className="modal-cta-close"
                  onClick={handleCloseModal}>
                  <X size={15} />
                  <span>Close Window</span>
                </button>
              </div>
            </motion.div>
          </div>
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
