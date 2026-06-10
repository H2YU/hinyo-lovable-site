import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Menu, X } from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Spiral Tower", id: "spiral-tower" },
  { label: "Equipment", id: "equipment" },
  { label: "Studio Setup", id: "studio-setup" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const collections = [
  ["Reformers", "Precision training platforms for private studios and commercial rooms."],
  ["Cadillac", "Full-body tower work with premium materials and studio-grade presence."],
  ["Chairs", "Compact, powerful equipment for strength, control, and space efficiency."],
  ["Barrels", "Supportive forms for mobility, alignment, and studio programming."],
];

const projects = ["Private Studio", "Boutique Chain", "Wellness Club"];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <button className="brand" onClick={() => scrollToSection("home")} aria-label="HINYO home">
        HINYO
      </button>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              scrollToSection(item.id);
              setOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function MediaPlaceholder({ className = "", label = "Image placeholder" }) {
  return (
    <div className={`media-placeholder ${className}`} aria-label={label}>
      <div className="media-inner" />
    </div>
  );
}

function App() {
  const [formState, setFormState] = useState("");

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Movement Space Brand</p>
            <h1>Create Better Movement Spaces</h1>
            <p className="lead">
              Premium Pilates systems, studio planning, and B2B supply support for refined
              movement spaces around the world.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollToSection("spiral-tower")}>
                Explore Spiral Tower
              </button>
              <button className="button secondary" onClick={() => scrollToSection("contact")}>
                Request Catalog
              </button>
            </div>
          </div>
          <MediaPlaceholder className="hero-media video" label="Premium Pilates studio video placeholder" />
        </section>

        <section className="section split" id="spiral-tower">
          <div>
            <p className="eyebrow">Featured Innovation</p>
            <h2>HINYO Spiral Tower System</h2>
            <p>
              The core HINYO product: a sculptural tower system designed for elegant studios,
              focused training, and flexible equipment planning.
            </p>
            <button className="text-link" onClick={() => scrollToSection("contact")}>
              Request Spiral Tower Details <ArrowRight size={16} />
            </button>
          </div>
          <MediaPlaceholder className="tower tall" label="HINYO Spiral Tower product placeholder" />
        </section>

        <section className="section feature-row">
          <div>
            <p className="eyebrow">Core Product</p>
            <h2>Designed as the studio centerpiece</h2>
            <p>
              A refined Pilates tower concept for studios that need visual calm, training
              versatility, and a memorable signature product.
            </p>
          </div>
          <div className="feature-list">
            <article>
              <span>01</span>
              <p>Elegant vertical silhouette for premium room layouts.</p>
            </article>
            <article>
              <span>02</span>
              <p>Flexible training zones for private and group programming.</p>
            </article>
            <article>
              <span>03</span>
              <p>Configurable finishes for different studio identities.</p>
            </article>
          </div>
        </section>

        <section className="section" id="equipment">
          <div className="section-heading">
            <p className="eyebrow">Equipment Collections</p>
            <h2>Built for complete Pilates spaces</h2>
          </div>
          <div className="collection-grid">
            {collections.map(([title, copy]) => (
              <article className="collection-card" key={title}>
                <MediaPlaceholder className="card-media" label={`${title} placeholder`} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-band" id="studio-setup">
          <div>
            <p className="eyebrow">Studio Setup Solutions</p>
            <h2>From equipment mix to movement flow</h2>
            <p>
              HINYO supports B2B partners with product selection, room planning, color direction,
              and catalog-ready equipment packages.
            </p>
          </div>
          <button className="button light" onClick={() => scrollToSection("contact")}>
            Plan a Studio
          </button>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Global Projects</p>
            <h2>Quietly premium spaces, built for daily practice</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project}>
                <MediaPlaceholder className="project-media" label={`${project} placeholder`} />
                <span>{project}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-preview" id="about">
          <div>
            <p className="eyebrow">About HINYO</p>
            <h2>A brand for better movement environments</h2>
            <p>
              HINYO designs Pilates equipment around the way studios are experienced: calm
              proportions, tactile surfaces, practical operation, and a premium visual language for
              modern training spaces.
            </p>
          </div>
          <div className="values-panel">
            <article>
              <span>Premium calm</span>
              <p>Minimal forms, balanced proportions, and studio-ready finishes.</p>
            </article>
            <article>
              <span>B2B clarity</span>
              <p>Catalog, product, and setup support for professional buyers.</p>
            </article>
            <article>
              <span>Signature innovation</span>
              <p>The Spiral Tower System as a recognizable core product.</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact / Request Catalog</p>
            <h2>Tell us about your movement space</h2>
            <p>
              Request catalog information, Spiral Tower details, or a studio setup recommendation
              for your market.
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setFormState("Thank you. Your catalog request is ready to connect to email or CRM.");
            }}
          >
            <label>
              Name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Company / Studio
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              Country / Market
              <input name="country" autoComplete="country-name" />
            </label>
            <label>
              Interest
              <select name="interest">
                <option>HINYO Spiral Tower System</option>
                <option>Full equipment catalog</option>
                <option>Studio setup solution</option>
                <option>Distribution partnership</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Market, studio size, target products, timeline" />
            </label>
            <button className="button primary" type="submit">
              Request Catalog
            </button>
            <p className="form-note" role="status">
              {formState}
            </p>
          </form>
        </section>
      </main>
      <footer className="site-footer">
        <span>HINYO</span>
        <span>Movement Space Brand</span>
        <span>Create Better Movement Spaces</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
