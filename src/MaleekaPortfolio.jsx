import React, { useEffect, useRef, useState } from "react";

// AUTO-GENERATED IMAGE DATA
const IMG = {
  p1: "/p1.jpg",
  p2: "/p2.jpg",
  p3: "/p3.jpg",
  p4: "/p4.jpg",
  p5: "/p5.jpg",
  p6: "/p6.jpg",
  p7: "/p7.jpg",
  p8: "/p8.jpg",
  p9: "/p9.jpg",
  p10: "/p10.jpg",
  p11: "/p11.jpg",
  p12: "/p12.jpg",
  p13: "/p13.jpg",
  p14: "/p14.jpg",
};
const PROJECTS = [
  { src: IMG.p1, title: "6-Week Launch Campaign", tag: "Recruitment Campaign" },
  { src: IMG.p2, title: "Discipline Today, Success Tomorrow", tag: "Motivational Post" },
  { src: IMG.p3, title: "From Idea to Live Website", tag: "Process Poster" },
  { src: IMG.p4, title: "Your Vision. Our Code.", tag: "Brand Poster" },
  { src: IMG.p5, title: "Your Business Deserves Better", tag: "Landing Page Promo" },
  { src: IMG.p6, title: "AI for Business & Productivity", tag: "Course Poster" },
  { src: IMG.p7, title: "One Skill. Infinite Opportunities.", tag: "Enrollment Campaign" },
  { src: IMG.p8, title: "One Skill. Infinite Opportunities.", tag: "Campaign Variant" },
  { src: IMG.p9, title: "AI Automation — n8n & Make.com", tag: "Course Poster" },
  { src: IMG.p10, title: "Introduction to Machine Learning", tag: "Course Poster" },
  { src: IMG.p11, title: "Master In-Demand Digital Skills", tag: "Bundle Poster" },
  { src: IMG.p12, title: "2-Week Short Courses", tag: "Pricing Table" },
  { src: IMG.p13, title: "Master In-Demand Digital Skills", tag: "Dark Theme Variant" },
  { src: IMG.p14, title: "79th Independence Day", tag: "Festive Brand Post" },
];

const SKILLS = [
  { name: "Graphic Designing", icon: "graphic" },
  { name: "Canva Designing", icon: "canva" },
  { name: "Social Media Design", icon: "social" },
  { name: "Brand Identity", icon: "brand" },
];

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Icon({ name, className }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "wp":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M4 10.5 8.5 19M8.5 19 12 8.5M12 8.5 15.5 19M15.5 19 19 8.5" />
        </svg>
      );
    case "ux":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="12" rx="1.6" />
          <path d="M8 20.5h8M12 16.5v4" />
          <path d="M7.5 10.5l2.2 2.2 3-3.4 3.8 3.8" />
        </svg>
      );
    case "graphic":
      return (
        <svg {...common}>
          <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21" />
          <circle cx="12" cy="12" r="4.6" />
        </svg>
      );
    case "canva":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15.8 9.6c-.7-1.1-1.9-1.7-3.3-1.6-2.2.1-3.9 2-3.8 4.3.1 2.1 1.8 3.7 3.9 3.6 1.2 0 2.2-.5 2.9-1.4" />
        </svg>
      );
    case "shopify":
      return (
        <svg {...common}>
          <path d="M6 8.5 7 4.5h10l1 4" />
          <path d="M6 8.5h12l-1 12H7l-1-12Z" />
          <path d="M10 8.5a2 2 0 0 1 4 0" />
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <path d="M8 12.5a4 4 0 1 1 4 4M8 12.5a4 4 0 1 0 4-4M8 12.5H4.5M12 8.5V5M12 20v-3.5M16 12.5h3.5" />
          <circle cx="12" cy="12.5" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "brand":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-3.8L5.5 21V4.5a1 1 0 0 1 1-1Z" />
        </svg>
      );
    default:
      return null;
  }
}

function SocialIcon({ name, className }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 10.5v6M8 7.7v.01M12 16.5v-3.6c0-1.3.9-2.4 2.3-2.4 1.3 0 2 .9 2 2.4v3.6" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 0-2.8 17.5c.45.08.6-.2.6-.43v-1.7c-2.5.55-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.06-.55.06-.55.9.06 1.37.93 1.37.93.8 1.4 2.1 1 2.6.75.08-.6.3-1 .56-1.2-2-.23-4.1-1-4.1-4.4 0-1 .35-1.75.9-2.4-.1-.23-.4-1.15.1-2.4 0 0 .75-.25 2.5.9a8.6 8.6 0 0 1 4.5 0c1.75-1.15 2.5-.9 2.5-.9.5 1.25.2 2.17.1 2.4.56.65.9 1.4.9 2.4 0 3.4-2.1 4.15-4.1 4.4.3.28.6.8.6 1.6v2.4c0 .23.15.5.6.42A9 9 0 0 0 12 3Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
          <path d="M4.5 7 12 12.5 19.5 7" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M6 18.5 4.5 21l2.6-1.4A8 8 0 1 0 6 18.5Z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.5 0 1-.7.8-1.2l-.5-1.1a.9.9 0 0 0-1-.5l-.8.2a4.2 4.2 0 0 1-2.4-2.4l.2-.8a.9.9 0 0 0-.5-1L9.7 8.2c-.5-.2-1.2.3-1.2.8" />
        </svg>
      );
    default:
      return null;
  }
}

