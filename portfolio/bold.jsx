// Reference MiniMock via window so bold.jsx can find it — exported from safe.jsx
const BoldMiniMock = ({ slug }) => (window.MiniMock ? <window.MiniMock slug={slug}/> : null);

// Vercel Analytics custom-event helper. Safe no-op until the tracker loads.
// (Custom events surface in the dashboard on Vercel Pro/Enterprise; harmless on Hobby.)
const track = (name, data) => { try { window.va && window.va("event", { name, ...(data || {}) }); } catch (e) {} };

// Responsive CSS shipped WITH the component so it works no matter which
// index.html hosts it (deploy pipelines often swap in their own shell).
const BOLD_RESPONSIVE_CSS = `
  html, body { overflow-x: hidden; }
  @media (max-width: 760px) {
    .bp-vibe-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 1024px) {
    .bp-nav { padding: 16px 24px !important; }
    .bp-nav-links { gap: 14px !important; }
    .bp-hero { padding: 40px 24px 48px !important; }
    .bp-hero h1 { font-size: 48px !important; letter-spacing: -1.5px !important; }
    .bp-hero-sub { font-size: 18px !important; }
    .bp-section { padding: 64px 24px !important; }
    .bp-section h2 { font-size: 38px !important; letter-spacing: -1px !important; }
    .bp-about-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
    .bp-stats-row1 { grid-template-columns: repeat(3, 1fr) !important; }
    .bp-stats-row2 { grid-template-columns: repeat(2, 1fr) !important; }
    .bp-work-grid { grid-template-columns: 1fr !important; }
    .bp-feature { grid-template-columns: 1fr !important; }
    .bp-feature-body { order: 2 !important; padding: 28px 24px !important; }
    .bp-feature-mock { order: 1 !important; min-height: 320px !important; }
    .bp-feature-body h3 { font-size: 26px !important; }
    .bp-testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .bp-footer { padding: 64px 24px 40px !important; }
    .bp-footer-inner { padding: 44px 32px !important; }
    .bp-footer h2 { font-size: 44px !important; }
  }
  @media (max-width: 640px) {
    .bp-nav { padding: 12px 14px !important; flex-wrap: nowrap !important; gap: 8px !important; }
    .bp-nav-brand { font-size: 11px !important; gap: 5px !important; flex-wrap: nowrap !important; white-space: nowrap !important; flex-shrink: 0 !important; }
    .bp-nav-brand .bp-nav-status { display: none !important; }
    .bp-nav-links { gap: 7px !important; font-size: 11px !important; flex-wrap: nowrap !important; white-space: nowrap !important; flex-shrink: 0 !important; }
    .bp-hero { padding: 28px 16px 40px !important; }
    .bp-hero-kicker { font-size: 11px !important; text-align: center; }
    .bp-hero h1 { font-size: 32px !important; letter-spacing: -0.8px !important; line-height: 1.1 !important; }
    .bp-hero-sub { font-size: 16px !important; }
    .bp-chat { border-radius: 16px !important; }
    .bp-chat-header { font-size: 10px !important; padding: 10px 14px !important; gap: 8px !important; }
    .bp-chat-header-end { display: none !important; }
    .bp-chat-body { padding: 16px !important; max-height: 340px !important; min-height: 300px !important; gap: 12px !important; }
    .bp-chat-body .bp-bubble { max-width: 88% !important; font-size: 14px !important; padding: 10px 14px !important; }
    .bp-chat-suggestions { padding: 0 16px 12px !important; }
    .bp-chat-suggestions button { font-size: 11px !important; padding: 6px 10px !important; }
    .bp-chat-form { padding: 12px 14px !important; gap: 8px !important; }
    .bp-chat-form input { font-size: 14px !important; }
    .bp-chat-form .bp-cmd-hint { display: none !important; }
    .bp-chat-form button[type="submit"] { padding: 8px 14px !important; font-size: 12px !important; }
    .bp-stats { margin-top: 32px !important; }
    .bp-stats-row1 { grid-template-columns: 1fr !important; gap: 10px !important; }
    .bp-stats-row1 > div { padding: 18px 16px !important; }
    .bp-stats-row1 .bp-stat-num { font-size: 42px !important; }
    .bp-stats-row2 { grid-template-columns: 1fr !important; }
    .bp-stats-card { padding: 16px 18px !important; }
    .bp-section { padding: 48px 16px !important; }
    .bp-section h2 { font-size: 30px !important; letter-spacing: -0.6px !important; }
    .bp-about p { font-size: 16px !important; }
    .bp-now-row { padding: 18px 18px !important; gap: 14px !important; flex-direction: column !important; }
    .bp-now-row > span:first-child { width: auto !important; }
    .bp-expertise { padding: 8px 16px 24px !important; }
    .bp-expertise-grid { grid-template-columns: 1fr !important; }
    .bp-work { padding: 48px 0 64px !important; }
    .bp-work-header { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; padding: 0 16px !important; }
    .bp-work-header h2 { font-size: 30px !important; }
    .bp-work > div { padding: 0 16px !important; }
    .bp-testimonials-grid { grid-template-columns: 1fr !important; }
    .bp-testimonial { padding: 22px !important; }
    .bp-footer { padding: 48px 16px 32px !important; }
    .bp-footer-inner { padding: 36px 22px !important; border-radius: 18px !important; }
    .bp-footer h2 { font-size: 32px !important; letter-spacing: -1px !important; }
    .bp-footer-cta { flex-direction: column !important; gap: 10px !important; width: 100%; }
    .bp-footer-cta a { width: 100% !important; justify-content: center !important; }
    .bp-footer-meta { flex-direction: column !important; gap: 8px !important; text-align: center; }
  }
`;

const BoldPortfolio = () => (
  <div style={{ width: "100%", minHeight: "100%", background: "#1c1c26", color: "#f0f0f5", fontFamily: "'Source Sans 3',sans-serif", position: "relative", overflowX: "clip" }}>
    <style dangerouslySetInnerHTML={{ __html: BOLD_RESPONSIVE_CSS }} />
    <BoldGrid />
    <BoldNav />
    <BoldHero />
    <BoldExpertise />
    <BoldAgentDock />
    <BoldAbout />
    <BoldNow />
    <BoldToolkit />
    <BoldWork />
    <BoldTestimonials />
    <BoldFooter />
  </div>
);

