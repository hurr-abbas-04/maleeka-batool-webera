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
  { name: "Personal Branding", icon: "person" },
  { name: "LinkedIn Design", icon: "linkedin" },
  { name: "Marketing Visuals", icon: "chart" },
];

const SERVICES = [
  { title: "Personal Branding", desc: "Clean, memorable visual identity that makes you look premium and feel professional." },
  { title: "LinkedIn Banners", desc: "Positioning-first banners that answer 'why should I care' in under 3 seconds." },
  { title: "LinkedIn Carousels", desc: "Story-driven, scroll-stopping carousels built for attention, clarity, and saves." },
  { title: "Social Media Design", desc: "Consistent, on-brand posts for LinkedIn, Instagram and feeds that actually stand out." },
  { title: "Canva Design", desc: "Canva-friendly templates and visuals your team can edit, reuse, and ship fast." },
  { title: "Brand & Marketing Visuals", desc: "Strategic visuals: posters, promos, campaign creatives, launch assets." },
];

const EXPERIENCE = [
  {
    role: "Graphic Designer",
    company: "Intellignce",
    type: "Full-time",
    period: "Sep 2025 – Feb 2026",
    duration: "6 mos",
    location: "Lahore, Punjab, Pakistan",
    highlights: ["Brand & social design deliverables", "Client-facing creative execution", "Canva, Adobe Illustrator + Adobe Photoshop"],
  },
  {
    role: "Graphic Designer",
    company: "Zohaib Dzin",
    type: "Internship",
    period: "Jun 2026 – Jul 2026",
    duration: "2 mos",
    location: null,
    highlights: ["Campaign visuals & social creatives", "Brand direction & consistent layouts"],
  },
  {
    role: "Graphic Designer",
    company: "WebEra Solutions PK",
    type: "Internship",
    period: "Jul 2026 – Sep 2026",
    duration: "3 mos",
    location: null,
    highlights: ["14+ campaign projects shipped", "Team workflow, feedback & deadlines", "Real client briefs from concept to final"],
  },
];

const EDUCATION = [
  { school: "Lahore College for Women University", degree: "Graphic Design", note: null },
  { school: "DigiSkills", degree: "Graphic Designing Certificate", note: "Certified" },
];

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
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
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20.5c1.5-3.2 4.5-5 8-5s6.5 1.8 8 5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 10.5v6M8 7.7v.01M12 16.5v-3.6c0-1.3.9-2.4 2.3-2.4 1.3 0 2 .9 2 2.4v3.6" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
          <path d="M7.5 16.5l1.7-5.5 1.8 5.5M8.1 14.5h2.4M14.2 11h2.1M14.2 16.5V11M14.2 13.7h2.1" />
        </svg>
      );
    case "ps":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
          <path d="M6.5 16.5V7.5h2.8c1.9 0 3.2 1.2 3.2 3S11.2 13.5 9.3 13.5h-1v3h-1.8ZM8.3 11.7h1c.9 0 1.5-.5 1.5-1.2s-.6-1.2-1.5-1.2h-1v2.4ZM14.5 16.5l1.8-5.5 1.7 5.5M14.9 14.5h2.6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4.5 19.5h15M6.5 19.5V13M10 19.5V8M13.5 19.5V11M17 19.5V5.5" />
          <path d="M6.5 10.5c1.2-.5 2.5-1.2 3.5-2.5 1.3-1.6 2.4-2.6 4-3.8" />
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
        <i
          className={`fa-brands fa-whatsapp ${className}`}
          style={{ color: "rgb(255, 255, 255)" }}
        />
      );
    default:
      return null;
  }
}