export default function MaleekaPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(href.replace("#", ""));
  };

  const loopA = [...PROJECTS, ...PROJECTS];
  const loopB = [...PROJECTS.slice().reverse(), ...PROJECTS.slice().reverse()];

  return (
    <div className="min-h-screen bg-white text-[#0E1912] antialiased" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* NAVBAR */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <nav
          className={`w-full max-w-2xl flex items-center justify-between gap-4 rounded-full border border-emerald-900/10 bg-white/85 backdrop-blur-md px-4 sm:px-6 py-2.5 transition-shadow ${
            scrolled ? "shadow-lg shadow-emerald-950/10" : "shadow-md shadow-emerald-950/5"
          }`}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 shrink-0">
            <span className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-500 flex items-center justify-center text-white font-display font-semibold text-sm">
              MB
            </span>
            <span className="hidden sm:block font-display font-semibold text-emerald-950 text-[15px] tracking-tight">
              Maleeka Batool
            </span>
          </a>

           <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-emerald-950/70 hover:text-emerald-950 hover:bg-emerald-50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden h-8 w-8 flex flex-col items-center justify-center gap-1 shrink-0"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-emerald-950 rounded-full transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-emerald-950 rounded-full transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-emerald-950 rounded-full transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, "#contact")}
        className="fixed top-4 right-5 z-50 hidden sm:inline-flex items-center rounded-full bg-emerald-800 hover:bg-emerald-900 text-white text-[13px] font-semibold px-4 py-2 transition-colors shadow-lg shadow-emerald-950/10"
      >
        Let's talk
      </a>

      {menuOpen && (
        <div className="fixed top-20 inset-x-4 z-40 md:hidden rounded-3xl border border-emerald-900/10 bg-white shadow-xl p-3 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="px-4 py-2.5 rounded-2xl text-sm font-medium text-emerald-950/80 hover:bg-emerald-50"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-36 sm:pt-44 pb-20 px-6">
        <div className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-emerald-100 blur-3xl opacity-70" />
        <div className="pointer-events-none absolute top-40 -left-40 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-800/10 px-3.5 py-1.5 text-[12px] font-semibold text-emerald-800 tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              WebEra Solutions PK · Graphic Designer
            </div>

            <h1 className="font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl mt-6 text-emerald-950">
              Maleeka Batool
            </h1>
            <p className="font-display font-medium text-xl sm:text-2xl text-emerald-700 mt-2">
              Graphic Designer &amp; Visual Storyteller
            </p>

            <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-emerald-950/70 max-w-xl">
              A creative designer with hands-on experience in graphic design, focused on turning ideas into clean, engaging, and purposeful visual experiences. Based in <strong className="text-emerald-900">Lahore, Pakistan</strong>, I bring a practical, detail-driven approach to every brief — from concept to final execution.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="rounded-full bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold px-6 py-3 transition-colors"
              >
                View my work
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="rounded-full border border-emerald-800/20 hover:border-emerald-800/40 text-emerald-900 text-sm font-semibold px-6 py-3 transition-colors"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
               {[
                 ["6", "Weeks hands-on"],
                 ["7+", "Core skills"],
                 ["14+", "Campaigns shipped"],
               ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display font-semibold text-2xl text-emerald-900">{n}</p>
                  <p className="text-[12px] text-emerald-950/50 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm self-center">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-700 via-emerald-500 to-emerald-200 opacity-40 blur-2xl" />
            <div className="relative rounded-[2.25rem] bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 p-1.5 shadow-2xl shadow-emerald-950/30">
              <div className="rounded-[1.9rem] aspect-[4/5] overflow-hidden relative">
                <img
                  src="/profile.png"
                  alt="Maleeka Batool"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white shadow-xl border border-emerald-900/10 px-4 py-3 flex items-center gap-2.5">
              <Icon name="graphic" className="h-5 w-5 text-emerald-700" />
              <div>
                <p className="text-xs font-semibold text-emerald-950">Graphic Design</p>
                <p className="text-[10px] text-emerald-950/50">+ Visual Branding</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-4 rounded-2xl bg-white shadow-xl border border-emerald-900/10 px-4 py-2.5">
              <p className="text-[10px] text-emerald-950/50">Currently</p>
              <p className="text-xs font-semibold text-emerald-950">Open to freelance &amp; paid projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="px-6 py-20 bg-emerald-50/60 border-y border-emerald-900/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div>
            <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">The story</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-emerald-950 mt-3 leading-tight">
              From curiosity<br />to craft.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-emerald-950/75">
            <p>
              Maleeka started out simply curious about what makes a brand's visuals
              feel trustworthy at first glance — the colors, the layout, the little
              details that make someone stop scrolling. That curiosity turned into a
              hands-on graphic design experience with
              <strong className="text-emerald-900"> WebEra Solutions PK</strong>, a creative studio where
              practical projects replaced theory from day one.
            </p>
            <p>
              She moved through the full creative pipeline — designing posters and
              social campaigns and producing brand visuals in Canva — building a
              practical, client-ready approach to visual communication.
            </p>
            <blockquote className="border-l-4 border-emerald-600 pl-4 py-1 font-display font-medium text-lg text-emerald-900">
              "Discipline today, success tomorrow. No magic — just showing up and
              designing."
            </blockquote>
            <p>
              That mindset now shapes how she approaches every project: understand
              the goal, design with intent, and ship something real.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">What I bring</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-emerald-950 mt-3">
              Skills, sharpened on real work
            </h2>
          <p className="mt-4 text-emerald-950/65 text-[15px] leading-relaxed">
            Every skill below was practiced on live client and creative projects,
            not just tutorials.
          </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.map((s, i) => (
              <div
                key={s.name}
                className={`group rounded-2xl border border-emerald-900/10 p-5 hover:border-emerald-700/30 hover:shadow-lg hover:shadow-emerald-900/5 transition-all ${
                  i % 3 === 0 ? "bg-emerald-950 text-white" : "bg-white text-emerald-950"
                }`}
              >
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${i % 3 === 0 ? "bg-white/10" : "bg-emerald-50"}`}>
                  <Icon name={s.icon} className={`h-5 w-5 ${i % 3 === 0 ? "text-emerald-300" : "text-emerald-700"}`} />
                </div>
                <p className="font-semibold text-sm leading-snug">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS - INFINITE CAROUSEL */}
      <section id="projects" className="py-20 bg-emerald-950 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-[12px] font-semibold text-emerald-400 uppercase tracking-wide">Selected work</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white mt-3">
              Projects
            </h2>
          <p className="mt-3 text-emerald-100/60 text-[15px] max-w-md">
            Campaign designs, posters and brand visuals produced during hands-on
            graphic design work.
          </p>
          </div>
          <span className="rounded-full border border-emerald-400/20 text-emerald-300 text-xs font-medium px-4 py-2">
            14 pieces &middot; 6 weeks
          </span>
        </div>

        <div className="space-y-6">
          <div className="marquee-row overflow-hidden">
            <div className="marquee-track marquee-left">
              {loopA.map((p, idx) => (
                <ProjectCard key={`a-${idx}`} p={p} />
              ))}
            </div>
          </div>
          <div className="marquee-row overflow-hidden">
            <div className="marquee-track marquee-right">
              {loopB.map((p, idx) => (
                <ProjectCard key={`b-${idx}`} p={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIALS / CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">Let's connect</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-emerald-950 mt-3">
            Have a project in mind?
          </h2>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-emerald-950/50 text-sm">
            <Icon name="ux" className="hidden" />
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 19 9.8C19 14.9 12 21 12 21Z" />
              <circle cx="12" cy="9.6" r="2.3" />
            </svg>
            Lahore, Pakistan
          </p>
          <p className="mt-4 text-emerald-950/65 text-[15px] max-w-lg mx-auto">
            Available for freelance and paid design opportunities. Reach out on
            any platform below.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/maleeka-batool-/" },
              { name: "whatsapp", label: "WhatsApp", href: "https://wa.me/923078865313" },
              { name: "mail", label: "Email", href: "mailto:batoolmaleeka7@gmail.com" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="group flex items-center gap-2.5 rounded-full border border-emerald-900/10 hover:border-emerald-700/40 hover:bg-emerald-50 px-5 py-3 transition-colors"
              >
                <SocialIcon name={s.name} className="h-4.5 w-4.5 text-emerald-800" />
                <span className="text-sm font-medium text-emerald-950">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-900/10 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-500 flex items-center justify-center text-white font-display font-semibold text-xs">
              MB
            </span>
            <span className="text-sm font-semibold text-emerald-950">Maleeka Batool</span>
          </div>
          <p className="text-[13px] text-emerald-950/50">
            &copy; 2026 Maleeka Batool. Built with care.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <div className="w-64 sm:w-72 shrink-0 mx-3 rounded-2xl overflow-hidden bg-emerald-900 border border-white/5 group">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={p.src}
          alt={p.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-300">{p.tag}</p>
          <p className="text-white text-sm font-semibold leading-snug mt-1">{p.title}</p>
        </div>
      </div>
    </div>
  );
}
