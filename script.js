/* ============ TOKENS ============ */
:root {
    --bg: #f6f5f1;
    --surface: #ffffff;
    --surface-2: #efeee8;
    --text: #14161a;
    --muted: #5b616b;
    --line: #e2e0d8;
    --accent: #4f46e5;
    --accent-2: #0ea5a4;
    --accent-soft: rgba(79, 70, 229, .1);
    --shadow: 0 18px 40px -22px rgba(20, 22, 26, .25);
    --radius: 20px;
    --font-head: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}
[data-theme="dark"] {
    --bg: #0c0e12;
    --surface: #14171d;
    --surface-2: #1a1e26;
    --text: #eceef2;
    --muted: #98a0ad;
    --line: #232831;
    --accent: #8b87ff;
    --accent-2: #2dd4bf;
    --accent-soft: rgba(139, 135, 255, .14);
    --shadow: 0 18px 40px -22px rgba(0, 0, 0, .8);
}

/* ============ BASE ============ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 84px; }
body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    transition: background .3s, color .3s;
}
/* subtle dotted grid backdrop */
body::before {
    content: "";
    position: fixed; inset: 0; z-index: -1;
    background-image: radial-gradient(var(--line) 1px, transparent 1px);
    background-size: 26px 26px;
    -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%);
            mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%);
    opacity: .9;
}
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 8px; }