export default function MaleekaPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewProject, setPreviewProject] = useState(null);
  const [zoom, setZoom] = useState(1);
  const imgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (previewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (!previewOpen) return;
      if (e.key === "Escape") closePreview();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 4));
      if (e.key === "-") setZoom((z) => Math.max(0.5, z - 0.25));
      if (e.key === "0") setZoom(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [previewOpen]);

  const openPreview = (p) => {
    setPreviewProject(p);
    setZoom(1);
    setPreviewOpen(true);
  };

  const closePreview = () => {
    setPreviewOpen(false);
    setTimeout(() => {
      setPreviewProject(null);
    }, 250);
  };

  const zoomIn = () => setZoom((z) => Math.min(4, z + 0.25));
  const zoomOut = () => setZoom((z) => Math.max(0.5, z - 0.25));
  const zoomReset = () => setZoom(1);

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
      <header className="fixed top-4 inset-x-0 z-50 flex items-center gap-4 px-4 sm:px-5">
        <div className="hidden sm:block shrink-0 w-[150px]" aria-hidden="true" />
        <div className="flex-1 flex justify-center">
          <nav
            className={`w-full max-w-3xl flex items-center justify-between gap-4 rounded-full border border-emerald-900/10 bg-white/85 backdrop-blur-md px-4 sm:px-6 py-2.5 transition-shadow ${
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
        </div>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden sm:inline-flex shrink-0 items-center rounded-full bg-emerald-800 hover:bg-emerald-900 text-white text-[13px] font-semibold px-4 py-2.5 transition-colors shadow-lg shadow-emerald-950/10"
        >
          Let's talk
        </a>
      </header>

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
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Open to freelance &amp; paid projects
            </div>

            <h1 className="font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl mt-6 text-emerald-950">
              Maleeka Batool ✪
            </h1>
            <p className="font-display font-medium text-lg sm:text-xl text-emerald-700 mt-3 max-w-xl">
              I help founders &amp; brands look <strong className="text-emerald-900 font-semibold">premium</strong> through strategic design.
            </p>
            <p className="text-[15px] sm:text-base text-emerald-700/80 mt-1 font-medium">
              Graphic Designer &amp; Canva Specialist · Personal Branding · LinkedIn Banners, Carousels &amp; Social Media Design
            </p>

            <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-emerald-950/70 max-w-xl">
              Good design gets noticed. <strong className="text-emerald-900">Great design gets remembered.</strong> I focus on your message, audience, and brand before designing — because visuals should do more than look good. They should <strong className="text-emerald-900">communicate and build trust.</strong>
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
                 ["850+", "LinkedIn followers"],
                 ["7+", "Core design skills"],
                 ["3 roles", "Design experience"],
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
              <Icon name="brand" className="h-5 w-5 text-emerald-700" />
              <div>
                <p className="text-xs font-semibold text-emerald-950">Personal Branding</p>
                <p className="text-[10px] text-emerald-950/50">+ LinkedIn Design</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-4 rounded-2xl bg-white shadow-xl border border-emerald-900/10 px-4 py-2.5">
              <p className="text-[10px] text-emerald-950/50">Currently</p>
              <p className="text-xs font-semibold text-emerald-950">Lahore, Punjab, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section id="story" className="px-6 py-20 bg-emerald-50/60 border-y border-emerald-900/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div>
            <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">About</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-emerald-950 mt-3 leading-tight">
              Simple.<br />Strategic.<br />Impactful.
            </h2>
            <div className="mt-6 space-y-3">
              {EDUCATION.map((e) => (
                <div key={e.school} className="rounded-2xl border border-emerald-900/10 bg-white p-4">
                  <p className="text-[12px] text-emerald-700 font-semibold uppercase tracking-wide">Education</p>
                  <p className="text-emerald-950 font-semibold mt-1 text-[15px]">{e.school}</p>
                  <p className="text-emerald-950/60 text-[13px] mt-0.5">{e.degree}{e.note ? ` · ${e.note}` : ""}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-emerald-950/75">
            <p>
              <strong className="text-emerald-900">Good design gets noticed. Great design gets remembered.</strong><br />
              I help founders &amp; brands look premium through clean, strategic, and intentional design.
            </p>
            <p>
              My goal is simple: Make your brand look <strong className="text-emerald-900">professional, consistent, and impossible to ignore.</strong>
              I focus on your message, audience, and brand before designing — because visuals should do more than look good. They should communicate and build trust.
            </p>
            <blockquote className="border-l-4 border-emerald-600 pl-4 py-1 font-display font-medium text-lg text-emerald-900">
              "Discipline today, success tomorrow. No magic — just showing up and designing."
            </blockquote>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                ["✅ Clean & premium designs"],
                ["✅ Strategic visual direction"],
                ["✅ Consistent branding"],
                ["✅ Strong typography & layouts"],
                ["✅ Canva-friendly deliverables"],
                ["✅ Message-driven visuals"],
              ].map(([t]) => (
                <p key={t} className="text-[14px] text-emerald-950/80 font-medium">{t}</p>
              ))}
            </div>
            <p className="pt-2">
              Whether you're building a personal brand, growing a business, or upgrading your online presence, I can help turn ideas into visuals that stand out.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">What I do</p>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-emerald-950 mt-3">
                Services built for impact
              </h2>
              <p className="mt-4 text-emerald-950/65 text-[15px] leading-relaxed">
                Design-for-attention, position-for-trust, convert-with-clarity. Each service below is delivered with real-project rigor.
              </p>
            </div>
            <span className="rounded-full border border-emerald-700/20 bg-emerald-50 text-emerald-800 text-xs font-medium px-4 py-2">
              6 services · 9 skills
            </span>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`group relative rounded-2xl border p-6 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden ${
                  i % 3 === 0
                    ? "bg-emerald-950 text-white border-emerald-900/60 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-900/40"
                    : "bg-white text-emerald-950 border-emerald-900/10 hover:border-emerald-600/40 hover:shadow-lg hover:shadow-emerald-600/10"
                }`}
              >
                <div
                  className={`absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    i % 3 === 0 ? "bg-emerald-500/20" : "bg-emerald-400/20"
                  }`}
                />
                <div className={`relative h-11 w-11 rounded-xl flex items-center justify-center mb-5 shadow-lg overflow-hidden ${
                  i % 3 === 0
                    ? "bg-gradient-to-br from-emerald-400 to-emerald-700"
                    : "bg-gradient-to-br from-emerald-500 to-emerald-800"
                }`}>
                  <span className="relative text-white font-display font-bold">{i + 1}</span>
                </div>
                <p className="relative font-semibold text-[16px] leading-snug">{s.title}</p>
                <p className={`relative text-[14px] mt-2 leading-relaxed ${i % 3 === 0 ? "text-emerald-100/75" : "text-emerald-950/65"}`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-20 bg-emerald-50/60 border-y border-emerald-900/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">Real-world experience</p>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-emerald-950 mt-3">
                Worked with 3 teams. Shipped real work.
              </h2>
            </div>
            <span className="rounded-full border border-emerald-700/20 bg-white text-emerald-800 text-xs font-medium px-4 py-2">
              Sep 2025 — Present
            </span>
          </div>

          <div className="relative mt-12 pl-2 sm:pl-0">
            <div className="hidden sm:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-700/30 via-emerald-600/40 to-emerald-700/30" />
            <div className="space-y-10">
              {EXPERIENCE.map((e, i) => {
                const left = i % 2 === 0;
                return (
                  <div key={e.company + e.period} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
                    <div className="hidden sm:flex absolute left-1/2 top-5 -translate-x-1/2 z-10">
                      <span className="h-4 w-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-800 ring-4 ring-emerald-50 shadow-md" />
                    </div>
                    <div className={`${left ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"}`}>
                      <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm hover:shadow-lg hover:border-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-700">{e.type}</p>
                            <h3 className="font-display font-semibold text-emerald-950 text-[18px] mt-1 leading-tight">
                              {e.role}
                            </h3>
                            <p className="text-emerald-900 font-semibold text-[15px] mt-0.5">{e.company}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-emerald-50 border border-emerald-700/15 text-emerald-800 text-[11px] font-semibold px-3 py-1">
                            {e.duration}
                          </span>
                        </div>
                        <p className="text-emerald-950/55 text-[13px] mt-2">
                          {e.period}{e.location ? ` · ${e.location}` : ""}
                        </p>
                        <ul className="mt-4 space-y-1.5">
                          {e.highlights.map((h) => (
                            <li
                              key={h}
                              className={`flex gap-2 text-[14px] text-emerald-950/80 ${
                                left ? "sm:justify-end" : ""
                              }`}
                            >
                              <span className={left ? "sm:order-2" : ""}>
                                <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12l5 5L20 7" />
                                </svg>
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
                className={`group relative rounded-2xl border p-5 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden ${
                  i % 3 === 0
                    ? "bg-emerald-950 text-white border-emerald-900/60 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-900/40"
                    : "bg-white text-emerald-950 border-emerald-900/10 hover:border-emerald-600/40 hover:shadow-lg hover:shadow-emerald-600/10"
                }`}
              >
                <div
                  className={`absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    i % 3 === 0 ? "bg-emerald-500/20" : "bg-emerald-400/20"
                  }`}
                />
                <div className={`relative h-12 w-12 rounded-xl flex items-center justify-center mb-4 shadow-lg overflow-hidden ${
                  i % 3 === 0
                    ? "bg-gradient-to-br from-emerald-400 to-emerald-700 shadow-emerald-500/20"
                    : "bg-gradient-to-br from-emerald-500 to-emerald-800 shadow-emerald-700/25"
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Icon name={s.icon} className="relative h-6 w-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
                </div>
                <p className="font-semibold text-[15px] leading-snug relative">{s.name}</p>
                <p className={`text-[12px] mt-1.5 relative ${i % 3 === 0 ? "text-emerald-200/70" : "text-emerald-800/55"}`}>
                  Hands-on client work
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="px-6 py-20 bg-emerald-50/60 border-y border-emerald-900/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">Milestones</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-emerald-950 mt-3">
              My Achievements
            </h2>
            <p className="mt-4 text-emerald-950/65 text-[15px] leading-relaxed">
              Credentials and formal recognitions earned through hands-on design work.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <a
              href="/certficate.jpg"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-emerald-900/10 bg-white p-5 hover:border-emerald-700/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-900/10 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-800" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-emerald-950">Internship Programme Certificate</p>
                <p className="text-[12px] text-emerald-950/55 mt-1">Certificate of completing the internship programme.</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 px-4 py-2 text-[13px] font-medium text-emerald-900 group-hover:bg-emerald-50 transition-colors">
                <span>View certificate</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>

            <a
              href="/Internship-Letter.pdf"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-emerald-900/10 bg-white p-5 hover:border-emerald-700/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-900/10 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-800" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                    <path d="M9 13h6" />
                    <path d="M9 17h6" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-emerald-950">Internship Letter</p>
                <p className="text-[12px] text-emerald-950/55 mt-1">Official internship offer and completion letter.</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 px-4 py-2 text-[13px] font-medium text-emerald-900 group-hover:bg-emerald-50 transition-colors">
                <span>View document</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>
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
                <ProjectCard key={`a-${idx}`} p={p} onClick={() => openPreview(p)} />
              ))}
            </div>
          </div>
          <div className="marquee-row overflow-hidden">
            <div className="marquee-track marquee-right">
              {loopB.map((p, idx) => (
                <ProjectCard key={`b-${idx}`} p={p} onClick={() => openPreview(p)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW MODAL */}
      {previewProject && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
            previewOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            onClick={closePreview}
          />

          <div
            className={`relative z-10 w-full max-w-6xl mx-4 max-h-[92vh] flex flex-col transition-all duration-300 ${
              previewOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400">
                  {previewProject.tag}
                </p>
                <h3 className="text-white text-lg sm:text-xl font-semibold mt-0.5">
                  {previewProject.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md px-1.5 py-1.5 border border-white/10">
                  <button
                    onClick={zoomOut}
                    className="h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    title="Zoom out (-)"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <span className="text-white/90 text-xs font-semibold w-12 text-center tabular-nums">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    title="Zoom in (+)"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                  <div className="h-5 w-px bg-white/15 mx-0.5" />
                  <button
                    onClick={zoomReset}
                    className="h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    title="Reset (0)"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={closePreview}
                  className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center text-white border border-white/10 transition-colors"
                  title="Close (Esc)"
                  aria-label="Close preview"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950/80 via-black/70 to-emerald-950/80 overflow-hidden shadow-[0_0_80px_-10px_rgba(16,185,129,0.25)]">
              <div
                className="w-full h-[78vh] flex items-center justify-center overflow-auto cursor-zoom-in p-6"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) closePreview();
                }}
              >
                <div
                  style={{ transform: `scale(${zoom})`, transition: "transform 250ms cubic-bezier(0.22,1,0.36,1)" }}
                  className="shadow-2xl shadow-black/60 rounded-2xl overflow-hidden"
                >
                  <img
                    ref={imgRef}
                    src={previewProject.src}
                    alt={previewProject.title}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain select-none rounded-2xl"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md px-1.5 py-1.5 border border-white/10">
                <button
                  onClick={zoomOut}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <span className="text-white/90 text-xs font-semibold w-12 text-center tabular-nums">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div className="h-5 w-px bg-white/15 mx-0.5" />
                <button
                  onClick={zoomReset}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-center text-white/40 text-[11px] mt-3 hidden sm:block">
              Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[10px]">Esc</kbd> to close &middot;{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[10px]">+</kbd> /{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[10px]">-</kbd> zoom &middot;{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[10px]">0</kbd> reset
            </p>
          </div>
        </div>
      )}

      {/* SOCIALS / CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wide">Let's work together</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-emerald-950 mt-3 leading-tight">
            Ready to make your<br />brand look <span className="text-emerald-700">premium?</span>
          </h2>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-emerald-950/50 text-sm">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 19 9.8C19 14.9 12 21 12 21Z" />
              <circle cx="12" cy="9.6" r="2.3" />
            </svg>
            Lahore, Punjab, Pakistan
          </p>
          <p className="mt-5 text-emerald-950/70 text-[15px] max-w-xl mx-auto leading-relaxed">
            DM me <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">"VISUALS"</span> and let's talk.
            Available for freelance and paid design opportunities — personal branding, LinkedIn creatives, campaign visuals, and more.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/maleeka-batool-/" },
              { name: "whatsapp", label: "WhatsApp", href: "https://wa.me/923078865313" },
              { name: "mail", label: "Email", href: "mailto:batoolmaleeka7@gmail.com" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === "mail" ? undefined : "_blank"}
                rel={s.name === "mail" ? undefined : "noopener noreferrer"}
                className="group relative flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-emerald-600/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/15 px-4 py-3 transition-all duration-300"
              >
                <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 flex items-center justify-center shadow-md shadow-emerald-700/30 group-hover:scale-110 group-hover:shadow-emerald-700/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <SocialIcon name={s.name} className="relative h-5 w-5 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]" />
                </div>
                <div className="pr-1">
                  <span className="text-sm font-semibold text-emerald-950 leading-none block">{s.label}</span>
                  <span className="text-[11px] text-emerald-700/70 leading-none mt-1 block">Tap to connect</span>
                </div>
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-700/40 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
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

function ProjectCard({ p, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-64 sm:w-72 shrink-0 mx-3 rounded-2xl overflow-hidden bg-emerald-900 border border-white/5 group cursor-pointer relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <img
          src={p.src}
          alt={p.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-300">{p.tag}</p>
          <p className="text-white text-sm font-semibold leading-snug mt-1">{p.title}</p>
        </div>
      </div>
    </div>
  );
}
