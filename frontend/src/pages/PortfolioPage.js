import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// ── Project Data ──────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "d1",
    title: "Chaka Ride — Car Rental Platform",
    tag: "Business Website",
    category: "Demo",
    color: "#6366F1",
    year: "2025",
    thumbnail:
      "https://res.cloudinary.com/dycrowzen/image/upload/v1774970424/chaka-ride_lheml0.png",
    desc: "Professional car rental website demo — Home, Services, About and Contact pages with custom branding, multiple language color system and fully responsive layout.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    results: [
      "Multi-language support with custom color branding system",
      "Fully responsive layout across mobile, tablet and desktop",
      "Smooth page transitions with Framer Motion animations",
    ],
    liveUrl: "https://chaka-ride.vercel.app/en",
    featured: false,
    isDemo: true,
  },
  {
    id: "d2",
    title: "LuxeCraft — E-Commerce",
    tag: "E-Commerce",
    category: "Demo",
    color: "#F59E0B",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775034833/demo-ecommerce_h9hkpn.png",
    desc: "Full e-commerce solution for small and medium businesses — product listing, filters, search, cart, checkout and payment gateway integration.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    results: [
      "Advanced product filtering and live search functionality",
      "Secure checkout with Stripe payment gateway integration",
      "Mobile-first UI optimized for conversion",
    ],
    liveUrl: "https://demo-com2.vercel.app/",
    featured: false,
    isDemo: true,
  },
  {
    id: "d3",
    title: "FoodExpress — Food Delivery",
    tag: "E-Commerce / Delivery",
    category: "Demo",
    color: "#E21B70",
    year: "2026",
    thumbnail: "https://res.cloudinary.com/dnc1uozna/image/upload/v1775070146/food_xpress_banner_rh24wx.png",
    desc: "A premium, high-performance food delivery platform featuring a dynamic restaurant explorer, real-time filtering, and a seamless menu experience.",
    stack: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    results: [
      "Dynamic restaurant explorer with real-time filtering",
      "Premium micro-interactions using Framer Motion",
      "Fully responsive design with TypeScript type safety",
    ],
    liveUrl: "https://food-xpress-gules.vercel.app",
    featured: false,
    isDemo: true,
  },
  {
    id: "d4",
    title: "Employee Management System",
    tag: "Custom System",
    category: "Demo",
    color: "#EF4444",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775050560/Screenshot_2026-04-01_193524_ym6qrg.png",
    desc: "Employee management system demo — employee profiles, attendance tracking, leave management, performance reviews and admin dashboard in one platform.",
    stack: ["React", "Node.js", "MongoDB", "Google Maps API"],
    results: [
      "Live employee location tracking via Google Maps API",
      "Automated leave request and approval workflow",
      "Separate client and admin portals with role-based access",
    ],
    liveUrl: "https://employee-management-system-ten-orcin-74.vercel.app/dashboard",
    featured: false,
    isDemo: true,
  },
  {
    id: "d5",
    title: "Foodashh — Food Delivery Service",
    tag: "Food Delivery",
    category: "Demo",
    color: "#06B6D4",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775050862/Screenshot_2026-04-01_194012_dedz9l.png",
    desc: "Foodashh is a food delivery service demo — browse restaurants, view menus, place orders, and manage deliveries with real-time tracking and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    results: [
      "Real-time order status tracking from placement to delivery",
      "Secure JWT-based authentication for users and admins",
      "Integrated Stripe payments with order history dashboard",
    ],
    liveUrl: "https://foodashh.vercel.app/",
    featured: false,
    isDemo: true,
  },
  {
    id: "d6",
    title: "Foodash POS",
    tag: "Restaurant POS",
    category: "Demo",
    color: "#06B6D4",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775052627/download_yyfjyh.png",
    desc: "Foodashh POS is a restaurant point-of-sale system demo — manage orders, track inventory, process payments, and view sales analytics in one platform.",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    results: [
      "Table-wise order management with real-time updates",
      "Inventory tracking with low-stock alerts",
      "Daily and monthly sales analytics with visual reports",
    ],
    liveUrl: "https://foodashhpos.vercel.app/",
    featured: false,
    isDemo: true,
  },
  {
    id: "d7",
    title: "WP Accelerate — WordPress Optimization plugin",
    tag: "WordPress Optimization Tool",
    category: "Demo",
    color: "#8B5CF6",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775053161/wp_jq6w3v.png",
    desc: "A full-featured WordPress Optimization plugin demo — real-time Uptime monitoring, automated backups, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    results: [
      "Real-time Bugs and intrusion Uptime monitoring",
      "Scheduled automated backups with restore functionality",
      "Admin dashboard with site health and security analytics",
    ],
    liveUrl: "https://wp-shield-pi.vercel.app/",
    featured: false,
    isDemo: true,
  },
  {
    id: "d8",
    title: "Video Agency",
    tag: "SaaS / Agency / POS",
    category: "Demo",
    color: "#8B5CF6",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775049937/demo-video-agency_t5w0yu.png",
    desc: "Demo for a video production agency — client portal, project management dashboard, sales analytics and inventory management system in one platform.",
    stack: ["React", "Chart.js", "Node.js", "MongoDB", "JWT"],
    results: [
      "Client portal with live project status and update feed",
      "Visual sales analytics dashboard powered by Chart.js",
      "Inventory and asset management for production workflow",
    ],
    liveUrl: "https://vagencys.vercel.app/",
    featured: false,
    isDemo: true,
  },
  {
    id: "d9",
    title: "Travel Agency",
    tag: "SaaS / Agency",
    category: "Live",
    color: "#8B5CF6",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775646905/Screenshot_2026-04-08_170919_w8jurr.png",
    desc: "Live Travel Agency website demo — client portal, booking management system, sales analytics dashboard and inventory management system in one platform.",
    stack: ["React", "Chart.js", "Node.js", "MongoDB", "JWT"],
    results: [
      "Online booking system with availability management",
      "Client portal with real-time booking status updates",
      "Revenue and booking analytics dashboard with charts",
    ],
    liveUrl: "https://usatravelguru.com/",
    featured: true,
    isDemo: true,
  },
  {
    id: "d10",
    title: "USA Travel Agency",
    tag: "SaaS / Agency",
    category: "Live",
    color: "#9b2a9b",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775647274/Screenshot_2026-04-08_172050_kp9p2l.png",
    desc: "USA base Travel Agency website demo — client portal, booking management system, sales analytics dashboard and inventory management system in one platform.",
    stack: ["React", "Chart.js", "Node.js", "MongoDB", "JWT"],
    results: [
      "Full tour package listing with booking management",
      "Admin dashboard for managing bookings and customers",
      "Sales performance analytics with Chart.js visualizations",
    ],
    liveUrl: "https://www.tours-usa.com/",
    featured: true,
    isDemo: true,
  },
  {
    id: "d11",
    title: "USA Guided Tours",
    tag: "Tours / Agency",
    category: "Live",
    color: "#7594b1",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775653685/Screenshot_2026-04-08_190644_nsii53.png",
    desc: "USA base Guided Tours website demo — client portal, booking management system, sales analytics dashboard and inventory management system in one platform.",
    stack: ["React", "Chart.js", "Node.js", "MongoDB", "JWT"],
    results: [
      "Guided tour browsing with booking request system",
      "Client account portal with itinerary management",
      "Admin panel for tour scheduling and booking oversight",
    ],
    liveUrl: "https://usaguidedtours.com/",
    featured: true,
    isDemo: true,
  },
  {
    id: "d12",
    title: "Bangladesh travel agency",
    tag: "Tours / Agency",
    category: "Live",
    color: "#7594b1",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1775874281/Screenshot_2026-04-11_082119_whfwkk.png",
    desc: "Bangladesh base travel agency website demo — client portal, booking management system, sales analytics dashboard and inventory management system in one platform.",
    stack: ["React", "Chart.js", "Node.js", "MongoDB", "JWT"],
    results: [
      "Local and international tour package booking system",
      "Client portal with trip history and booking tracking",
      "Admin analytics for revenue, bookings and customer data",
    ],
    liveUrl: "https://cosmosholiday.com/",
    featured: true,
    isDemo: true,
  },
  {
    id: "d13",
    title: "Site-Monitor",
    tag: "SaaS / Security",
    category: "Live",
    color: "#EF4444",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1776311265/Screenshot_2026-04-16_094424_wtr6is.png",
    desc: "Site-Monitor is a live website security monitoring service — real-time Uptime monitoring, automated backups, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    results: [
      "Live website uptime and Uptime monitoring dashboard",
      "Automated scheduled backups with one-click restore",
      "Subscription billing management via Stripe integration",
    ],
    liveUrl: "https://SiteMonitor-guardian.lovable.app/",
    featured: true,
    isDemo: false,
  },
  {
    id: "d14",
    title: "Local Service Provider",
    tag: "SaaS / Service Provider",
    category: "Live",
    color: "#06B6D4",
    year: "2025",
    thumbnail: "https://res.cloudinary.com/dwrlbuej9/image/upload/v1776134419/Screenshot_2026-04-14_083936_kommbq.png",
    desc: "Demo for a local service provider — client portal, project management dashboard, sales analytics and inventory management system in one platform.",
    stack: ["React", "Chart.js", "Node.js", "MongoDB", "JWT"],
    results: [
      "Service booking portal with real-time job status tracking",
      "Project management dashboard for service teams",
      "Business performance analytics with Chart.js reports",
    ],
    liveUrl: "https://localserviceprovider.com/",
    featured: true,
    isDemo: true,
  },
];

