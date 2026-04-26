"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "EduSpark Platform",
    desc: "AI-assisted EdTech platform with secure authentication, content workflows, and cloud deployment.",
    stack: "Django, Azure, PostgreSQL",
  },
  {
    title: "Expense Tracker",
    desc: "Personal finance app for expense capture, trend analysis, and lightweight reporting.",
    stack: "Flask, Charting, SQLite",
  },
  {
    title: "Sales Data System",
    desc: "Data processing pipeline that transforms raw records into actionable business dashboards.",
    stack: "Python, ETL, Analytics",
  },
];

const skills = ["Python", "Django", "REST APIs", "React", "MySQL", "Azure"];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function MagneticItem({ children, className = "", strength = 14 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.25 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * strength * 2);
    y.set(relY * strength * 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`magnetic-shell ${className}`.trim()}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const smoothMouseX = useSpring(mouseX, { stiffness: 90, damping: 18, mass: 0.3 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 90, damping: 18, mass: 0.3 });
  const spotlightX = useTransform(smoothMouseX, (value) => value - 190);
  const spotlightY = useTransform(smoothMouseY, (value) => value - 190);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  const handlePointerMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <div className="portfolio-shell" ref={containerRef} onPointerMove={handlePointerMove}>
      <motion.div className="scroll-progress" style={{ scaleX: progressScaleX }} />
      <motion.div
        className="cursor-spotlight"
        style={{ x: spotlightX, y: spotlightY }}
        aria-hidden="true"
      />

      <div className="grain-layer" aria-hidden="true" />
      <div className="orb orb-coral" aria-hidden="true" />
      <div className="orb orb-mint" aria-hidden="true" />

      <header className="top-nav">
        <p className="brand">Surajit Portfolio</p>
        <a className="ghost-link" href="mailto:surajitchakraborty823@gmail.com">
          Available for freelance
        </a>
      </header>

      <motion.main className="content-wrap" initial="hidden" animate="visible" variants={stagger}>
        <section className="hero-grid snap-section">
          <motion.div
            className="hero-copy"
            variants={fadeUp}
          >
            <p className="kicker typewriter">Backend Engineering</p>
            <motion.h1 className="headline-shine" variants={fadeUp}>
              Building resilient
              <br />
              digital products
            </motion.h1>
            <motion.p className="lede" variants={fadeUp}>
              I am Surajit Chakraborty, a Python backend developer crafting clean APIs,
              scalable architectures, and dependable deployments.
            </motion.p>

            <motion.div className="cta-row" variants={fadeUp}>
              <MagneticItem className="magnetic-cta" strength={10}>
                <a
                  href="https://github.com/Jit23456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid"
                >
                  View GitHub
                </a>
              </MagneticItem>
              <MagneticItem className="magnetic-cta" strength={10}>
                <a
                  href="https://www.linkedin.com/in/surajit-chakraborty-158047273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Connect on LinkedIn
                </a>
              </MagneticItem>
            </motion.div>

            <div className="hero-metrics">
              {[
                { label: "API-first", value: "20+ endpoints" },
                { label: "Deployment", value: "Cloud ready" },
                { label: "Focus", value: "Scalability" },
              ].map((item, index) => (
                <motion.div
                  className="metric-card"
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.14, duration: 0.55 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <MagneticItem className="hero-magnetic" strength={8}>
            <motion.aside
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5, rotate: 0.6 }}
          >
            <div className="portrait-card">
              <motion.img
                src="/photosurajit.jpg"
                alt="Surajit"
                className="profile-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
              />
              <p>Python Backend Developer</p>
              <p>Django and REST APIs</p>
            </div>
            </motion.aside>
          </MagneticItem>
        </section>

        <motion.section
          className="panel about-panel snap-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2>About</h2>
          <p>
            I focus on backend systems that are maintainable and performance-aware. My
            day-to-day work includes API design, database modeling, and deployment flows
            that keep products stable as they grow.
          </p>
        </motion.section>

        <motion.svg
          className="wave-divider"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            fill="rgba(11, 108, 255, 0.16)"
            initial={{
              d: "M0,58 C170,96 320,12 500,58 C680,102 830,18 1000,58 L1000,120 L0,120 Z",
            }}
            animate={{
              d: [
                "M0,58 C170,96 320,12 500,58 C680,102 830,18 1000,58 L1000,120 L0,120 Z",
                "M0,48 C200,10 340,100 500,52 C660,8 810,92 1000,44 L1000,120 L0,120 Z",
                "M0,58 C170,96 320,12 500,58 C680,102 830,18 1000,58 L1000,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        <section className="section-block snap-section">
          <div className="section-head">
            <h2>Selected Projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -9, scale: 1.015 }}
              >
                <p className="project-index">0{index + 1}</p>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span>{project.stack}</span>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          className="section-block snap-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <div className="section-head">
            <h2>Tech Stack</h2>
          </div>
          <div className="chip-grid">
            {skills.map((skill, index) => (
              <motion.span
                className="skill-chip"
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.svg
          className="wave-divider wave-divider-secondary"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            fill="rgba(255, 107, 44, 0.18)"
            initial={{
              d: "M0,52 C180,12 340,98 500,54 C660,12 820,100 1000,56 L1000,120 L0,120 Z",
            }}
            animate={{
              d: [
                "M0,52 C180,12 340,98 500,54 C660,12 820,100 1000,56 L1000,120 L0,120 Z",
                "M0,66 C160,106 340,18 500,62 C660,108 840,24 1000,66 L1000,120 L0,120 Z",
                "M0,52 C180,12 340,98 500,54 C660,12 820,100 1000,56 L1000,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </motion.svg>

        <motion.section
          className="contact-band snap-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2>Let us build something useful.</h2>
            <p>surajitchakraborty823@gmail.com</p>
          </div>
          <a className="btn btn-solid" href="mailto:surajitchakraborty823@gmail.com">
            Send Email
          </a>
        </motion.section>
      </motion.main>

      <footer className="site-footer">Surajit Chakraborty • Backend Developer</footer>
    </div>
  );
}
