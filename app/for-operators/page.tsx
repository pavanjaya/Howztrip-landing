import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Howztrip for Operators — Give Your Travellers Calm, Not Chaos",
  description: "Your travellers are anxious — not because of your planning, but because they can't see it. Howztrip gives them a branded app with everything they need, before they have to ask.",
};

export default function OperatorsPage() {
  return (
    <>
      <style>{styles}</style>

      {/* Google Fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Fraunces:ital,wght@0,300;1,300;1,400&display=swap" />

      <nav className="nav">
        <div className="wrap nav-inner">
          <Link href="/"><Logo /></Link>
          <div className="nav-links">
            <a href="#problem">The problem</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <Link href="/" className="nav-traveller">For Travellers ↗</Link>
          </div>
          <a href="#pricing" className="btn-primary">Start free →</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <span className="tag">For Travel Operators</span>
            <h1>Your travellers are anxious.<br/><em>Not because of your planning.</em></h1>
            <p className="hero-sub">Because they can't see it. The itinerary is in a PDF. The hotel is buried in a WhatsApp thread. The next activity is a phone call away. Howztrip puts everything where it should be — in their pocket, branded to you, before they have to ask.</p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">Create your first trip free</a>
              <a href="#how-it-works" className="btn-ghost">See how it works</a>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <span className="av" style={{background:"#7c3aed"}}>AR</span>
                <span className="av" style={{background:"#0369a1"}}>PM</span>
                <span className="av" style={{background:"#c2410c"}}>SK</span>
                <span className="av" style={{background:"#0f766e"}}>NR</span>
              </div>
              <p className="trust-text"><strong>40+ operators</strong> across India already using Howztrip</p>
            </div>
          </div>
          <div className="phone-wrap">
            <div className="phone">
              <div className="phone-notch"/>
              <div className="phone-screen">
                <div className="phone-topbar">
                  <span style={{fontSize:11,color:"rgba(255,255,255,.6)"}}>← All Trips</span>
                  <span className="phone-op">Desert Rose Travels</span>
                  <div className="phone-sos"><div className="phone-sos-dot"/></div>
                </div>
                <div className="phone-band">
                  <div className="phone-trip-tag">Rajasthan Royal Circuit</div>
                  <div className="phone-trip-name">Golden Triangle<br/>& Beyond</div>
                  <div className="phone-trip-meta">
                    <span className="phone-chip">🗓 Oct 15–22</span>
                    <span className="phone-chip">👥 8 travellers</span>
                  </div>
                </div>
                <div className="phone-tabs">
                  <div className="phone-tab active"><span className="phone-tab-icon">⚡</span><span>Now</span><div className="phone-tab-dot"/></div>
                  <div className="phone-tab"><span className="phone-tab-icon">📅</span><span>Plan</span></div>
                  <div className="phone-tab"><span className="phone-tab-icon">🏨</span><span>Stay</span></div>
                  <div className="phone-tab"><span className="phone-tab-icon">💬</span><span>Chat</span></div>
                </div>
                <div className="phone-content">
                  <div className="phone-section-label">Day 2 · Jaipur</div>
                  <div className="phone-weather">
                    <span style={{fontSize:20}}>☀️</span>
                    <div style={{flex:1}}><div className="phone-weather-temp">34°C</div><div className="phone-weather-desc">Clear sky · Wind 12 km/h</div></div>
                    <span className="phone-weather-city">Jaipur</span>
                  </div>
                  <div className="phone-card">
                    <div className="phone-card-icon" style={{background:"#f3eeff"}}>🏰</div>
                    <div style={{flex:1}}><div className="phone-card-title">Amber Fort visit</div><div className="phone-card-sub">09:00 AM · 11 km from hotel</div></div>
                    <span className="phone-card-badge">Today</span>
                  </div>
                  <div className="phone-card">
                    <div className="phone-card-icon" style={{background:"#f0fdf4"}}>🏨</div>
                    <div><div className="phone-card-title">Rambagh Palace</div><div className="phone-card-sub">Check-out tomorrow · 2 nights</div></div>
                  </div>
                  <div className="phone-broadcast">
                    <div className="phone-broadcast-from">Desert Rose Travels</div>
                    <div className="phone-broadcast-text">Bus at 8:45am sharp. Meet at hotel entrance. ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="wrap stats-inner">
          {[
            {num:"40+",label:"Operators onboarded"},
            {num:"1,200+",label:"Trips managed"},
            {num:"8,000+",label:"Travellers served"},
            {num:"4.9★",label:"Operator rating"},
          ].map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="problem" id="problem">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">The problem</span>
            <h2>The trip is beautiful. The experience of being on it isn't.</h2>
            <p>You've planned everything. The destination is ready. But your travellers can't see any of it — until they call you.</p>
          </div>
          <div className="problem-grid">
            <div className="chaos-card">
              <div className="chaos-header">
                <div className="chaos-avatar">🏖</div>
                <div><div className="chaos-name">Rajasthan Group Tour Oct 🐪</div><div className="chaos-status">12 participants</div></div>
              </div>
              <div className="chaos-body">
                <div className="msg msg-them">Hi, what time is the Amber Fort visit tomorrow? I can't find it in the PDF 😅<div className="msg-time">9:14 PM</div></div>
                <div className="msg msg-them">Also which hotel are we at in Jodhpur? My wife is asking<div className="msg-time">9:16 PM</div></div>
                <div className="msg msg-me">Hi! Fort visit is at 9am. Hotel is Ajit Bhawan — I sent the booking PDF last week 🙏<div className="msg-time">9:31 PM</div></div>
                <div className="msg msg-them">Sorry which PDF? I have 6 from you 😂<div className="msg-time">9:33 PM</div></div>
                <div className="msg msg-them">Flight changed to 2pm btw, did everyone see?<div className="msg-time">9:47 PM</div></div>
              </div>
              <div className="chaos-label">⚠️ This is how most trips are managed today</div>
            </div>
            <div className="problems-list">
              {[
                {icon:"😰",title:"Your travellers feel lost — not because you didn't plan",body:"They feel lost because they can't access the plan. The info exists. It's just in a PDF somewhere, or in a message they scrolled past at 11pm."},
                {icon:"📱",title:"You're always on call, for questions you've already answered",body:"Every 'which hotel are we at?' is a question whose answer was in the itinerary. They just couldn't find it. So they called you instead."},
                {icon:"🏷️",title:"Your brand disappears the moment they board the flight",body:"Once they leave, the experience is theirs — but your name isn't on any of it. WhatsApp groups don't build reputation. Your own app does."},
                {icon:"📄",title:"A changed flight means 8 PDFs to 12 people",body:"One update. Multiple versions in the wild. Someone's always reading the old one. This is not a small problem."},
              ].map(p => (
                <div key={p.title} className="problem-item">
                  <div className="problem-icon">{p.icon}</div>
                  <div><h3>{p.title}</h3><p>{p.body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO TRIPS ── */}
      <section className="two-trips-section">
        <div className="wrap">
          <div className="section-header">
            <span className="tag tag-light">The difference</span>
            <h2 style={{color:"#fff"}}>Same trip. Two completely different answers<br/>to <em style={{fontFamily:"'Fraunces', Georgia, serif",fontWeight:300,fontStyle:"italic",color:"#c4b5fd"}}>"Howztrip?"</em></h2>
          </div>
          <div className="two-trips-grid">
            <div className="trip-card trip-bad">
              <div className="trip-card-label">Without Howztrip</div>
              <div className="trip-card-quote">"Don't ask."</div>
              <div className="trip-card-story">
                No one knew which bus to take. The hotel address was somewhere in a thread no one could find. The operator was unreachable at 11pm when check-in failed. By day three, people had stopped asking questions because the answers weren't coming.
                <br/><br/>
                <strong>The destination was beautiful. Nobody remembers it that way.</strong>
              </div>
            </div>
            <div className="trip-card trip-good">
              <div className="trip-card-label">With Howztrip</div>
              <div className="trip-card-quote">"I'll tell you everything."</div>
              <div className="trip-card-story">
                Hotel details arrived before they landed. The day's plan was on their phone every morning. When the bus was delayed, a push notification reached everyone before the panic started. The operator's name was on every screen.
                <br/><br/>
                <strong>The destination was beautiful. They were completely present for it.</strong>
              </div>
            </div>
          </div>
          <div className="two-trips-cta">
            <p className="two-trips-truth">We don't make trips more beautiful. We make travellers present enough to notice they already are.</p>
            <a href="#pricing" className="btn-primary btn-large">Give your travellers this experience →</a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section" id="features">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">What you get</span>
            <h2>Everything your travellers need. Branded to you.</h2>
            <p>One app your clients download. All the information they need, exactly when they need it — with your name on every screen.</p>
          </div>
          <div className="features-grid">
            {[
              {icon:"🗺️",title:"Live itinerary",body:"Day-by-day plan with times, places, and descriptions. Change anything and every traveller sees it instantly. No PDFs. No resending."},
              {icon:"🏨",title:"Hotel details",body:"Check-in times, room types, booking references, amenity icons, and a one-tap map. No more 'which hotel are we at?' at 11pm."},
              {icon:"✈️",title:"Passes & flights",body:"All bookings in one place with boarding pass reminders before departure. Everything that used to live in separate PDFs, together."},
              {icon:"🔔",title:"Push notifications",body:"Send an update to every traveller's phone in one tap. Bus delayed, meeting point changed, dinner confirmed — they know instantly."},
              {icon:"💬",title:"Direct operator chat",body:"Clients message you inside the app. Organised by trip. No more losing important requests in a 300-message group."},
              {icon:"📸",title:"Trip memory recap",body:"A shareable recap card auto-generated from the trip. Your travellers post it. Your name travels with it. Referrals that cost nothing."},
            ].map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="hiw" id="how-it-works">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">How it works</span>
            <h2>Up and running in under 10 minutes</h2>
            <p>No technical setup. No app to build. Just create, share, and let Howztrip handle what you've been handling by hand.</p>
          </div>
          <div className="hiw-steps">
            {[
              {n:"1",title:"Create the trip",body:"Add your itinerary, hotels, flights, and emergency contacts through the operator dashboard. Takes about 5 minutes per trip."},
              {n:"2",title:"Share with your travellers",body:"Send them a trip link — by WhatsApp, email, or SMS. They download the app and the trip loads automatically. Nothing to configure."},
              {n:"3",title:"They're looked after. You're in control.",body:"Push updates, broadcast messages, track who's seen what. Your travellers feel held. You feel free."},
            ].map(s => (
              <div key={s.n} className="hiw-step">
                <div className="hiw-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">Operator stories</span>
            <h2>What operators say</h2>
          </div>
          <div className="testi-grid">
            {[
              {initials:"AR",color:"#7c3aed",name:"Arjun Rathore",company:"Desert Rose Travels, Jaipur",quote:"My clients used to call me 10 times a day during trips. Now they call maybe once or twice. The app answers everything they need — and they feel like I'm always present, even when I'm not."},
              {initials:"PM",color:"#0369a1",name:"Priya Menon",company:"Kerala Backwater Tours, Kochi",quote:"Clients are always impressed. They say it feels like booking with a big company, not a small operator. That credibility was the thing I was missing."},
              {initials:"SK",color:"#c2410c",name:"Suresh Kumar",company:"Himalayan Routes, Manali",quote:"We ran 22 trips this season through Howztrip. The memory recap card alone has gotten us more referrals than anything else we've ever tried. Travellers share it everywhere."},
            ].map(t => (
              <div key={t.initials} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">&quot;{t.quote}&quot;</p>
                <div className="testi-author">
                  <div className="testi-av" style={{background:t.color}}>{t.initials}</div>
                  <div><div className="testi-name">{t.name}</div><div className="testi-company">{t.company}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-header">
            <span className="tag tag-light">Pricing</span>
            <h2 style={{color:"#fff"}}>Simple pricing. No surprises.</h2>
            <p style={{color:"rgba(255,255,255,.55)"}}>Start free. Upgrade when you're ready.</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-plan">Starter</div>
              <div className="pricing-price">Free</div>
              <div className="pricing-period">forever · up to 3 active trips</div>
              <ul className="pricing-features">
                <li>Up to 3 active trips</li>
                <li>Unlimited travellers per trip</li>
                <li>Itinerary, hotels, flights</li>
                <li>Group chat & expenses</li>
                <li>Memory recap cards</li>
              </ul>
              <a href="#" className="pricing-btn">Get started free</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-plan">Pro</div>
              <div className="pricing-price"><sub>₹</sub>999</div>
              <div className="pricing-period">per month · unlimited trips</div>
              <ul className="pricing-features">
                <li>Unlimited active trips</li>
                <li>Custom operator branding</li>
                <li>Push notifications to travellers</li>
                <li>Priority support</li>
                <li>Analytics dashboard</li>
              </ul>
              <a href="#" className="pricing-btn">Start 14-day free trial</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="wrap" style={{textAlign:"center"}}>
          <p className="cta-question">"Howztrip?"</p>
          <h2>Make sure the answer is always a great one.</h2>
          <p style={{fontSize:17,color:"rgba(255,255,255,.55)",marginBottom:36,maxWidth:480,marginInline:"auto"}}>Join 40+ operators who've already given their travellers calm instead of chaos. Free to start.</p>
          <a href="#pricing" className="btn-primary btn-large">Create your first trip free →</a>
          <p style={{fontSize:13,color:"rgba(255,255,255,.35)",marginTop:16}}>Takes 5 minutes · No technical setup · No credit card needed</p>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-logo"><img src="/logo.svg" alt="Howztrip" height="22" style={{filter:"brightness(0) invert(1)",opacity:.85}} /></div>
          <div className="footer-links">
            <Link href="/">For Travellers</Link>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-copy">© 2026 Howztrip · HueLabs</div>
        </div>
      </footer>
    </>
  );
}

const styles = `
  :root {
    --brand:#8A43FD; --brand-mid:#6d28d9; --brand-light:#f3eeff; --brand-border:#d8b4fe;
    --navy:#0f1729; --navy-mid:#1a2744;
    --bg:#fafaf9; --surface:#ffffff; --border:#e9e8f0;
    --text:#111827; --muted:#6b7280; --navy-muted:rgba(255,255,255,0.55);
    --green:#16a34a; --red:#dc2626;
  }
  body { background:var(--bg); color:var(--text); }
  a { text-decoration:none; }

  /* NAV */
  .nav { position:sticky; top:0; z-index:100; background:rgba(15,23,41,.96); backdrop-filter:blur(12px); border-bottom:1px solid rgba(255,255,255,.07); }
  .wrap { max-width:1080px; margin-inline:auto; padding-inline:24px; }
  .nav-inner { display:flex; align-items:center; justify-content:space-between; padding-block:16px; gap:16px; }
  .nav-links { display:flex; align-items:center; gap:28px; }
  .nav-links a { font-size:14px; font-weight:500; color:rgba(255,255,255,.6); transition:color .15s; }
  .nav-links a:hover { color:#fff; }
  .nav-traveller { color:rgba(138,67,253,.9)!important; font-weight:700!important; }

  /* BUTTONS */
  .btn-primary { display:inline-flex; align-items:center; gap:8px; background:var(--brand); color:#fff; font-weight:700; font-size:15px; padding:13px 26px; border-radius:14px; transition:background .15s,transform .1s; }
  .btn-primary:hover { background:var(--brand-mid); transform:translateY(-1px); }
  .btn-ghost { display:inline-flex; align-items:center; gap:8px; color:#fff; font-weight:500; font-size:15px; padding:12px 22px; border-radius:14px; border:1.5px solid rgba(255,255,255,.2); transition:border-color .15s; }
  .btn-ghost:hover { border-color:rgba(255,255,255,.5); }
  .btn-large { font-size:16px; padding:16px 32px; border-radius:16px; }

  /* TAG */
  .tag { display:inline-flex; align-items:center; font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--brand); background:rgba(138,67,253,.1); border-radius:100px; padding:5px 12px; margin-bottom:16px; }
  .tag-light { color:rgba(196,181,253,.9); background:rgba(138,67,253,.2); }

  /* HERO */
  .hero { background:var(--navy); padding:80px 0 0; overflow:hidden; }
  .hero-inner { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; position:relative; z-index:1; }
  .hero h1 { font-family:'Plus Jakarta Sans', sans-serif; font-weight:800; font-size:clamp(30px,4.2vw,50px); line-height:1.1; color:#fff; margin:0 0 20px; letter-spacing:-.02em; text-wrap:balance; }
  .hero h1 em { font-family:'Fraunces', Georgia, serif; font-style:italic; font-weight:300; color:#c4b5fd; }
  .hero-sub { font-size:17px; line-height:1.75; color:var(--navy-muted); margin:0 0 36px; max-width:500px; }
  .hero-actions { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }
  .hero-trust { display:flex; align-items:center; gap:10px; margin-top:28px; }
  .trust-avatars { display:flex; }
  .av { width:32px; height:32px; border-radius:50%; border:2px solid var(--navy); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff; margin-left:-8px; }
  .av:first-child { margin-left:0; }
  .trust-text { font-size:13px; color:var(--navy-muted); }
  .trust-text strong { color:#fff; }

  /* PHONE */
  .phone-wrap { display:flex; justify-content:center; align-items:flex-end; padding-top:20px; }
  .phone { width:240px; background:#0a0a0a; border-radius:40px 40px 0 0; border:8px solid #1a1a1a; border-bottom:none; box-shadow:0 -20px 80px rgba(138,67,253,.2),0 0 0 1px rgba(255,255,255,.07); overflow:hidden; }
  .phone-notch { width:80px; height:20px; background:#0a0a0a; border-radius:0 0 14px 14px; margin:0 auto; position:relative; z-index:2; }
  .phone-screen { background:#f9fafb; min-height:430px; display:flex; flex-direction:column; }
  .phone-topbar { background:var(--navy); padding:10px 14px; display:flex; align-items:center; justify-content:space-between; }
  .phone-op { font-size:12px; font-weight:700; color:#fff; }
  .phone-sos { width:26px; height:26px; border-radius:50%; background:rgba(220,38,38,.2); display:flex; align-items:center; justify-content:center; }
  .phone-sos-dot { width:8px; height:8px; border-radius:50%; background:#ef4444; }
  .phone-band { background:linear-gradient(135deg,#6d28d9 0%,#8A43FD 100%); padding:14px 14px 12px; }
  .phone-trip-tag { font-size:8px; font-weight:700; color:rgba(255,255,255,.6); letter-spacing:.1em; text-transform:uppercase; }
  .phone-trip-name { font-size:15px; font-weight:800; color:#fff; line-height:1.2; margin:2px 0 6px; }
  .phone-trip-meta { display:flex; gap:8px; }
  .phone-chip { background:rgba(0,0,0,.2); border-radius:100px; padding:2px 8px; font-size:8px; color:rgba(255,255,255,.8); font-weight:600; }
  .phone-tabs { display:flex; background:#fff; border-bottom:1px solid #f0f0f0; }
  .phone-tab { flex:1; padding:7px 0 5px; text-align:center; font-size:7px; font-weight:600; color:#9ca3af; display:flex; flex-direction:column; align-items:center; gap:2px; }
  .phone-tab.active { color:var(--brand); }
  .phone-tab-dot { width:4px; height:4px; border-radius:50%; background:var(--brand); display:none; }
  .phone-tab.active .phone-tab-dot { display:block; }
  .phone-tab-icon { font-size:12px; line-height:1; }
  .phone-content { padding:12px 14px; flex:1; display:flex; flex-direction:column; gap:8px; }
  .phone-section-label { font-size:7px; font-weight:700; color:#9ca3af; letter-spacing:.12em; text-transform:uppercase; }
  .phone-weather { background:linear-gradient(135deg,#0369a1,#0c4a6e); border-radius:10px; padding:10px 12px; display:flex; align-items:center; gap:8px; }
  .phone-weather-temp { font-size:16px; font-weight:800; color:#fff; line-height:1; }
  .phone-weather-desc { font-size:8px; color:rgba(255,255,255,.6); margin-top:2px; }
  .phone-weather-city { font-size:8px; font-weight:600; color:rgba(255,255,255,.5); }
  .phone-card { background:#fff; border-radius:10px; border:1px solid #f0f0ef; padding:10px 12px; display:flex; align-items:center; gap:10px; }
  .phone-card-icon { width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:13px; flex-shrink:0; }
  .phone-card-title { font-size:9px; font-weight:700; color:#111827; }
  .phone-card-sub { font-size:8px; color:#9ca3af; margin-top:1px; }
  .phone-card-badge { font-size:7px; font-weight:700; background:#f0fdf4; color:#16a34a; border-radius:100px; padding:2px 6px; margin-left:auto; }
  .phone-broadcast { background:var(--navy); border-radius:10px; padding:9px 12px; }
  .phone-broadcast-from { font-size:7px; font-weight:700; color:var(--brand); letter-spacing:.5px; text-transform:uppercase; margin-bottom:3px; }
  .phone-broadcast-text { font-size:9px; color:#fff; line-height:1.4; }

  /* STATS */
  .stats-bar { background:var(--brand); padding-block:20px; }
  .stats-inner { display:grid; grid-template-columns:repeat(4,1fr); }
  .stat-item { text-align:center; padding:8px 16px; border-right:1px solid rgba(255,255,255,.2); }
  .stat-item:last-child { border-right:none; }
  .stat-num { font-family:'Plus Jakarta Sans', sans-serif; font-size:28px; font-weight:800; color:#fff; line-height:1; }
  .stat-label { font-size:12px; color:rgba(255,255,255,.75); margin-top:4px; }

  /* PROBLEM */
  .problem { background:var(--bg); padding-block:96px; }
  .section-header { text-align:center; margin-bottom:56px; }
  .section-header h2 { font-family:'Plus Jakarta Sans', sans-serif; font-size:clamp(28px,3.5vw,42px); font-weight:800; letter-spacing:-.02em; color:var(--text); margin:12px 0 16px; line-height:1.15; text-wrap:balance; }
  .section-header p { font-size:17px; color:var(--muted); line-height:1.7; max-width:520px; margin-inline:auto; }
  .problem-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:start; }
  .chaos-card { background:var(--surface); border-radius:20px; overflow:hidden; border:1px solid var(--border); box-shadow:0 4px 20px rgba(0,0,0,.05); }
  .chaos-header { background:#075e54; padding:14px 16px; display:flex; align-items:center; gap:10px; }
  .chaos-avatar { width:36px; height:36px; border-radius:50%; background:#25d366; display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0; }
  .chaos-name { font-size:14px; font-weight:700; color:#fff; }
  .chaos-status { font-size:11px; color:rgba(255,255,255,.6); }
  .chaos-body { padding:14px; display:flex; flex-direction:column; gap:8px; background:#e5ddd5; }
  .msg { max-width:80%; padding:8px 10px; border-radius:10px; font-size:12px; line-height:1.5; }
  .msg-them { background:#fff; color:#111; border-bottom-left-radius:2px; align-self:flex-start; }
  .msg-me { background:#dcf8c6; color:#111; border-bottom-right-radius:2px; align-self:flex-end; }
  .msg-time { font-size:9px; color:rgba(0,0,0,.35); margin-top:3px; text-align:right; }
  .chaos-label { background:#fee2e2; padding:10px 14px; font-size:12px; font-weight:600; color:#dc2626; }
  .problems-list { display:flex; flex-direction:column; gap:14px; }
  .problem-item { background:var(--surface); border-radius:16px; padding:20px; display:flex; align-items:flex-start; gap:14px; border:1px solid var(--border); }
  .problem-icon { font-size:24px; flex-shrink:0; margin-top:2px; }
  .problem-item h3 { font-size:15px; font-weight:700; color:var(--text); margin:0 0 5px; }
  .problem-item p { font-size:13px; color:var(--muted); margin:0; line-height:1.65; }

  /* TWO TRIPS */
  .two-trips-section { background:var(--navy); padding-block:96px; }
  .two-trips-section .section-header h2 { color:#fff; }
  .two-trips-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:48px; }
  .trip-card { border-radius:20px; padding:36px 32px; }
  .trip-bad { background:#1a0a0a; border:1.5px solid rgba(220,38,38,.3); }
  .trip-good { background:#0a1f0a; border:1.5px solid rgba(22,163,74,.3); }
  .trip-card-label { font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; margin-bottom:12px; }
  .trip-bad .trip-card-label { color:#f87171; }
  .trip-good .trip-card-label { color:#4ade80; }
  .trip-card-quote { font-family:'Fraunces', Georgia, serif; font-size:28px; font-weight:300; font-style:italic; margin-bottom:20px; line-height:1.3; }
  .trip-bad .trip-card-quote { color:#fca5a5; }
  .trip-good .trip-card-quote { color:#86efac; }
  .trip-card-story { font-size:15px; color:rgba(255,255,255,.55); line-height:1.75; }
  .trip-card-story strong { color:rgba(255,255,255,.8); font-weight:600; }
  .two-trips-cta { text-align:center; }
  .two-trips-truth { font-family:'Fraunces', Georgia, serif; font-size:clamp(18px,2.5vw,24px); font-weight:300; font-style:italic; color:rgba(255,255,255,.7); margin-bottom:28px; line-height:1.5; }

  /* FEATURES */
  .features-section { background:var(--bg); padding-block:96px; }
  .features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .feature-card { background:var(--surface); border:1.5px solid var(--border); border-radius:20px; padding:28px 24px; transition:border-color .2s; }
  .feature-card:hover { border-color:var(--brand-border); }
  .feature-icon { width:52px; height:52px; border-radius:16px; background:var(--brand-light); display:flex; align-items:center; justify-content:center; font-size:24px; margin-bottom:18px; }
  .feature-card h3 { font-family:'Plus Jakarta Sans', sans-serif; font-size:17px; font-weight:700; color:var(--text); margin:0 0 8px; }
  .feature-card p { font-size:14px; color:var(--muted); line-height:1.65; margin:0; }

  /* HOW IT WORKS */
  .hiw { background:var(--navy); padding-block:96px; }
  .hiw .section-header h2 { color:#fff; }
  .hiw .section-header p { color:var(--navy-muted); }
  .hiw-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:40px; position:relative; }
  .hiw-steps::before { content:''; position:absolute; top:36px; left:calc(16.66% + 20px); right:calc(16.66% + 20px); height:1.5px; background:linear-gradient(90deg,var(--brand) 0%,rgba(138,67,253,.2) 100%); }
  .hiw-step { text-align:center; }
  .hiw-num { width:72px; height:72px; border-radius:50%; background:rgba(138,67,253,.15); display:flex; align-items:center; justify-content:center; font-family:'Plus Jakarta Sans', sans-serif; font-size:24px; font-weight:800; color:var(--brand); margin:0 auto 20px; border:3px solid var(--brand); }
  .hiw-step h3 { font-family:'Plus Jakarta Sans', sans-serif; font-size:18px; font-weight:700; color:#fff; margin:0 0 8px; }
  .hiw-step p { font-size:14px; color:var(--navy-muted); line-height:1.7; margin:0; }

  /* TESTIMONIALS */
  .testimonials { background:#f5f3ff; padding-block:96px; }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .testi-card { background:var(--surface); border-radius:20px; padding:28px 24px; border:1px solid var(--brand-border); display:flex; flex-direction:column; gap:16px; }
  .testi-stars { color:var(--brand); font-size:14px; }
  .testi-quote { font-size:15px; color:var(--text); line-height:1.75; flex:1; font-style:italic; }
  .testi-author { display:flex; align-items:center; gap:12px; }
  .testi-av { width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:15px; color:#fff; flex-shrink:0; }
  .testi-name { font-size:14px; font-weight:700; color:var(--text); }
  .testi-company { font-size:12px; color:var(--muted); }

  /* PRICING */
  .pricing { background:var(--navy); padding-block:96px; }
  .pricing-cards { display:grid; grid-template-columns:1fr 1fr; gap:20px; max-width:740px; margin-inline:auto; }
  .pricing-card { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:24px; padding:36px 32px; }
  .pricing-card.featured { background:var(--brand); border-color:transparent; }
  .pricing-plan { font-size:12px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--navy-muted); margin-bottom:12px; }
  .pricing-card.featured .pricing-plan { color:rgba(255,255,255,.7); }
  .pricing-price { font-family:'Plus Jakarta Sans', sans-serif; font-size:42px; font-weight:800; color:#fff; line-height:1; }
  .pricing-price sub { font-size:16px; font-weight:500; vertical-align:baseline; }
  .pricing-period { font-size:13px; color:var(--navy-muted); margin:4px 0 24px; }
  .pricing-card.featured .pricing-period { color:rgba(255,255,255,.7); }
  .pricing-features { list-style:none; padding:0; margin:0 0 28px; display:flex; flex-direction:column; gap:10px; }
  .pricing-features li { font-size:14px; color:var(--navy-muted); display:flex; gap:10px; align-items:flex-start; }
  .pricing-features li::before { content:"✓"; color:var(--brand); font-weight:700; flex-shrink:0; }
  .pricing-card.featured .pricing-features li { color:rgba(255,255,255,.85); }
  .pricing-card.featured .pricing-features li::before { color:#fff; }
  .pricing-btn { display:block; width:100%; padding:14px; border-radius:12px; font-family:'Plus Jakarta Sans', sans-serif; font-weight:700; font-size:15px; text-align:center; background:rgba(255,255,255,.12); color:#fff; transition:background .15s; }
  .pricing-btn:hover { background:rgba(255,255,255,.2); }
  .pricing-card.featured .pricing-btn { background:#fff; color:var(--brand-mid); }

  /* CTA */
  .cta-section { background:linear-gradient(135deg,var(--navy) 0%,#1a0a2e 100%); padding-block:96px; position:relative; overflow:hidden; }
  .cta-section::before { content:''; position:absolute; width:600px; height:600px; border-radius:50%; background:radial-gradient(circle,rgba(138,67,253,.2) 0%,transparent 70%); top:50%; left:50%; transform:translate(-50%,-50%); pointer-events:none; }
  .cta-question { font-family:'Fraunces', Georgia, serif; font-size:clamp(40px,6vw,72px); font-weight:300; font-style:italic; color:var(--brand); margin-bottom:12px; position:relative; }
  .cta-section h2 { font-family:'Plus Jakarta Sans', sans-serif; font-size:clamp(26px,3.5vw,40px); font-weight:800; color:#fff; margin:0 0 16px; letter-spacing:-.02em; position:relative; text-wrap:balance; }

  /* FOOTER */
  footer { background:#060d1a; padding-block:48px; border-top:1px solid rgba(255,255,255,.06); }
  .footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
  .footer-logo { font-family:'Plus Jakarta Sans', sans-serif; font-weight:800; font-size:18px; color:#fff; letter-spacing:-.5px; }
  .footer-logo span { color:var(--brand); }
  .footer-links { display:flex; gap:24px; }
  .footer-links a { font-size:13px; color:rgba(255,255,255,.4); transition:color .15s; }
  .footer-links a:hover { color:rgba(255,255,255,.7); }
  .footer-copy { font-size:12px; color:rgba(255,255,255,.25); }

  /* RESPONSIVE */
  @media (max-width:768px) {
    .hero-inner,.problem-grid,.two-trips-grid,.features-grid,.testi-grid,.hiw-steps,.pricing-cards { grid-template-columns:1fr; direction:ltr; }
    .phone-wrap,.nav-links { display:none; }
    .hiw-steps::before { display:none; }
    .stats-inner { grid-template-columns:1fr 1fr; }
  }
`;