const BoldGrid = () => (
  <div aria-hidden style={{
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
    backgroundImage: `
      radial-gradient(ellipse at 20% 0%, rgba(73,28,255,0.08), transparent 55%),
      radial-gradient(ellipse at 80% 100%, rgba(255,153,212,0.05), transparent 55%),
      radial-gradient(ellipse at 50% 50%, rgba(167,143,255,0.04), transparent 70%),
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "100% 100%, 100% 100%, 100% 100%, 56px 56px, 56px 56px",
  }}/>
);

const NAV_STATUSES = [
  { text: "2 case studies being updated", dot: "#fbbf24", bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.3)" },
  { text: "agent in training · finalized version coming soon", dot: "#b9a6ff", bg: "rgba(167,143,255,0.14)", border: "rgba(167,143,255,0.35)" },
];
const BoldNav = () => {
  const [si, setSi] = React.useState(0);
  const [vis, setVis] = React.useState(true);
  React.useEffect(() => {
    const id = setInterval(() => {
      setVis(false);
      setTimeout(() => { setSi(s => (s + 1) % NAV_STATUSES.length); setVis(true); }, 320);
    }, 3800);
    return () => clearInterval(id);
  }, []);
  const st = NAV_STATUSES[si];
  return (
  <nav className="bp-nav" style={{
    position: "sticky", top: 0, zIndex: 100, padding: "20px 32px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "rgba(28,28,38,0.7)", backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  }}>
    <div className="bp-nav-brand" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, fontWeight: 700, color: "#fff" }}>
      <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, color: "inherit", textDecoration: "none" }}>
        <span style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#491cff,#ff99d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, letterSpacing: -1 }}>AY</span>
        <span>aditya.design</span>
      </a>
      <span style={{ color: "rgba(255,255,255,0.52)" }}>/agent</span>
      <span className="bp-nav-status" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginLeft: 10, fontSize: 11, color: "rgba(255,255,255,0.72)", background: st.bg, padding: "3px 10px", borderRadius: 100, border: `1px solid ${st.border}`, fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700, whiteSpace: "nowrap", transition: "background 0.3s, border-color 0.3s" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: st.dot, flexShrink: 0, transition: "background 0.3s" }}/>
        <span style={{ opacity: vis ? 1 : 0, transition: "opacity 0.3s" }}>{st.text}</span>
      </span>
    </div>
    <div className="bp-nav-links" style={{ display: "flex", gap: 20, fontSize: 13, fontFamily: "ui-monospace,Menlo,monospace", alignItems: "center" }}>
      {[["home","/"],["about","/about"],["work","/work"],["now","/now"],["contact","/hello"]].map(([label, path]) => (
        <a key={label} href={`#${label}`} style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
          {path}
        </a>
      ))}
      <a href="assets/Aditya-Yellamraju-Resume.pdf" target="_blank" rel="noopener" download="Aditya-Yellamraju-Resume.pdf" onClick={() => track("resume_download", { source: "nav" })} style={{ color: "#fff", textDecoration: "none", border: "1px solid rgba(167,143,255,0.5)", background: "rgba(73,28,255,0.18)", borderRadius: 100, padding: "5px 14px", fontWeight: 700 }}>
        /résumé
      </a>
    </div>
  </nav>
  );
};

// ─── Halftone portrait: dissolves the face into a purple dot screen ───────
const HalftoneFace = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const W = 1100, H = 1520, gap = 15;
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // cover-crop the image into an offscreen buffer, biased to upper-left
      const off = document.createElement("canvas");
      off.width = W; off.height = H;
      const octx = off.getContext("2d");
      const scale = Math.max(W / img.width, H / img.height);
      const dw = img.width * scale, dh = img.height * scale;
      octx.drawImage(img, (W - dw) * 0.16, (H - dh) * 0.16, dw, dh);
      const data = octx.getImageData(0, 0, W, H).data;
      ctx.font = "700 " + (gap * 0.92) + "px 'JetBrains Mono', ui-monospace, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // main brand gradient, painted through the digits
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, "#491cff");
      grad.addColorStop(1, "#ff99d4");

      // collect the surviving silhouette cells
      const cells = [];
      for (let y = gap / 2; y < H; y += gap) {
        for (let x = gap / 2; x < W; x += gap) {
          const i = ((y | 0) * W + (x | 0)) * 4;
          const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
          const dark = 1 - lum;
          if (dark < 0.42) continue;              // only the face/shoulder mass survives
          cells.push({ x, y, ch: dark > 0.62 ? "1" : "0",
            a: 0.25 + Math.min(1, (dark - 0.42) / 0.35) * 0.75,
            flip: 90 + Math.random() * 260, off: Math.random() * 1000 });
        }
      }

      // slow top→bottom rain-in, then a steady Matrix flicker (no pulsing)
      const REVEAL = 5200, FEATHER = 340;
      const start = performance.now();
      const draw = (now) => {
        const el = now - start;
        const line = Math.min(1, el / REVEAL) * (H + FEATHER);
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = grad;
        for (const c of cells) {
          const rise = (line - c.y) / FEATHER;   // 0 as the line arrives, 1 fully in
          if (rise <= 0) continue;
          // each cell flips 1↔0 on its own cadence → code-rain shimmer
          const ch = (Math.floor((now + c.off) / c.flip) % 2) ? c.ch : (c.ch === "1" ? "0" : "1");
          ctx.globalAlpha = c.a * Math.min(1, rise);
          ctx.fillText(ch, c.x, c.y);
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
    };
    img.src = "assets/aditya-portrait.jpg";
  }, []);
  return <canvas ref={ref} style={{
    position: "absolute", top: 0, right: "2%", height: "108%",
    aspectRatio: "1100 / 1520", opacity: 1, mixBlendMode: "screen",
  }}/>;
};