// ── Constants ──────────────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Demo"];

const STATS = [
  { value: "15+", label: "Projects Completed", color: "#8B5CF6" },
  { value: "10+", label: "Happy Clients", color: "#3B82F6" },
  { value: "5+", label: "Ongoing Projects", color: "#A855F7" },
  { value: "8+", label: "Team Members", color: "#F59E0B" },
];

const TESTIMONIALS = [
  {
    name: "A Happy Client",
    role: "Business Owner, Dhaka",
    avatar: "AH",
    color: "#8B5CF6",
    quote:
      "Axentralab delivered a clean, professional website for our business on time and within budget. Great communication throughout.",
  },
  {
    name: "Local Client",
    role: "E-commerce Store Owner",
    avatar: "LC",
    color: "#3B82F6",
    quote:
      "They built our online shop from scratch. The design is modern and the checkout works perfectly. Highly recommend.",
  },
  {
    name: "Startup Founder",
    role: "Tech Startup, Bangladesh",
    avatar: "SF",
    color: "#A855F7",
    quote:
      "The team understood our requirements quickly and delivered a solid custom system. Will definitely work with them again.",
  },
];

// ── Project Modal ──────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  const color = project.color;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px, 4vw, 24px)",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          background: "var(--bg)",
          border: `1px solid ${color}30`,
          borderRadius: 24,
          maxWidth: 680,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: `0 40px 100px ${color}20`,
        }}
      >
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg,${color},transparent)`,
            borderRadius: "24px 24px 0 0",
          }}
        />
        <div style={{ padding: "clamp(20px, 4vw, 32px) clamp(20px, 5vw, 36px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: 6,
                  background: `${color}12`,
                  border: `1px solid ${color}28`,
                  color,
                  fontSize: 11,
                  fontFamily: "var(--font-m)",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {project.tag}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-m)",
                  fontSize: 11,
                  color: "var(--muted)",
                }}
              >
                {project.year}
              </span>
              {project.featured && (
                <span
                  style={{
                    padding: "2px 8px",
                    background: color,
                    borderRadius: 5,
                    fontSize: 9,
                    fontFamily: "var(--font-m)",
                    color: "#000",
                    fontWeight: 900,
                    letterSpacing: 1,
                  }}
                >
                  ★ FEATURED
                </span>
              )}
              {project.isDemo && (
                <span
                  style={{
                    padding: "2px 8px",
                    background: `${color}20`,
                    border: `1px solid ${color}50`,
                    borderRadius: 5,
                    fontSize: 9,
                    fontFamily: "var(--font-m)",
                    color,
                    fontWeight: 900,
                    letterSpacing: 1,
                  }}
                >
                  🎨 DEMO
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              style={{
                flexShrink: 0,
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(20px,3vw,28px)",
              fontWeight: 900,
              color: "var(--text)",
              margin: "0 0 14px",
              letterSpacing: -0.5,
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.8,
              margin: "0 0 24px",
            }}
          >
            {project.desc}
          </p>
        </div>
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg,${color}40,transparent)`,
            margin: "0 32px",
          }}
        />
        <div
          className="modal-grid-2col"
          style={{
            padding: "clamp(20px, 4vw, 32px) clamp(20px, 5vw, 36px) clamp(28px, 5vw, 40px)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--muted)",
                fontFamily: "var(--font-m)",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Key Results
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {project.results.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 14px",
                    background: `${color}08`,
                    border: `1px solid ${color}18`,
                    borderRadius: 10,
                  }}
                >
                  <span style={{ color, fontSize: 14, fontWeight: 900 }}>
                    ↑
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--text)",
                      fontFamily: "var(--font-m)",
                    }}
                  >
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--muted)",
                fontFamily: "var(--font-m)",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Tech Stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {project.stack.map((s, i) => (
                <span
                  key={i}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    fontSize: 12,
                    color: "var(--muted)",
                    fontFamily: "var(--font-m)",
                    fontWeight: 600,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "0 clamp(20px, 5vw, 36px) clamp(20px, 4vw, 32px)",
            display: "flex",
            gap: "clamp(8px, 2vw, 12px)",
            flexWrap: "wrap",
          }}
        >
          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "13px",
                background: color,
                color: ["#8B5CF6", "#F59E0B", "#06B6D4"].includes(color)
                  ? "#000"
                  : "var(--text)",
                border: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "var(--font-h)",
                textDecoration: "none",
                textAlign: "center",
                minWidth: 140,
              }}
            >
              {project.isDemo ? "🔗 View Demo" : "🔗 View Live"}
            </a>
          ) : (
            <a
              href="/contact"
              style={{
                flex: 1,
                padding: "13px",
                background: `${color}18`,
                border: `1px solid ${color}35`,
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "var(--font-h)",
                color,
                textDecoration: "none",
                textAlign: "center",
                minWidth: 140,
              }}
            >
              📩 Request Demo
            </a>
          )}
          <a
            href="/contact"
            style={{
              padding: "13px 20px",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "var(--font-h)",
              color: "var(--muted)",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Build Similar →
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Featured Showcase ──────────────────────────────────────────────────────────
function FeaturedShowcase({ onOpenModal }) {
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto 72px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "3px 12px",
              borderRadius: 999,
              border: "1px solid rgba(245,158,11,0.35)",
              background: "rgba(245,158,11,0.08)",
              color: "#F59E0B",
              fontSize: 10,
              fontFamily: "var(--font-m)",
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            ★ Featured Work
          </span>
          <h2
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(18px,2.5vw,26px)",
              fontWeight: 900,
              color: "var(--text)",
              marginTop: 10,
              letterSpacing: -0.5,
            }}
          >
            Flagship Projects
          </h2>
        </div>
        <span
          style={{
            fontSize: 12,
            color: "var(--muted)",
            fontFamily: "var(--font-m)",
          }}
        >
          {featured.length} selected projects
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 20,
        }}
      >
        {featured.map((project) => {
          const color = project.color;
          return (
            <div
              key={project.id}
              onClick={() => onOpenModal(project)}
              style={{
                position: "relative",
                background: `linear-gradient(135deg,${color}0e,rgba(15,23,42,0.03))`,
                border: `1px solid ${color}25`,
                borderRadius: 20,
                padding: 28,
                cursor: "pointer",
                transition: "all 0.25s",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = `${color}50`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${color}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = `${color}25`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: `radial-gradient(circle,${color}18,transparent 65%)`,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 9px",
                    borderRadius: 6,
                    background: `${color}12`,
                    border: `1px solid ${color}28`,
                    color,
                    fontSize: 10,
                    fontFamily: "var(--font-m)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                >
                  {project.tag}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-m)",
                    fontSize: 10,
                    color: "var(--muted)",
                  }}
                >
                  {project.year}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-h)",
                  fontSize: 20,
                  fontWeight: 900,
                  color: "var(--text)",
                  margin: "0 0 10px",
                  letterSpacing: -0.4,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  margin: "0 0 18px",
                }}
              >
                {project.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 18,
                }}
              >
                {project.results.map((r, j) => (
                  <span
                    key={j}
                    style={{
                      padding: "3px 10px",
                      borderRadius: 6,
                      background: `${color}10`,
                      border: `1px solid ${color}20`,
                      fontSize: 11,
                      color,
                      fontFamily: "var(--font-m)",
                    }}
                  >
                    ✓ {r}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {project.stack.slice(0, 3).map((s, j) => (
                    <span
                      key={j}
                      style={{
                        padding: "2px 7px",
                        borderRadius: 4,
                        background: "var(--bg2)",
                        border: "1px solid var(--border)",
                        fontSize: 10,
                        color: "var(--muted)",
                        fontFamily: "var(--font-m)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span
                      style={{
                        padding: "2px 7px",
                        fontSize: 10,
                        color: "var(--muted)",
                        fontFamily: "var(--font-m)",
                      }}
                    >
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color,
                    fontWeight: 700,
                    fontFamily: "var(--font-h)",
                  }}
                >
                  View Details →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onOpenModal }) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div
      onClick={() => onOpenModal(project)}
      style={{
        background: "rgba(15,23,42,0.03)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.3s",
        animation: `fadeUp 0.5s ${Math.min(index, 8) * 0.06}s ease both`,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.color}40`;
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 20px 48px ${project.color}14`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg,${project.color},transparent)`,
        }}
      />

      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          height: 180,
          background: `linear-gradient(135deg,${project.color}18,${project.color}06)`,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {!imgErr ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={() => setImgErr(true)}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ fontSize: 40, opacity: 0.35 }}>
              {project.category === "Demo" ? "🎨" : "🌐"}
            </div>
            <span
              style={{
                fontFamily: "var(--font-m)",
                fontSize: 10,
                color: `${project.color}60`,
                letterSpacing: 2,
              }}
            >
              {project.tag.toUpperCase().slice(0, 20)}
            </span>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(6,8,15,0.65) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "3px 9px",
            background: "rgba(6,8,15,0.7)",
            border: "1px solid var(--border)",
            borderRadius: 6,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-m)",
              fontSize: 9,
              color: "var(--muted)",
              letterSpacing: 1,
            }}
          >
            {project.year}
          </span>
        </div>
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              padding: "3px 9px",
              background: project.color,
              borderRadius: 6,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-m)",
                fontSize: 9,
                color: "#000",
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              ★ FEATURED
            </span>
          </div>
        )}
        {!project.featured && project.isDemo && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              padding: "3px 9px",
              background: "rgba(0,0,0,0.7)",
              border: `1px solid ${project.color}60`,
              borderRadius: 6,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-m)",
                fontSize: 9,
                color: project.color,
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              🎨 DEMO
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "18px 20px 20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "2px 9px",
            borderRadius: 6,
            background: `${project.color}10`,
            border: `1px solid ${project.color}25`,
            color: project.color,
            fontSize: 10,
            fontFamily: "var(--font-m)",
            letterSpacing: 0.5,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 10,
            alignSelf: "flex-start",
          }}
        >
          {project.tag}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-h)",
            fontSize: 16,
            fontWeight: 900,
            color: "var(--text)",
            margin: "0 0 8px",
            letterSpacing: -0.3,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.65,
            margin: "0 0 14px",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.desc}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            marginBottom: 12,
          }}
        >
          {project.results.slice(0, 2).map((r, i) => (
            <span
              key={i}
              style={{
                fontSize: 10,
                color: project.color,
                fontFamily: "var(--font-m)",
                padding: "2px 7px",
                background: `${project.color}10`,
                borderRadius: 5,
              }}
            >
              ✓ {r}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            marginBottom: 14,
          }}
        >
          {project.stack.slice(0, 4).map((s, i) => (
            <span
              key={i}
              style={{
                padding: "2px 7px",
                borderRadius: 5,
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                fontSize: 10,
                color: "var(--muted)",
                fontFamily: "var(--font-m)",
              }}
            >
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span
              style={{
                fontSize: 10,
                color: "var(--muted)",
                fontFamily: "var(--font-m)",
                padding: "2px 4px",
              }}
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                padding: "9px",
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                borderRadius: 10,
                color: project.color,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "var(--font-h)",
                textDecoration: "none",
                textAlign: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.stopPropagation();
                e.currentTarget.style.background = `${project.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${project.color}15`;
              }}
            >
              {project.isDemo ? "🔗 View Demo" : "View Live →"}
            </a>
          ) : (
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                padding: "9px",
                background: `${project.color}10`,
                border: `1px solid ${project.color}25`,
                borderRadius: 10,
                color: project.color,
                fontSize: 12,
                fontFamily: "var(--font-m)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              📩 Request Demo
            </button>
          )}
          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: "9px 12px",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--muted)",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "var(--font-h)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            Similar?
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Derived constants ─────────────────────────────────────────────────────────
const ALL_STACKS = [...new Set(PROJECTS.flatMap((p) => p.stack))].sort();
const PER_LOAD = 12;
const HERO_BG_IMAGE = process.env.REACT_APP_HERO_BG_IMAGE || '/images/hero-bg.png';

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeStack, setActiveStack] = useState("");
  const [visible, setVisible] = useState(PER_LOAD);
  const [modal, setModal] = useState(null);
  const openModal = useCallback((p) => setModal(p), []);
  const closeModal = useCallback(() => setModal(null), []);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisible(PER_LOAD);
  };
  const handleSearch = (val) => {
    setSearch(val);
    setVisible(PER_LOAD);
  };
  const handleStack = (val) => {
    setActiveStack(val);
    setVisible(PER_LOAD);
  };

  const filtered = useMemo(() => {
    let list = PROJECTS;
    if (activeCategory !== "All")
      list = list.filter((p) => p.category === activeCategory);
    if (activeStack) list = list.filter((p) => p.stack.includes(activeStack));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.stack.some((s) => s.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [activeCategory, activeStack, search]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <div className="page"
      style={{
        padding: "clamp(80px, 12vw, 128px) clamp(16px, 5vw, 40px) 0",
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {modal && <ProjectModal project={modal} onClose={closeModal} />}

      <style>{`
        @keyframes fadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
        @keyframes pulse   { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        
        .modal-grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(16px, 3vw, 24px); }
        @media (max-width: 640px) {
          .modal-grid-2col { grid-template-columns: 1fr !important; }
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: clamp(16px, 3vw, 24px);
          max-width: 1100px;
          margin: 0 auto;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          max-width: 900px;
          margin: 0 auto;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(16px, 3vw, 24px);
          max-width: 1100px;
          margin: 0 auto;
        }
        .cat-bar { 
          display: flex; 
          gap: clamp(6px, 2vw, 12px); 
          justify-content: center; 
          flex-wrap: wrap; 
        }
        .filter-row { 
          display: flex; 
          gap: clamp(8px, 2vw, 16px); 
          flex-wrap: wrap; 
          justify-content: center; 
          align-items: center; 
          margin-bottom: clamp(20px, 4vw, 32px);
        }

        @media (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important; }
        }
        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .stats-grid > div:nth-child(odd) { border-right: 1px solid var(--border) !important; }
          .filter-row { flex-direction: column; }
          .filter-row > div { width: 100%; }
        }
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .cat-bar { gap: clamp(6px, 2vw, 8px); }
          .filter-row { flex-direction: column; gap: clamp(8px, 2vw, 12px); }
          .filter-row > div { width: 100% !important; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          marginBottom: "clamp(48px, 8vw, 80px)",
          padding: "clamp(40px, 8vw, 68px) clamp(16px, 5vw, 40px)",
          textAlign: "center",
          animation: "fadeUp 0.6s ease both",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(6,8,15,0.9) 0%, rgba(6,8,15,0.72) 48%, rgba(6,8,15,0.9) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--bg2) 1px,transparent 1px),linear-gradient(90deg,var(--bg2) 1px,transparent 1px)", backgroundSize: "clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)" }} />
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 16px",
              borderRadius: 999,
              border: "1px solid rgba(139,92,246,0.3)",
              background: "rgba(139,92,246,0.07)",
              marginBottom: 20,
            }}
          >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#8B5CF6",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-m)",
              fontSize: 11,
              color: "#8B5CF6",
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Our Work
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-h)",
            fontSize: "clamp(32px,5.5vw,68px)",
            fontWeight: 900,
            color: "var(--text)",
            margin: "0 0 18px",
            letterSpacing: -2.5,
            lineHeight: 1.04,
          }}
        >
          Work That{" "}
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--border)",
            }}
          >
            Speaks
          </span>
          <br />
          <span style={{ color: "#8B5CF6" }}>for Itself.</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-h)",
            fontSize: "clamp(14px,1.8vw,17px)",
            color: "var(--muted)",
            maxWidth: 500,
            margin: "0 auto clamp(20px, 4vw, 32px)",
            lineHeight: 1.8,
          }}
        >
          Axentralab is a results-driven digital agency helping businesses scale
          with modern web solutions, smart systems, and secure technology.
        </p>
        <div
          style={{
            display: "flex",
            gap: "clamp(12px, 3vw, 20px)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "🔒 NDA available",
            "📦 Full source code",
            "🚀 On-time delivery",
            "📍 Based in Dhaka",
          ].map((v, i) => (
            <span
              key={i}
              style={{
                fontSize: 12,
                color: "var(--muted)",
                fontFamily: "var(--font-m)",
              }}
            >
              {v}
            </span>
          ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          marginBottom: "clamp(48px, 8vw, 80px)",
        }}
      >
        <div
          className="stats-grid"
          style={{ background: "rgba(15,23,42,0.02)" }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "clamp(18px, 3vw, 32px) clamp(12px, 2vw, 24px)",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-h)",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 900,
                  color: s.color,
                  letterSpacing: -1,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "clamp(10px, 1.2vw, 12px)",
                  color: "var(--muted)",
                  marginTop: 6,
                  fontFamily: "var(--font-m)",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Showcase ── */}
      <div style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
        <FeaturedShowcase onOpenModal={openModal} />
      </div>

      {/* ── Category Filter ── */}
      <div className="cat-bar" style={{ marginBottom: 20 }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            style={{
              padding: "8px 20px",
              borderRadius: 10,
              border:
                activeCategory === cat
                  ? "1px solid rgba(139,92,246,0.4)"
                  : "1px solid var(--border)",
              background:
                activeCategory === cat
                  ? "rgba(139,92,246,0.1)"
                  : "var(--bg2)",
              color:
                activeCategory === cat ? "#8B5CF6" : "var(--muted)",
              fontFamily: "var(--font-h)",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              transition: "all 0.18s",
            }}
          >
            {cat}
            <span
              style={{
                marginLeft: 7,
                padding: "1px 7px",
                borderRadius: 999,
                background:
                  activeCategory === cat
                    ? "rgba(139,92,246,0.15)"
                    : "rgba(15,23,42,0.06)",
                fontSize: 10,
                color:
                  activeCategory === cat ? "#8B5CF6" : "var(--border)",
                fontFamily: "var(--font-m)",
              }}
            >
              {cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* ── Search + Stack Filter ── */}
      <div className="filter-row">
        <div
          style={{
            position: "relative",
            flex: 1,
            maxWidth: 380,
            minWidth: "100%",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 14,
              opacity: 0.35,
              pointerEvents: "none",
            }}
          >
            🔍
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name, stack, tag…"
            style={{
              width: "100%",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "11px 16px 11px 40px",
              color: "var(--text)",
              fontSize: 13,
              outline: "none",
              fontFamily: "var(--font-h)",
              boxSizing: "border-box",
            }}
          />
          {search && (
            <button
              onClick={() => handleSearch("")}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "var(--muted)",
                fontSize: 14,
                cursor: "pointer",
                padding: 0,
              }}
            >
              ✕
            </button>
          )}
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <select
            value={activeStack}
            onChange={(e) => handleStack(e.target.value)}
            style={{
              background: "var(--bg2)",
              border: `1px solid ${activeStack ? "rgba(139,92,246,0.4)" : "var(--border)"}`,
              borderRadius: 12,
              padding: "11px 36px 11px 14px",
              color: activeStack ? "#8B5CF6" : "var(--muted)",
              fontSize: 13,
              outline: "none",
              fontFamily: "var(--font-h)",
              cursor: "pointer",
              appearance: "none",
              width: "100%",
              minWidth: 160,
            }}
          >
            <option value="" style={{ background: "var(--bg)", color: "var(--text)" }}>
              ⚙️ All Tech Stacks
            </option>
            {ALL_STACKS.map((s) => (
              <option
                key={s}
                value={s}
                style={{ background: "var(--bg)", color: "var(--text)" }}
              >
                {s}
              </option>
            ))}
          </select>
          <span
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "var(--muted)",
              fontSize: 10,
            }}
          >
            ▼
          </span>
        </div>
        {(search || activeStack || activeCategory !== "All") && (
          <div
            style={{
              fontSize: "clamp(11px, 1.2vw, 13px)",
              color: "var(--muted)",
              fontFamily: "var(--font-m)",
              padding: "8px 14px",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              width: "100%",
            }}
          >
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            <button
              onClick={() => {
                handleSearch("");
                handleStack("");
                handleCategoryChange("All");
              }}
              style={{
                marginLeft: 10,
                color: "var(--muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                textDecoration: "underline",
              }}
            >
              clear
            </button>
          </div>
        )}
      </div>

      {/* ── No Results ── */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px 80px" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 15,
              marginBottom: 20,
            }}
          >
            No projects found.
          </p>
          <button
            onClick={() => {
              handleSearch("");
              handleStack("");
              handleCategoryChange("All");
            }}
            style={{
              padding: "10px 22px",
              background: "rgba(15,23,42,0.06)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--text)",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Show All
          </button>
        </div>
      )}

      {/* ── Project Grid ── */}
      {filtered.length > 0 && (
        <section style={{ marginBottom: "clamp(36px, 6vw, 60px)" }}>
          <div className="portfolio-grid">
            {shown.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenModal={openModal}
              />
            ))}
          </div>
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button
                onClick={() => setVisible((v) => v + PER_LOAD)}
                style={{
                  padding: "13px 40px",
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  borderRadius: 12,
                  color: "#8B5CF6",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "var(--font-h)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(139,92,246,0.18)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(139,92,246,0.1)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                Load More ({filtered.length - visible} remaining)
              </button>
            </div>
          )}
          {!hasMore && filtered.length > PER_LOAD && (
            <div
              style={{
                textAlign: "center",
                marginTop: 32,
                fontSize: 12,
                color: "var(--muted)",
                fontFamily: "var(--font-m)",
              }}
            >
              ✓ All {filtered.length} projects loaded
            </div>
          )}
        </section>
      )}

      {/* ── How We Work ── */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto 88px",
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: 22,
          padding: "clamp(32px,5vw,52px) clamp(24px,4vw,48px)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              display: "inline-block",
              padding: "3px 12px",
              borderRadius: 999,
              border: "1px solid #3B82F640",
              background: "#3B82F612",
              color: "#3B82F6",
              fontSize: 10,
              fontFamily: "var(--font-m)",
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            How We Work
          </span>
          <h2
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(22px,3.5vw,36px)",
              fontWeight: 900,
              color: "var(--text)",
              marginTop: 12,
              letterSpacing: -0.8,
            }}
          >
            Every Project. Same Standard.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 16,
          }}
        >
          {[
            {
              step: "01",
              icon: "💬",
              title: "Discovery Call",
              desc: "We discuss your requirements, timeline and budget. Free consultation, no obligation.",
            },
            {
              step: "02",
              icon: "📐",
              title: "Clear Proposal",
              desc: "You receive a fixed-price quote with scope, timeline and deliverables — no hidden costs.",
            },
            {
              step: "03",
              icon: "⚙️",
              title: "Build & Review",
              desc: "We build in stages and share progress regularly. Your feedback shapes the final product.",
            },
            {
              step: "04",
              icon: "🚀",
              title: "Launch & Handover",
              desc: "We deploy your project, hand over all source code and provide post-launch support.",
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "clamp(18px, 3vw, 28px) clamp(14px, 3vw, 20px)",
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-m)",
                  fontSize: "clamp(9px, 1vw, 11px)",
                  color: "var(--muted)",
                  letterSpacing: 2,
                  marginBottom: "clamp(10px, 2vw, 14px)",
                }}
              >
                {s.step}
              </div>
              <div style={{ fontSize: "clamp(20px, 3.5vw, 28px)", marginBottom: "clamp(8px, 1.5vw, 12px)" }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-h)",
                  fontSize: "clamp(13px, 1.5vw, 16px)",
                  fontWeight: 800,
                  color: "var(--text)",
                  marginBottom: "clamp(6px, 1.2vw, 10px)",
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: "clamp(12px, 1.2vw, 14px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ marginBottom: "clamp(60px, 10vw, 100px)" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
          <span
            style={{
              display: "inline-block",
              padding: "3px 12px",
              borderRadius: 999,
              border: "1px solid rgba(139,92,246,0.35)",
              background: "rgba(139,92,246,0.08)",
              color: "#8B5CF6",
              fontSize: "clamp(9px, 1vw, 11px)",
              fontFamily: "var(--font-m)",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Client Feedback
          </span>
          <h2
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(22px, 3.5vw, 40px)",
              fontWeight: 900,
              color: "var(--text)",
              marginTop: 12,
              letterSpacing: -0.8,
              lineHeight: 1.1,
            }}
          >
            What Clients Say
          </h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(135deg, ${t.color}08, rgba(15,23,42,0.02))`,
                border: `1px solid ${t.color}20`,
                borderRadius: 20,
                padding: "clamp(20px, 4vw, 32px)",
                transition: "all 0.3s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${t.color}40`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${t.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${t.color}20`;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(24px, 4vw, 32px)",
                  color: t.color,
                  fontFamily: "Georgia,serif",
                  lineHeight: 1,
                  marginBottom: "clamp(12px, 2vw, 16px)",
                  opacity: 0.6,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "clamp(13px, 1.3vw, 15px)",
                  color: "var(--text)",
                  lineHeight: 1.75,
                  marginBottom: "clamp(18px, 3vw, 28px)",
                  flex: 1,
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: "clamp(36px, 6vw, 44px)",
                    height: "clamp(36px, 6vw, 44px)",
                    borderRadius: "50%",
                    background: `${t.color}18`,
                    border: `1.5px solid ${t.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-h)",
                    fontWeight: 800,
                    fontSize: "clamp(11px, 1.5vw, 13px)",
                    color: t.color,
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-h)",
                      fontSize: "clamp(12px, 1.3vw, 14px)",
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(10px, 1vw, 12px)",
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Marquee ── */}
      <section
        style={{
          padding: "clamp(24px, 4vw, 48px) 0",
          borderTop: "1px solid var(--bg2)",
          borderBottom: "1px solid var(--bg2)",
          overflow: "hidden",
          marginBottom: "clamp(60px, 10vw, 100px)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "clamp(32px, 6vw, 56px)",
            animation: "marquee 22s linear infinite",
            width: "max-content",
          }}
        >
          {[
            ...[
              "React",
              "Node.js",
              "MongoDB",
              "Stripe",
              "Figma",
              "Chart.js",
              "JWT",
              "Google Maps API",
              "Tailwind CSS",
              "Framer Motion",
            ],
            ...[
              "React",
              "Node.js",
              "MongoDB",
              "Stripe",
              "Figma",
              "Chart.js",
              "JWT",
              "Google Maps API",
              "Tailwind CSS",
              "Framer Motion",
            ],
          ].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-h)",
                fontSize: 13,
                fontWeight: 700,
                color: "var(--muted)",
                letterSpacing: 1,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", paddingBottom: "clamp(60px, 10vw, 100px)" }}>
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg,rgba(139,92,246,0.09) 0%,rgba(59,130,246,0.06) 100%)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: 24,
            padding: "clamp(48px,6vw,80px) clamp(24px,5%,64px)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(139,92,246,0.07),transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                display: "inline-block",
                padding: "3px 12px",
                borderRadius: 999,
                border: "1px solid #8B5CF640",
                background: "#8B5CF610",
                color: "#8B5CF6",
                fontSize: 10,
                fontFamily: "var(--font-m)",
                letterSpacing: 1,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Start a Project
            </span>
            <h2
              style={{
                fontFamily: "var(--font-h)",
                fontSize: "clamp(26px,4.5vw,52px)",
                fontWeight: 900,
                color: "var(--text)",
                margin: "18px auto 16px",
                letterSpacing: -1.5,
                lineHeight: 1.08,
                maxWidth: 580,
              }}
            >
              Ready to Build
              <br />
              <span style={{ color: "#8B5CF6" }}>Something Real?</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 15,
                maxWidth: 460,
                margin: "0 auto 34px",
                lineHeight: 1.75,
              }}
            >
              Tell us what you need. We'll reply within 24 hours with a clear
              plan and honest pricing.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 24,
              }}
            >
              <Link
                to="/contact"
                className="btn-primary"
                style={{
                  padding: "15px 36px",
                  background: "#8B5CF6",
                  color: "#000",
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: 12,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Start a Project →
              </Link>
              <Link
                to="/contact"
                style={{
                  padding: "15px 28px",
                  fontSize: 15,
                  borderRadius: 12,
                  textDecoration: "none",
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-h)",
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                Get a Free Quote
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                "✓ Free consultation",
                "✓ Fixed-price quotes",
                "✓ NDA on request",
              ].map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    fontFamily: "var(--font-m)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