.container { width: min(1120px, 92%); margin-inline: auto; }
.section { padding: 5.5rem 0; }
.skip-link { position: absolute; left: -999px; top: 8px; background: var(--accent); color: #fff; padding: .5rem 1rem; border-radius: 8px; z-index: 100; }
.skip-link:focus { left: 8px; }

h1, h2, h3, h4 { font-family: var(--font-head); line-height: 1.12; letter-spacing: -.02em; }
.accent-text {
    background: linear-gradient(100deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text; background-clip: text; color: transparent;
}

/* ============ BUTTONS ============ */
.btn {
    display: inline-flex; align-items: center; gap: .6rem;
    padding: .85rem 1.5rem; border-radius: 999px;
    font: 600 .95rem var(--font-body);
    border: 1px solid transparent; cursor: pointer;
    transition: transform .25s, box-shadow .25s, background .25s, border-color .25s;
}
.btn i { font-size: .85rem; transition: transform .25s; }
.btn:hover { transform: translateY(-2px); }
.btn:hover .fa-arrow-right { transform: translateX(3px); }
.btn-solid { background: var(--text); color: var(--bg); }
.btn-solid:hover { box-shadow: 0 12px 28px -10px var(--accent); background: var(--accent); color: #fff; }
.btn-ghost { background: transparent; border-color: var(--line); color: var(--text); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
.btn-sm { padding: .55rem 1.15rem; font-size: .85rem; }
.btn-lg { padding: 1rem 1.8rem; font-size: 1rem; }

.icon-btn {
    width: 40px; height: 40px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    background: var(--surface); color: var(--text);
    border: 1px solid var(--line); cursor: pointer;
    transition: transform .25s, border-color .25s, color .25s;
}
.icon-btn:hover { transform: translateY(-2px) rotate(-6deg); border-color: var(--accent); color: var(--accent); }

/* ============ NAV ============ */
.nav { position: sticky; top: 0; z-index: 50; transition: background .3s, box-shadow .3s, backdrop-filter .3s; }
.nav.scrolled { background: color-mix(in srgb, var(--bg) 82%, transparent); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); box-shadow: 0 1px 0 var(--line); }
.nav-inner { width: min(1120px, 92%); margin-inline: auto; height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.logo { display: flex; align-items: center; gap: .6rem; font: 700 1.15rem var(--font-head); }
.logo-mark {
    width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center;
    background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #fff; font-size: 1rem;
}
.logo .dot { color: var(--accent); }
.nav-links { display: flex; gap: .4rem; }
.nav-links a { padding: .45rem .9rem; border-radius: 999px; font-size: .9rem; font-weight: 500; color: var(--muted); transition: color .2s, background .2s; }
.nav-links a:hover, .nav-links a.active { color: var(--text); background: var(--surface-2); }
.nav-right { display: flex; align-items: center; gap: .7rem; }

/* ============ HERO ============ */
.hero { padding: 4rem 0 3rem; }
.hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 3.5rem; align-items: center; }
.eyebrow {
    display: inline-flex; align-items: center; gap: .6rem;
    padding: .4rem .9rem; border-radius: 999px;
    background: var(--accent-soft); color: var(--accent);
    font: 500 .78rem var(--font-mono); letter-spacing: .02em; margin-bottom: 1.4rem;
}
.hero h1 { font-size: clamp(2.6rem, 6.4vw, 4.8rem); font-weight: 700; margin-bottom: 1.3rem; }
.lead { font-size: 1.1rem; color: var(--muted); max-width: 34rem; }
.lead strong { color: var(--text); }
.hero-cta { display: flex; flex-wrap: wrap; gap: .9rem; margin: 2rem 0 1.8rem; }
.hero-tags { display: flex; flex-wrap: wrap; gap: .5rem; }
.hero-tags span, .tags span {
    font: 500 .78rem var(--font-mono); padding: .3rem .7rem; border-radius: 8px;
    background: var(--surface); border: 1px solid var(--line); color: var(--muted);
}

.live { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; position: relative; display: inline-block; flex: none; }
.live::after { content: ""; position: absolute; inset: 0; border-radius: 50%; background: #22c55e; animation: ping 1.8s ease-out infinite; }
@keyframes ping { to { transform: scale(2.8); opacity: 0; } }

/* hero visual */
.hero-visual { position: relative; max-width: 400px; justify-self: center; width: 100%; }
.photo-frame {
    position: relative; padding: 10px; border-radius: 32px;
    background: linear-gradient(145deg, var(--accent), var(--accent-2));
    transform: rotate(2.5deg); transition: transform .5s cubic-bezier(.16, 1, .3, 1);
    box-shadow: var(--shadow);
}
.hero-visual:hover .photo-frame { transform: rotate(0); }
.hero-img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 24px; background: var(--surface-2); }

.float-card {
    position: absolute; background: var(--surface); border: 1px solid var(--line);
    border-radius: 16px; box-shadow: var(--shadow); padding: .8rem 1rem;
    animation: float 5s ease-in-out infinite;
}
.chart-card { left: -34px; bottom: 34px; width: 150px; }
.sql-card { right: -22px; top: 26px; animation-delay: -2.5s; }
.fc-label { display: block; font: 500 .7rem var(--font-mono); color: var(--muted); margin-bottom: .5rem; }
.bars { display: flex; align-items: flex-end; gap: 6px; height: 54px; }
.bars i { flex: 1; height: var(--h); border-radius: 4px 4px 2px 2px; background: linear-gradient(to top, var(--accent), var(--accent-2)); transform-origin: bottom; animation: grow 1.1s cubic-bezier(.16, 1, .3, 1) both; }
.bars i:nth-child(2) { animation-delay: .08s } .bars i:nth-child(3) { animation-delay: .16s }
.bars i:nth-child(4) { animation-delay: .24s } .bars i:nth-child(5) { animation-delay: .32s } .bars i:nth-child(6) { animation-delay: .4s }
@keyframes grow { from { transform: scaleY(0); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.sql-card code { font: 500 .78rem/1.5 var(--font-mono); color: var(--text); }
.sql-card .k { color: var(--accent); }

/* ============ SECTION HEADS ============ */
.section-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.2rem; }
.section-head h2 { font-size: clamp(1.8rem, 4vw, 2.6rem); }
.section-no { font: 500 .9rem var(--font-mono); color: var(--accent); }

/* ============ ABOUT / BENTO ============ */
.bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.1rem; }
.box {
    background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
    padding: 1.7rem; transition: transform .3s, border-color .3s, box-shadow .3s;
}
.box:hover { transform: translateY(-4px); border-color: var(--accent); box-shadow: var(--shadow); }
.box-about { grid-column: 1 / -1; }
.box h3 { font-size: 1.2rem; margin-bottom: .8rem; display: flex; align-items: center; gap: .6rem; }
.box h3 i { color: var(--accent); }
.box p { color: var(--muted); max-width: 52rem; }
.box p strong { color: var(--text); }
.box-label { font: 500 .75rem var(--font-mono); color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }
.box h4 { font-size: 1.3rem; margin-top: .5rem; display: flex; align-items: center; gap: .6rem; }
.box h4 i { color: var(--accent); font-size: 1.05rem; }
.bento .box:nth-child(2), .bento .box:nth-child(3) { grid-column: span 1; }
.bento .box:nth-child(2) { grid-column: 1 / span 1; }

/* ============ SKILLS ============ */
.skills { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; }
.skill {
    display: flex; flex-direction: column; align-items: center; gap: .8rem;
    padding: 1.6rem 1rem; border-radius: var(--radius);
    background: var(--surface); border: 1px solid var(--line);
    font: 600 .95rem var(--font-head);
    transition: transform .3s, border-color .3s, box-shadow .3s;
}
.skill i { font-size: 1.9rem; color: var(--accent); transition: transform .3s, color .3s; }
.skill:hover { transform: translateY(-6px); border-color: var(--accent); box-shadow: var(--shadow); }
.skill:hover i { transform: scale(1.15) rotate(-6deg); color: var(--accent-2); }

/* ============ PROJECTS ============ */
.projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
.project {
    position: relative; display: flex; flex-direction: column;
    background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
    padding: 1.6rem; overflow: hidden;
    transition: transform .35s cubic-bezier(.16, 1, .3, 1), border-color .3s, box-shadow .3s;
}
.project::before {
    content: ""; position: absolute; inset: 0 0 auto 0; height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    transform: scaleX(0); transform-origin: left; transition: transform .4s;
}
.project:hover { transform: translateY(-6px); border-color: var(--accent); box-shadow: var(--shadow); }
.project:hover::before { transform: scaleX(1); }
.project-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.4rem; }
.project-no { font: 500 .85rem var(--font-mono); color: var(--muted); }
.project-icon { font-size: 1.6rem; color: var(--accent); margin-bottom: 1rem; }
.project h3 { font-size: 1.3rem; margin-bottom: .6rem; }
.project p { color: var(--muted); font-size: .95rem; margin-bottom: 1.3rem; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: .45rem; }

/* ============ CONTACT ============ */
.contact-card {
    text-align: center; padding: 4rem 1.5rem; border-radius: 32px;
    background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 16%, var(--surface)), color-mix(in srgb, var(--accent-2) 14%, var(--surface)));
    border: 1px solid var(--line);
}
.contact-card h2 { font-size: clamp(2.2rem, 5.5vw, 3.6rem); margin-bottom: .8rem; }
.contact-card .lead { margin: 0 auto 2rem; }
.social-links { display: flex; justify-content: center; gap: .8rem; margin-top: 2rem; }
.social-links a {
    width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center;
    background: var(--surface); border: 1px solid var(--line); font-size: 1.1rem;
    transition: transform .25s, background .25s, color .25s, border-color .25s;
}
.social-links a:hover { transform: translateY(-4px); background: var(--accent); border-color: var(--accent); color: #fff; }

/* ============ FOOTER ============ */
.footer { border-top: 1px solid var(--line); padding: 1.6rem 0; font-size: .88rem; color: var(--muted); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
.footer a:hover { color: var(--accent); }

/* ============ SCROLL REVEAL ============ */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease var(--d, 0s), transform .7s cubic-bezier(.16, 1, .3, 1) var(--d, 0s); }
.reveal.in { opacity: 1; transform: none; }
/* if JS is unavailable, keep everything visible */
.no-js .reveal { opacity: 1; transform: none; }

/* ============ RESPONSIVE ============ */
@media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
    .hero-visual { max-width: 340px; }
    .chart-card { left: -12px; } .sql-card { right: -8px; }
    .skills { grid-template-columns: repeat(3, 1fr); }
    .projects { grid-template-columns: 1fr; }
    .bento { grid-template-columns: 1fr 1fr; }
    .box-about { grid-column: 1 / -1; }
}
@media (max-width: 640px) {
    .nav-links { display: none; }
    .section { padding: 4rem 0; }
    .skills { grid-template-columns: repeat(2, 1fr); }
    .bento { grid-template-columns: 1fr; }
    .btn-lg { font-size: .88rem; padding: .9rem 1.2rem; }
}

/* ============ REDUCED MOTION ============ */
@media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation: none !important; transition: none !important; }
    .reveal { opacity: 1; transform: none; }
}