// ─── Matrix rain: columns of 1s and 0s dropping down the whole hero ───────
const MatrixRain = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const fontSize = 14, gap = 20;
    let W = 0, H = 0, cells = [], colX = [], runners = [], raf = 0, maxRunners = 32, spawn = 0.12;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = Math.max(1, Math.floor(r.width));
      H = Math.max(1, Math.floor(r.height));
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // fewer, gentler runners on small screens
      const mobile = W < 640;
      maxRunners = mobile ? 10 : 32;
      spawn = mobile ? 0.05 : 0.12;
      // a calm, static lattice of bits — each flips on its own slow cadence
      cells = [];
      colX = [];
      for (let x = gap; x < W; x += gap) colX.push(x);
      for (let y = gap; y < H; y += gap) {
        for (let x = gap; x < W; x += gap) {
          cells.push({
            x, y,
            ch: Math.random() > 0.5 ? "1" : "0",
            base: 0.05 + Math.random() * 0.07,      // resting brightness (very low)
            period: 2600 + Math.random() * 4200,    // ms per flip — slow
            phase: Math.random() * 6000,
          });
        }
      }
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      runners = [];
    };
    resize();
    window.addEventListener("resize", resize);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let last = performance.now();
    const draw = (now) => {
      const dt = Math.min(64, now - last); last = now;
      ctx.clearRect(0, 0, W, H);
      ctx.font = "700 " + fontSize + "px 'JetBrains Mono', ui-monospace, monospace";
      // resting lattice
      for (const c of cells) {
        const t = (now + c.phase) / c.period;
        const step = Math.floor(t);
        const ch = step % 2 ? c.ch : (c.ch === "1" ? "0" : "1");
        const glow = 0.5 + 0.5 * Math.sin(t * Math.PI * 2);
        ctx.fillStyle = "rgba(180,158,255," + (c.base + glow * 0.05).toFixed(3) + ")";
        ctx.fillText(ch, c.x, c.y);
      }
      // occasional slow matrix runners descending a column with a fading trail
      if (colX.length && runners.length < maxRunners && Math.random() < spawn) {
        runners.push({
          x: colX[(Math.random() * colX.length) | 0],
          head: -gap * 2,
          speed: 220 + Math.random() * 160,        // px/sec
          trail: (6 + Math.random() * 6) * gap,
        });
      }
      for (let k = runners.length - 1; k >= 0; k--) {
        const rn = runners[k];
        rn.head += rn.speed * dt / 1000;
        for (let y = gap; y <= rn.head && y < H; y += gap) {
          const d = rn.head - y;
          if (d > rn.trail) continue;
          const f = 1 - d / rn.trail;               // 1 at head → 0 at tail
          const ch = ((y + rn.x) / gap | 0) % 2 ? "1" : "0";
          if (d < gap) {                            // bright head, pink
            ctx.fillStyle = "rgba(255,196,230," + Math.min(1, 1.5 * f + 0.3).toFixed(3) + ")";
          } else {
            ctx.fillStyle = "rgba(185,166,255," + Math.min(1, f).toFixed(3) + ")";
          }
          ctx.fillText(Math.random() > 0.5 ? ch : (ch === "1" ? "0" : "1"), rn.x, y);
        }
        if (rn.head - rn.trail > H) runners.splice(k, 1);
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}/>;
};

// ─── BOLD HERO: agent as the hero ────────────────────────────────────────
const BoldHero = () => (
  <section id="home" className="bp-hero" style={{ position: "relative", zIndex: 1, padding: "56px 32px 64px", maxWidth: 1280, margin: "0 auto" }}>
    <div aria-hidden className="bp-hero-face" style={{
      position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
      width: "100vw", height: "100%", zIndex: -1, overflow: "hidden", pointerEvents: "none",
      WebkitMaskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)",
      maskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "#1c1c26" }}/>
      <MatrixRain/>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 66% 52% at 50% 40%, rgba(28,28,38,0.82), rgba(28,28,38,0.35) 68%, transparent 92%)" }}/>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,28,38,0.35) 0%, rgba(28,28,38,0.2) 40%, rgba(28,28,38,0.55) 82%, #1c1c26 100%)" }}/>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, marginBottom: 40 }}>
      <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.08, letterSpacing: -2, textAlign: "center", maxWidth: 1100, margin: 0, color: "#ffffff" }}>
        <span style={{ color: "rgba(255,255,255,0.98)" }}>9 years of UX, from startups to </span>
        <span style={{ background: "linear-gradient(90deg,#b9a6ff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>enterprise AI</span>
        <span style={{ color: "rgba(255,255,255,0.98)" }}> at Salesforce.</span>
        <br/>
        <span style={{ background: "linear-gradient(90deg,#491cff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Now vibe-prototyping at the speed of thought.</span>
      </h1>
      <p className="bp-hero-sub" style={{ fontSize: 20, color: "rgba(255,255,255,0.82)", textAlign: "center", maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
        I'm <strong style={{ color: "#fff", fontWeight: 700 }}>Aditya</strong> — I design core platform and AI experiences for complex systems. These days I vibe-code them too, so design meets engineering the moment an idea lands.
      </p>
      <span className="bp-hero-kicker" style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.68)", letterSpacing: 1.5, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8 }}>
        <span style={{ display: "inline-flex", animation: "sparklePulse 1.6s ease-in-out infinite", color: "#ff99d4", filter: "drop-shadow(0 0 8px rgba(255,153,212,0.7))" }}><SparkleIcon size={14}/></span> …so naturally, I vibe-coded an agent to do my bragging for me — ask it anything
      </span>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
        <button onClick={() => window.dispatchEvent(new Event("open-agent"))} style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff",
          border: "none", borderRadius: 100, padding: "15px 28px", cursor: "pointer",
          fontSize: 16, fontWeight: 700, fontFamily: "inherit",
          boxShadow: "0 14px 40px rgba(73,28,255,0.5)",
        }}>
          <span style={{ display: "inline-flex", animation: "sparklePulse 1.6s ease-in-out infinite" }}><SparkleIcon size={16}/></span>
          Ask the agent
        </button>
        <a href="#work" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "transparent", color: "rgba(255,255,255,0.85)",
          border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 100,
          padding: "15px 26px", cursor: "pointer", fontSize: 16, fontWeight: 600,
          fontFamily: "inherit", textDecoration: "none",
        }}>
          Just show me the work →
        </a>
      </div>
    </div>
    <BoldHeroStats />
  </section>
);

// A bigger version of the agent chat — full-width, the page itself
const SUGGESTIONS_BOLD = [
  "What's Aditya's best AI shipping story?",
  "How does vibe-coding change design reviews?",
  "Walk me through Tableau Pulse",
  "Pitch me a reason to hire for Staff",
];
const CANNED_BOLD = {
  "What's Aditya's best AI shipping story?": "Salesforce Personalization Core Platform — 0→1 over four years, shipped to every Marketing Cloud enterprise customer. He owned the interaction model for how marketers configure ML-driven recommendations without reading an ML paper. The workflow he designed is the one still in production.",
  "How does vibe-coding change design reviews?": "Instead of reviewing 40 static frames, the team reviews a working prototype. Edge cases, empty states, loading, and error paths all exist. PM asks 'what happens when X' and we click it instead of promising to mock it. Decisions happen in hours, not sprints.",
  "Walk me through Tableau Pulse": "Pulse is Salesforce's AI-powered business monitoring platform. Aditya led design strategy and 0→1 design for Project Nexio, the generative-AI insight discovery layer. The hard problem: making AI outputs feel trustworthy and actionable for analysts. The shipped flows — Metrics Digest, Pulse Homepage, AI insight flows — are what he validated.",
  "Pitch me a reason to hire for Staff": "He bridges three rare axes: ML research fluency, enterprise-systems thinking, and vibe-coded prototyping. Most designers have one of those. Staff-level impact comes from multiplying across a team — and Aditya's prototypes become the brief other designers design against.",
};

const BigAgentChat = ({ compact }) => {
  const [messages, setMessages] = React.useState([
    { role: "system", text: "agent initialized · grounded in aditya_yellamraju.résumé · 9+ years of work indexed" },
    { role: "agent", text: "Hey — I'm Aditya's agent. Ask me anything about his work, his process, or why he vibe-codes. Where do you want to start?" },
  ]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [sugg, setSugg] = React.useState(["What does Aditya do at Salesforce?", "Tell me about Project Nexio", "How does he vibe-code?", "Is he open to new roles?"]);
  const scrollRef = React.useRef(null);
  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, typing]);

  const ask = async (q) => {
    if (!q.trim() || typing) return;
    const userText = q.trim();
    track("agent_message", { len: userText.length });
    setMessages(m => [...m, { role: "user", text: userText }]);
    setInput("");
    setSugg([]);
    setTyping(true);

    const history = [...messages, { role: "user", text: userText }]
      .filter(m => m.role === "user" || m.role === "agent")
      .map(m => ({ role: m.role === "agent" ? "assistant" : "user", content: m.text }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        let msg = "I'm only awake on the live site (aditya.design). Meanwhile, find Aditya on LinkedIn — he replies fast.";
        try { const j = await res.json(); if (j && j.message) msg = j.message; } catch (e) {}
        setTyping(false);
        setMessages(m => [...m, { role: "agent", text: msg }]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      let started = false;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        if (!acc) continue;
        if (!started) {
          started = true;
          setTyping(false);
          setMessages(m => [...m, { role: "agent", text: acc }]);
        } else {
          setMessages(m => { const c = m.slice(); c[c.length - 1] = { role: "agent", text: acc }; return c; });
        }
      }
      if (!started) {
        setTyping(false);
        setMessages(m => [...m, { role: "agent", text: "Hmm, I didn't catch that — mind asking again?" }]);
      }
    } catch (e) {
      setTyping(false);
      setMessages(m => [...m, { role: "agent", text: "I couldn't reach my brain just now. Try again in a moment, or catch Aditya on LinkedIn." }]);
    }
  };

  return (
    <div className="bp-chat" style={{
      maxWidth: compact ? "100%" : 900, margin: "0 auto", borderRadius: 20,
      background: "rgba(40,40,52,0.95)", border: "1px solid rgba(167,143,255,0.3)",
      backdropFilter: "blur(20px)", overflow: "hidden",
      boxShadow: "0 60px 120px rgba(73,28,255,0.45), 0 0 0 1px rgba(167,143,255,0.12)",
    }}>
      <div className="bp-chat-header" style={{ padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 12, background: "rgba(28,28,38,0.5)", fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.78)" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }}/>
        agent.aditya.design — session #7f3a · claude · live
        <span className="bp-chat-header-end" style={{ marginLeft: "auto", color: "rgba(255,255,255,0.52)" }}>vibe-coded</span>
      </div>
      <div ref={scrollRef} className="bp-chat-body" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, maxHeight: compact ? 360 : 420, minHeight: compact ? 300 : 380, overflowY: "auto" }}>
        {messages.map((m, i) => m.role === "system"
          ? <div key={i} style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(167,143,255,0.7)" }}>$ {m.text}</div>
          : <BoldBubble key={i} role={m.role} text={m.text} />)}
        {typing && <BoldBubble role="agent" text={<TypingDots />} />}
      </div>
      {sugg.length > 0 && (
        <div className="bp-chat-suggestions" style={{ padding: "0 24px 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {sugg.map(s => (
            <button key={s} onClick={() => ask(s)} style={{
              fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.75)",
              background: "rgba(73,28,255,0.1)", border: "1px solid rgba(73,28,255,0.3)",
              borderRadius: 8, padding: "7px 12px", cursor: "pointer",
            }}>› {s}</button>
          ))}
        </div>
      )}
      <form onSubmit={e => { e.preventDefault(); ask(input); }} className="bp-chat-form" style={{ display: "flex", gap: 10, padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(28,28,38,0.5)", alignItems: "center" }}>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 14, color: "#b9a6ff" }}>›</span>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="ask anything…"
          style={{ flex: 1, background: "transparent", border: "none", color: "#fff", fontSize: 15, fontFamily: "'Source Sans 3',sans-serif", outline: "none" }}/>
        <span className="bp-cmd-hint" style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 4 }}>
          <CommandIcon size={12}/> ↵
        </span>
        <button type="submit" style={{ background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 700, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}>
          Send <ArrowIcon size={13}/>
        </button>
      </form>
    </div>
  );
};
const BoldBubble = ({ role, text }) => (
  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flexDirection: role === "user" ? "row-reverse" : "row" }}>
    {role === "agent" && (
      <div style={{ width: 30, height: 30, borderRadius: 10, background: "linear-gradient(135deg,#491cff,#ff99d4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, fontWeight: 900, letterSpacing: -0.5 }}>AY</div>
    )}
    <div className="bp-bubble" style={{
      background: role === "user" ? "rgba(73,28,255,0.25)" : "rgba(255,255,255,0.08)",
      border: `1px solid ${role === "user" ? "rgba(73,28,255,0.45)" : "rgba(255,255,255,0.12)"}`,
      color: "rgba(255,255,255,0.95)",
      padding: "12px 16px", borderRadius: 12, fontSize: 15, lineHeight: 1.6, maxWidth: "80%",
    }}>{text}</div>
  </div>
);

// ─── VIBE-CODING PROTOTYPES ───────────────────────────────────────────
const VIBE_PROTOS = [
  { clips: ["assets/vibe/proto-1a.webm", "assets/vibe/proto-1b.webm", "assets/vibe/proto-1c.webm"], title: "Salesforce Personalization Campaign", tool: "Claude + Cursor", desc: "The core configuration platform, reimagined marketer-friendly — prototyped and clickable, not static frames." },  { src: "assets/vibe/proto-2.gif", title: "Agentic Web Content Personalization", tool: "Cursor", clips: ["assets/vibe/proto-2a.webm", "assets/vibe/proto-2b.webm", "assets/vibe/proto-2c.webm"], desc: "The platform applied to a conversational, agentic marketing use case — live and navigable." },
  { clips: ["assets/vibe/proto-3a.webm", "assets/vibe/proto-3b.webm", "assets/vibe/proto-3c.webm"], title: "Agentic Recommendation Filters Creation", tool: "Claude Code", desc: "Part of the recommendations engine — building catalog filters through a natural-language agent." },
];
const VibeMedia = ({ p }) => {
  const [idx, setIdx] = React.useState(0);
  const [inView, setInView] = React.useState(false);
  const boxRef = React.useRef(null);
  const clips = p.clips;
  React.useEffect(() => {
    if (inView) return;
    const check = () => {
      const el = boxRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh + 400 && r.bottom > -400) { setInView(true); }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, [inView]);
  if (clips) {
    return (
      <div ref={boxRef} style={{ position: "absolute", inset: 0 }}>
        {inView ? (
          <video key={idx} src={clips[idx]} muted playsInline autoPlay preload="auto"
            ref={el => { if (el) el.playbackRate = 1.0; }}
            onLoadedMetadata={e => { e.currentTarget.playbackRate = 1.0; }}
            onEnded={() => setIdx((idx + 1) % clips.length)}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(73,28,255,0.14), rgba(255,153,212,0.1))" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff99d4", animation: "pulse 2s ease-in-out infinite" }} />
          </div>
        )}
      </div>
    );
  }
  return (
    <React.Fragment>
      <img src={p.src} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />
      <div style={{ display: "none", position: "absolute", inset: 0, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, color: "rgba(167,143,255,0.8)", textAlign: "center", padding: 16 }}>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800 }}>GIF coming</span>
      </div>
    </React.Fragment>
  );
};
const BoldVibeProtos = () => (
  <div style={{ marginTop: 40 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
      <SectionKicker rule={false}>Prototypes</SectionKicker>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>design meets engineering the moment an idea lands</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="bp-vibe-grid">
      {VIBE_PROTOS.map((p, i) => (
        <div key={i} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(167,143,255,0.22)", background: "rgba(40,40,52,0.7)", display: "flex", flexDirection: "column" }}>
          <div style={{ aspectRatio: "16 / 10", background: "rgba(22,22,30,0.6)", position: "relative", overflow: "hidden" }}>
            <VibeMedia p={p} />
          </div>
          <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, color: "#b9a6ff", background: "rgba(73,28,255,0.15)", border: "1px solid rgba(167,143,255,0.3)", borderRadius: 6, padding: "2px 8px", alignSelf: "flex-start", textTransform: "uppercase", letterSpacing: 0.8 }}>{p.tool}</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>{p.title}</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", lineHeight: 1.5 }}>{p.desc}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BoldAgentDock = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handler = () => { setOpen(true); track("agent_opened", { source: "cta" }); };
    window.addEventListener("open-agent", handler);
    const key = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("open-agent", handler); window.removeEventListener("keydown", key); };
  }, []);

  return (
    <>
      {/* Floating launch button */}
      {!open && (
        <button onClick={() => { setOpen(true); track("agent_opened", { source: "dock" }); }} aria-label="Open the agent" style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 300,
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff",
          border: "none", borderRadius: 100, padding: "14px 22px", cursor: "pointer",
          fontSize: 15, fontWeight: 700, fontFamily: "'Source Sans 3',sans-serif",
          boxShadow: "0 14px 40px rgba(73,28,255,0.5)",
        }}>
          <span style={{ display: "inline-flex", animation: "sparklePulse 1.6s ease-in-out infinite" }}><SparkleIcon size={16}/></span>
          Ask the agent
        </button>
      )}

      {/* Panel + backdrop */}
      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: "fixed", inset: 0, zIndex: 400,
          background: "rgba(12,12,18,0.6)", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "flex-end", justifyContent: "flex-end",
          padding: 28,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            width: "100%", maxWidth: 460, position: "relative",
            animation: "agentDockIn 0.28s cubic-bezier(0.22,1,0.36,1) both",
          }}>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{
              position: "absolute", top: -14, right: -6, zIndex: 2,
              width: 32, height: 32, borderRadius: "50%", cursor: "pointer",
              background: "rgba(40,40,52,0.95)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontSize: 16, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center",
            }}>×</button>
            <BigAgentChat compact />
          </div>
        </div>
      )}
    </>
  );
};

const BoldHeroStats = () => (
  <div className="bp-stats" style={{ maxWidth: 1100, margin: "48px auto 0", display: "flex", flexDirection: "column", gap: 16 }}>
    {/* Top row — 3 hero numbers */}
    <div className="bp-stats-row1" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {[
        ["3", "AI / NLG products designed to shipped"],
        ["5", "platform capabilities owned"],
        ["2", "0→1 platform launches"],
      ].map(([n, l], i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "22px 20px", textAlign: "center" }}>
          <div className="bp-stat-num" style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, lineHeight: 1, background: "linear-gradient(90deg,#491cff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 6 }}>{n}</div>
          <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.78)", textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 600 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─── DESIGN EXPERTISE (own section, lifted out of the hero) ──────────────
const EXPERTISE = [
  { t: "Agentic UX", d: "chat, canvases, tool-use" },
  { t: "AI / ML UX", d: "models meet workflows" },
  { t: "Enterprise SaaS UX", d: "platforms that scale" },
  { t: "Data Storytelling UX", d: "insights to action" },
  { t: "Vibe Coding", d: "prototypes as spec" },
];
const BoldExpertise = () => (
  <section className="bp-section bp-expertise" style={{ position: "relative", zIndex: 1, padding: "8px 32px 40px", maxWidth: 1100, margin: "0 auto" }}>
    <div style={{ marginBottom: 20 }}>
      <SectionKicker>Design expertise</SectionKicker>
    </div>
    <div className="bp-expertise-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
      {EXPERTISE.map((x, i) => (
        <div key={i} style={{ background: "rgba(40,40,52,0.6)", border: "1px solid rgba(167,143,255,0.22)", borderRadius: 14, padding: "20px 20px", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 12, fontFamily: "ui-monospace,Menlo,monospace", color: "#b9a6ff", fontWeight: 700 }}>0{i+1}</span>
          <span style={{ fontSize: 17, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>{x.t}</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.45 }}>{x.d}</span>
        </div>
      ))}
    </div>
  </section>
);

// ─── ABOUT ──────────────────────────────────────────────────────────────
const BoldAbout = () => (
  <section id="about" className="bp-section bp-about" style={{ position: "relative", zIndex: 1, padding: "96px 32px", maxWidth: 1100, margin: "0 auto" }}>
    <div aria-hidden style={{
      position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
      width: "100vw", height: "100%", zIndex: -1, overflow: "hidden", pointerEvents: "none",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 92%, transparent 100%)",
      maskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 92%, transparent 100%)",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "#1c1c26" }}/>
      <img src="assets/aditya-portrait.jpg" alt="" style={{
        position: "absolute", top: 0, right: 0, height: "100%", width: "58%",
        objectFit: "cover", objectPosition: "center 28%", display: "block",
        filter: "grayscale(1) contrast(0.9) brightness(1.05) blur(1.5px)",
        opacity: 0.4,
        WebkitMaskImage: "radial-gradient(140% 120% at 65% 34%, #000 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 68%, rgba(0,0,0,0.12) 88%, transparent 100%), linear-gradient(to right, transparent 0%, #000 34%)",
        maskImage: "radial-gradient(140% 120% at 65% 34%, #000 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 68%, rgba(0,0,0,0.12) 88%, transparent 100%), linear-gradient(to right, transparent 0%, #000 34%)",
        WebkitMaskComposite: "source-in", maskComposite: "intersect",
      }} onError={e => { e.currentTarget.style.display = "none"; }}/>
      <div style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "58%", background: "radial-gradient(120% 90% at 82% 42%, rgba(73,28,255,0.16) 0%, transparent 65%)", mixBlendMode: "screen" }}/>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #1c1c26 0%, rgba(28,28,38,0.94) 30%, rgba(28,28,38,0.55) 60%, rgba(28,28,38,0.25) 100%)" }}/>
    </div>
    <SectionKicker>01 · about</SectionKicker>
    <h2 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.5, marginTop: 16, marginBottom: 36, color: "#ffffff" }}>
      From <em style={{ fontStyle: "normal", color: "#ff99d4" }}>advertising</em> to{" "}
      <em style={{ fontStyle: "normal", background: "linear-gradient(90deg,#491cff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>complex systems UX</em>.
    </h2>

    <div className="bp-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: 0 }}>
          I started in <strong style={{ color: "#fff", fontWeight: 700 }}>advertising and digital media</strong>, where the work was fast, measurable, and stakeholder-heavy. Wearing multiple hats — strategy, research, client management, and design execution — trained me to clarify ambiguity, align teams, and ship under real constraints.
        </p>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: 0 }}>
          That foundation made the transition to product design natural: I brought an outcomes mindset — instrumentation, experiments, iteration — and deepened it with an <strong style={{ color: "#fff", fontWeight: 700 }}>M.S. in Human-Computer Interaction from DePaul University</strong>. Today I apply those skills to enterprise platforms, turning <strong style={{ color: "#fff", fontWeight: 700 }}>complex AI and data systems</strong> into usable workflows that scale.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", color: "rgba(255,153,212,0.85)", marginBottom: 4 }}>
          What you'll see in the work below
        </div>
        {[
          { k: "Systems thinking", v: "workflows, state models, guardrails, and scalable patterns" },
          { k: "AI made usable", v: "turning ML, NLG, and agents into experiences people trust and can configure themselves" },
          { k: "Cross-functional leadership", v: "tight partnership with PM, Eng, and Data Science — driving alignment across clouds" },
        ].map((item, i) => (
          <div key={i} style={{
            border: "1px solid rgba(167,143,255,0.22)",
            background: "rgba(40,40,52,0.6)",
            borderRadius: 12,
            padding: "16px 18px",
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
          }}>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#b9a6ff", marginTop: 2, fontWeight: 700, letterSpacing: 0.5 }}>
              0{i + 1}
            </span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{item.k}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.55 }}>{item.v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
const SectionKicker = ({ children, rule = true }) => (
  rule ? (
    <div style={{ display: "flex", alignItems: "center", gap: 14, width: "100%" }}>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,153,212,0.8)", whiteSpace: "nowrap" }}>{children}</span>
      <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,153,212,0.18), rgba(255,255,255,0.05) 55%, transparent)" }}/>
    </div>
  ) : (
    <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,153,212,0.8)" }}>{children}</span>
  )
);

// ─── NOW ────────────────────────────────────────────────────────────────
const BoldNow = () => (
  <section id="now" className="bp-section" style={{ position: "relative", zIndex: 1, padding: "64px 32px", maxWidth: 1000, margin: "0 auto" }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
      <SectionKicker rule={false}>02 · now</SectionKicker>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
        last synced · 2 days ago
      </span>
    </div>
    <div style={{ border: "1px solid rgba(167,143,255,0.25)", borderRadius: 18, background: "rgba(40,40,52,0.75)", overflow: "hidden" }}>
      {NOW.map((n, i) => (
        <div key={i} className="bp-now-row" style={{ padding: "24px 28px", borderBottom: i < NOW.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", display: "flex", gap: 20, alignItems: "flex-start" }}>
          <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "#b9a6ff", marginTop: 4, width: 28, flexShrink: 0, fontWeight: 700 }}>0{i+1}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", color: "rgba(255,153,212,0.85)", fontWeight: 700 }}>{n.label}</span>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,0.88)", lineHeight: 1.55 }}>{n.text}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Featured — Agentblazer Champion (recognition) */}
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", border: "1px solid rgba(255,153,212,0.4)", background: "linear-gradient(135deg, rgba(73,28,255,0.18) 0%, rgba(255,153,212,0.08) 100%)", borderRadius: 14, marginTop: 16, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#ffd6ec", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800 }}>★ Recognition</span>
      <span style={{ fontSize: 16, color: "#fff", fontWeight: 600, flex: 1, minWidth: 240 }}>Salesforce <strong><a href="https://trailhead.salesforce.com/agentblazer" target="_blank" rel="noopener" style={{ color: "#ffd6ec", textDecoration: "none", borderBottom: "1px solid rgba(255,214,236,0.4)" }}>Agentblazer Champion</a></strong>, a Salesforce Agentblazer status recognizing hands-on skills in building with Agentforce, Data Cloud, and AI on the Salesforce platform.</span>
    </div>

    {/* Featured — Accelerate leadership program (recognition) */}
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", border: "1px solid rgba(255,153,212,0.4)", background: "linear-gradient(135deg, rgba(73,28,255,0.18) 0%, rgba(255,153,212,0.08) 100%)", borderRadius: 14, marginTop: 12, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#ffd6ec", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800 }}>★ Recognition</span>
      <span style={{ fontSize: 16, color: "#fff", fontWeight: 600, flex: 1, minWidth: 240 }}>Selected and graduated from <strong>Accelerate</strong> (2024) — Salesforce's competitive leadership &amp; management development program.</span>
    </div>
  </section>
);

// ─── TOOLKIT ──────────────────────────────────────────────────────────────
const BoldToolkit = () => (
  <section id="toolkit" className="bp-section" style={{ position: "relative", zIndex: 1, padding: "64px 32px", maxWidth: 1100, margin: "0 auto" }}>
    <SectionKicker>03 · vibe coding toolkit</SectionKicker>
    <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -1, marginTop: 10, marginBottom: 8, color: "#ffffff" }}>AI-fluent design isn't a buzzword. It's my workbench.</h2>
    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.82)", lineHeight: 1.6, marginBottom: 28, maxWidth: "none" }}>
      Every artifact in this portfolio was built with the tools below. Each one earns its place — I pick the right tool for the moment, not the brand.
    </p>

    {/* Primary toolkit */}
    <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,153,212,0.9)", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800, marginBottom: 12 }}>Primary toolkit — daily drivers</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, marginBottom: 24 }}>
      {[
        { name: "Claude", note: "daily driver — chat, agent, code", logo: "assets/logos/claude.svg" },
        { name: "Claude Code", note: "in-IDE pair programmer", logo: "assets/logos/claude.svg" },
        { name: "GitHub", note: "version control & deploys", logo: "assets/logos/github.svg" },
        { name: "Gemini", note: "multi-modal exploration", logo: "assets/logos/gemini.svg" },
        { name: "Agentforce", note: "Salesforce agentic platform", logo: "assets/agentforce-logo.svg" },
      ].map((t, i) => (
        <div key={i} style={{
          background: "rgba(73,28,255,0.14)",
          border: "1px solid rgba(167,143,255,0.4)",
          borderRadius: 12, padding: "14px 16px",
          display: "flex", gap: 12, alignItems: "center",
        }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {t.svg ? t.svg : <img src={t.logo} alt="" width="20" height="20" style={{ opacity: 0.92, filter: t.filter }} onError={(e) => e.currentTarget.style.display = "none"} />}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{t.name}</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>{t.note}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Also in rotation */}
    <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.64)", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800, marginBottom: 12 }}>Also in rotation</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
      {[
        { name: "Cursor", note: "AI-native code editor", logo: "assets/logos/cursor.svg" },
        { name: "Figma Make", note: "AI-powered Figma prototyping", logo: "assets/logos/figma.svg" },
        { name: "ChatGPT", note: "research + copy generation", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff" aria-hidden="true"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg> },
        { name: "Google NotebookLM", note: "source-grounded synthesis", logo: "assets/logos/google.svg" },
      ].map((t, i) => (
        <div key={i} style={{
          background: "rgba(40,40,52,0.7)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12, padding: "14px 16px",
          display: "flex", gap: 12, alignItems: "center",
        }}>
          {(t.logo || t.svg) && (
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {t.svg ? t.svg : <img src={t.logo} alt="" width="20" height="20" style={{ opacity: 0.92, filter: t.filter }} onError={(e) => e.currentTarget.style.display = "none"} />}
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{t.name}</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>{t.note}</span>
          </div>
        </div>
      ))}
    </div>

    <BoldVibeProtos />
  </section>
);

// ─── WORK — image-forward showcase: featured hero + large image-top cards ───
const openCase = (c) => {
  if (c.slug === "experimentation") return;
  track("case_study_view", { project: c.slug });
  const map = {
    "personalization": "case-personalization-private.html",
    "recommendations-engine": "case-recommendations-engine.html",
    "pulse-nexio": "case-tableau-pulse.html",
    "data-stories": "case-data-stories.html",
    "flying-squirrel": "case-flying-squirrel.html",
  };
  if (map[c.slug]) window.location.href = map[c.slug];
};
const BoldWork = () => {
  const featured = CASES.find(c => c.slug === "personalization") || CASES[0];
  const rest = CASES.filter(c => c !== featured);
  return (
    <section id="work" className="bp-section bp-work" style={{ position: "relative", zIndex: 1, padding: "64px 0 80px" }}>
      <div className="bp-work-header" style={{ maxWidth: 1280, margin: "0 auto 32px", padding: "0 32px" }}>
        <div>
          <SectionKicker>04 · work</SectionKicker>
          <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -1, marginTop: 10, color: "#ffffff" }}>Six case studies.</h2>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: 20 }}>
        <BoldFeatureCase c={featured} featured/>
        {rest.map(c => <BoldFeatureCase key={c.slug} c={c} />)}
      </div>
    </section>
  );
};
const BoldFeatureCase = ({ c, featured }) => {
  const isComingSoon = c.slug === "experimentation";
  return (
  <div
    className="bp-feature"
    onClick={() => { if (!isComingSoon) openCase(c); }}
    style={{
      border: "1px solid rgba(167,143,255,0.22)", borderRadius: 24, overflow: "hidden",
      cursor: isComingSoon ? "default" : "pointer",
      background: "#1c1c26", transition: "border-color .2s, transform .2s",
      display: "grid", gridTemplateColumns: "minmax(0,42%) 1fr", alignItems: "stretch",
    }}
    onMouseEnter={e => { if (!isComingSoon) { e.currentTarget.style.borderColor = "rgba(167,143,255,0.6)"; e.currentTarget.style.transform = "translateY(-4px)"; } }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(167,143,255,0.22)"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div className="bp-feature-body" style={{ padding: "48px 44px", display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{c.year} · {c.company}</span>
        {(featured || c.slug === "pulse-nexio") && <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: "#1c1c26", background: "#ff99d4", borderRadius: 6, padding: "3px 8px" }}>Featured</span>}
      </div>
      <h3 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, color: "#ffffff", margin: 0 }}>{c.title}</h3>
      <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.74)", lineHeight: 1.6, margin: 0 }}>{c.blurb}</p>
      {c.tags && c.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 2 }}>
          {c.tags.slice(0, 2).map(t => (
            <span key={t} style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10.5, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase", color: "#d9c9ff", background: "rgba(167,143,255,0.14)", border: "1px solid rgba(167,143,255,0.3)", borderRadius: 999, padding: "5px 11px" }}>{t}</span>
          ))}
        </div>
      )}
      {isComingSoon
        ? <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 700, marginTop: 6 }}>Coming soon</span>
        : <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#ff99d4", fontSize: 14, fontWeight: 700, marginTop: 6 }}>View case study <ArrowIcon size={13}/></span>}
    </div>
    <div className="bp-feature-mock" style={{ background: c.accent, position: "relative", overflow: "hidden", minHeight: 360, display: "flex", alignItems: "center", justifyContent: "center", padding: c.hero ? 0 : 24 }}>
      {c.slug === "recommendations-engine" && (
        <span style={{ position: "absolute", top: 12, left: 12, right: 12, zIndex: 2, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10.5, fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase", color: "#1c1c26", background: "#ffd84d", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "0 6px 18px rgba(0,0,0,0.35)", borderRadius: 8, padding: "7px 11px", textAlign: "center", lineHeight: 1.35 }}>Case study being updated · designs coming soon</span>
      )}
      {c.hero
        ? <img src={c.hero} alt={c.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center", display: "block" }}/>
        : <BoldMiniMock slug={c.slug}/>}
    </div>
  </div>
  );
};
const BoldCase = ({ c }) => (
  <div
    className="bp-case"
    onClick={() => openCase(c)}
    style={{
      border: "1px solid rgba(167,143,255,0.22)", borderRadius: 20, overflow: "hidden",
      cursor: c.slug === "experimentation" ? "default" : "pointer",
      background: "#1c1c26", transition: "border-color .2s, transform .2s",
      display: "flex", flexDirection: "column",
    }}
    onMouseEnter={e => { if (c.slug !== "experimentation") { e.currentTarget.style.borderColor = "rgba(167,143,255,0.6)"; e.currentTarget.style.transform = "translateY(-4px)"; } }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(167,143,255,0.22)"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div className="bp-case-mock" style={{ background: c.accent, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: c.hero ? 0 : 20, height: 300 }}>
      {c.slug === "recommendations-engine" && (
        <span style={{ position: "absolute", top: 12, left: 12, right: 12, zIndex: 2, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10.5, fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase", color: "#1c1c26", background: "#ffd84d", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "0 6px 18px rgba(0,0,0,0.35)", borderRadius: 8, padding: "7px 11px", textAlign: "center", lineHeight: 1.35 }}>Case study being updated · designs coming soon</span>
      )}
      {c.hero
        ? <img src={c.hero} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}/>
        : <BoldMiniMock slug={c.slug}/>}
    </div>
    <div className="bp-case-body" style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: 9 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10.5, color: "rgba(255,255,255,0.55)" }}>{c.year} · {c.company}</span>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: "#ff99d4" }}>{c.slug === "experimentation" ? "Coming soon" : c.tags[0]}</span>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 900, lineHeight: 1.2, letterSpacing: -0.4, color: "#ffffff", margin: 0 }}>{c.title}</h3>
      <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.66)", lineHeight: 1.5, margin: 0 }}>{c.blurb}</p>
    </div>
  </div>
);

// ─── TESTIMONIALS ───────────────────────────────────────────────────────
const BoldTestimonials = () => (
  <section className="bp-section" style={{ position: "relative", zIndex: 1, padding: "64px 32px", maxWidth: 1280, margin: "0 auto" }}>
    <SectionKicker>05 · signal</SectionKicker>
    <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -1, marginTop: 10, marginBottom: 40, color: "#ffffff" }}>From people I've shipped with.</h2>
    <div className="bp-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {TESTIMONIALS.map((t, i) => (
        <div key={i} className="bp-testimonial" style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, padding: 26, background: "rgba(40,40,52,0.6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: `linear-gradient(135deg, hsl(${250+i*30} 70% 55%), hsl(${320+i*20} 70% 65%))`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff" }}>{t.name.split(" ").map(w => w[0]).join("").slice(0,2)}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>{t.name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.64)", fontFamily: "ui-monospace,Menlo,monospace" }}>{t.role}</div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{t.quote}</p>
        </div>
      ))}
    </div>
  </section>
);

// ─── FOOTER ─────────────────────────────────────────────────────────────
const BoldFooter = () => (
  <footer id="contact" className="bp-footer" style={{ position: "relative", zIndex: 1, padding: "96px 32px 48px", maxWidth: 1280, margin: "0 auto" }}>
    <div className="bp-footer-inner" style={{ border: "1px solid rgba(73,28,255,0.4)", borderRadius: 24, padding: "56px 48px", background: "linear-gradient(135deg, rgba(73,28,255,0.15), rgba(255,153,212,0.08))", textAlign: "center", overflow: "hidden", position: "relative" }}>
      <SectionKicker rule={false}>06 · contact</SectionKicker>
      <h2 style={{ fontSize: 56, fontWeight: 900, letterSpacing: -2, marginTop: 16, marginBottom: 12, color: "#ffffff" }}>Let's build something.</h2>
      <p style={{ fontSize: 18, color: "rgba(255,255,255,0.82)", marginBottom: 28 }}>Staff / Lead UX · Austin, TX · remote-friendly · open to relocation to Bay Area California, NYC, or Chicago</p>
      <div className="bp-footer-cta" style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <a href="https://www.linkedin.com/in/aditya-yellamraju" onClick={() => track("linkedin_click")} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff", fontSize: 15, fontWeight: 700, padding: "14px 28px", borderRadius: 100, textDecoration: "none", boxShadow: "0 14px 40px rgba(73,28,255,0.5)" }}>Message me on LinkedIn <ArrowIcon size={14}/></a>
        <a href="assets/Aditya-Yellamraju-Resume.pdf" onClick={() => track("resume_download")} target="_blank" rel="noopener" download="Aditya-Yellamraju-Resume.pdf" style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 600, padding: "13px 24px", borderRadius: 100, textDecoration: "none" }}><DownloadIcon size={14}/> Résumé</a>
      </div>
    </div>
    <div className="bp-footer-meta" style={{ display: "flex", justifyContent: "space-between", marginTop: 32, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
      <span>© 2026 · aditya yellamraju · handcrafted, then robot-polished</span>
      <span>no designers were replaced in the making of this site</span>
    </div>
  </footer>
);

window.BoldPortfolio = BoldPortfolio;
