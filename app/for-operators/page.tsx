import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Howztrip for Operators — Give Your Clients a Premium Trip Experience",
  description: "Stop managing trips over WhatsApp. Give your clients a beautiful app — itinerary, hotels, flights, group chat, live updates — all branded to you.",
};

export default function OperatorsPage() {
  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <div className="wrap nav-inner">
          <Link href="/"><Logo /></Link>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <Link href="/" className="nav-traveller">For Travellers ↗</Link>
          </div>
          <a href="#pricing" className="btn-primary">Get started free →</a>
        </div>
      </nav>

      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <span className="tag">For Travel Operators</span>
            <h1>Stop managing trips over <em>WhatsApp.</em> Give clients a real experience.</h1>
            <p className="hero-sub">Howztrip gives your clients a beautiful app — itinerary, hotels, flights, group chat, live updates — all branded to you. You look premium. They feel taken care of.</p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">Start free — no card needed</a>
              <a href="#how-it-works" className="btn-ghost">See how it works</a>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars"><span className="av">RS</span><span className="av">PK</span><span className="av">AJ</span><span className="av">MM</span></div>
              <p className="trust-text"><strong>40+ operators</strong> already onboarded across India</p>
            </div>
          </div>
          <div className="phone-wrap">
            <div className="phone">
              <div className="phone-notch"/>
              <div className="phone-screen">
                <div className="phone-topbar"><span style={{fontSize:11,color:"rgba(255,255,255,.6)"}}>← All Trips</span><span className="phone-op">Desert Rose Travels</span><div className="phone-sos"><div className="phone-sos-dot"/></div></div>
                <div className="phone-band"><div className="phone-trip-tag">Rajasthan Royal Circuit</div><div className="phone-trip-name">Golden Triangle<br/>& Beyond</div><div className="phone-trip-meta"><span className="phone-chip">🗓 Oct 15–22</span><span className="phone-chip">👥 8 travellers</span></div></div>
                <div className="phone-tabs">
                  <div className="phone-tab active"><span className="phone-tab-icon">⚡</span><span>Now</span><div className="phone-tab-dot"/></div>
                  <div className="phone-tab"><span className="phone-tab-icon">📅</span><span>Plan</span></div>
                  <div className="phone-tab"><span className="phone-tab-icon">💬</span><span>Chat</span></div>
                  <div className="phone-tab"><span className="phone-tab-icon">⋯</span><span>More</span></div>
                </div>
                <div className="phone-content">
                  <div className="phone-section-label">Day 2 · Jaipur</div>
                  <div className="phone-weather"><span style={{fontSize:20}}>☀️</span><div style={{flex:1}}><div className="phone-weather-temp">34°C</div><div className="phone-weather-desc">Clear sky · Wind 12 km/h</div></div><span className="phone-weather-city">Jaipur</span></div>
                  <div className="phone-card"><div className="phone-card-icon" style={{background:"#fff7ed"}}>🏰</div><div style={{flex:1}}><div className="phone-card-title">Amber Fort visit</div><div className="phone-card-sub">09:00 AM · 11 km from hotel</div></div><span className="phone-card-badge">Today</span></div>
                  <div className="phone-card"><div className="phone-card-icon" style={{background:"#f0fdf4"}}>🏨</div><div><div className="phone-card-title">Rambagh Palace</div><div className="phone-card-sub">Check-out tomorrow · 2 nights</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="wrap stats-inner">
          {[{num:"40+",label:"Operators onboarded"},{num:"1,200+",label:"Trips managed"},{num:"8,000+",label:"Happy travellers"},{num:"4.9★",label:"Operator rating"}].map(s=>(
            <div key={s.label} className="stat-item"><div className="stat-num">{s.num}</div><div className="stat-label">{s.label}</div></div>
          ))}
        </div>
      </div>

      <section className="problem">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">The problem</span>
            <h2>Your clients deserve better than a PDF and a group chat</h2>
            <p>Managing trips over WhatsApp works — until it doesn&apos;t. Missed messages, outdated PDFs, frantic calls at midnight.</p>
          </div>
          <div className="problem-grid">
            <div className="chaos-card">
              <div className="chaos-header"><div className="chaos-avatar">🏖</div><div><div className="chaos-name">Rajasthan Group Tour Oct 🐪</div><div className="chaos-status">12 participants</div></div></div>
              <div className="chaos-body">
                <div className="msg msg-them">Hi, what time is the Amber Fort visit tomorrow? I can&apos;t find it in the PDF 😅<div className="msg-time">9:14 PM</div></div>
                <div className="msg msg-them">Also which hotel are we at in Jodhpur? My wife is asking<div className="msg-time">9:16 PM</div></div>
                <div className="msg msg-me">Hi! Fort visit is at 9am. Hotel is Ajit Bhawan — I sent the booking PDF last week 🙏<div className="msg-time">9:31 PM</div></div>
                <div className="msg msg-them">Sorry which PDF? I have 6 from you 😂<div className="msg-time">9:33 PM</div></div>
                <div className="msg msg-them">Flight changed to 2pm btw, did everyone see?<div className="msg-time">9:47 PM</div></div>
              </div>
              <div className="chaos-label">⚠️ This is how most trips are managed today</div>
            </div>
            <div className="problems-list">
              {[{icon:"📄",title:"PDF itineraries get outdated instantly",body:"A flight change means resending 8 PDFs to 12 people. Half of them are reading the old version."},{icon:"💬",title:"WhatsApp is not a trip management tool",body:"Important info drowns in chatter. You spend your evenings answering the same questions."},{icon:"😰",title:"You're always on call",body:"Clients don't know where their hotel is, what time checkout is, or what's next — so they call you."},{icon:"🏷️",title:"No brand presence during the trip",body:"Once the client boards the flight, they forget who organised it."}].map(p=>(
                <div key={p.title} className="problem-item"><div className="problem-icon">{p.icon}</div><div><h3>{p.title}</h3><p>{p.body}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="wrap">
          <div className="section-header">
            <span className="tag" style={{background:"rgba(249,115,22,.15)"}}>What you get</span>
            <h2 style={{color:"#fff"}}>Everything your clients need, branded to you</h2>
            <p style={{color:"rgba(255,255,255,.55)"}}>One app your clients download. All the information they need, exactly when they need it.</p>
          </div>
          <div className="features-grid">
            {[{icon:"🗺️",title:"Live itinerary",body:"Day-by-day plan with times, places, and descriptions. Update anything and every client sees it instantly."},{icon:"🏨",title:"Hotel cards with photos",body:"Check-in/out times, room types, booking refs, amenity icons, and a one-tap map or call button."},{icon:"✈️",title:"Flight passes",body:"All flights in one place with a boarding pass reminder 24 hours before departure."},{icon:"☀️",title:"Live weather & city guide",body:"Real-time weather at the current city, 3-day forecast, and a curated guide to what to see."},{icon:"💬",title:"Direct operator chat",body:"Clients message you inside the app. Conversations are per-trip, searchable, and organised."},{icon:"👥",title:"Group & expense tracking",body:"Members list, shared expense log with per-person splits, and a native share button."}].map(f=>(
              <div key={f.title} className="feature-card"><div className="feature-icon">{f.icon}</div><h3>{f.title}</h3><p>{f.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="hiw" id="how-it-works">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">How it works</span>
            <h2>Up and running in under 10 minutes</h2>
            <p>No technical setup. No app to build. Just create, share, and let Howztrip do the rest.</p>
          </div>
          <div className="hiw-steps">
            {[{n:"1",title:"Create the trip",body:"Add your itinerary, hotels, flights, and emergency contacts through the operator dashboard. Takes about 5 minutes per trip."},{n:"2",title:"Add your clients",body:"Enter their email addresses or share a trip code. They get an invitation and download the Howztrip app."},{n:"3",title:"They're set for the trip",body:"Everything they need lives in the app. You push updates once — every client sees them instantly."}].map(s=>(
              <div key={s.n} className="hiw-step"><div className="hiw-num">{s.n}</div><h3>{s.title}</h3><p>{s.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="wrap">
          <div className="section-header"><span className="tag">Operator stories</span><h2>What operators say</h2></div>
          <div className="testi-grid">
            {[{initials:"AR",color:"#c2410c",name:"Arjun Rathore",company:"Desert Rose Travels, Jaipur",quote:"My clients used to call me 10 times a day during trips. Now they call maybe once or twice. The app answers everything they need."},{initials:"PM",color:"#0369a1",name:"Priya Menon",company:"Kerala Backwater Tours, Kochi",quote:"Clients are always impressed. They say it feels like booking with a big company, not a small operator. That's exactly what we wanted."},{initials:"SK",color:"#7c3aed",name:"Suresh Kumar",company:"Himalayan Routes, Manali",quote:"We ran 22 trips this season through Howztrip. The memory recap feature alone has gotten us more referrals than anything else we've tried."}].map(t=>(
              <div key={t.initials} className="testi-card"><div className="testi-stars">★★★★★</div><p className="testi-quote">&quot;{t.quote}&quot;</p><div className="testi-author"><div className="testi-av" style={{background:t.color}}>{t.initials}</div><div><div className="testi-name">{t.name}</div><div className="testi-company">{t.company}</div></div></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-header">
            <span className="tag" style={{background:"rgba(249,115,22,.15)"}}>Pricing</span>
            <h2 style={{color:"#fff"}}>Simple pricing, no surprises</h2>
            <p style={{color:"rgba(255,255,255,.55)"}}>Start free. Upgrade when you&apos;re ready.</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-plan">Starter</div>
              <div className="pricing-price">Free</div>
              <div className="pricing-period">forever, up to 3 active trips</div>
              <ul className="pricing-features"><li>Up to 3 active trips</li><li>Unlimited travellers per trip</li><li>Itinerary, hotels, flights</li><li>Group chat & expenses</li><li>Memory recap cards</li></ul>
              <a href="#" className="pricing-btn">Get started free</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-plan">Pro</div>
              <div className="pricing-price"><sub>₹</sub>999</div>
              <div className="pricing-period">per month · unlimited trips</div>
              <ul className="pricing-features"><li>Unlimited active trips</li><li>Custom operator branding</li><li>Push notifications to clients</li><li>Priority support</li><li>Analytics dashboard</li></ul>
              <a href="#" className="pricing-btn">Start 14-day free trial</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap" style={{textAlign:"center"}}>
          <span className="tag">Get started today</span>
          <h2>Your next trip could be the one clients talk about for years</h2>
          <p style={{fontSize:17,color:"rgba(255,255,255,.55)",marginBottom:36}}>Join 40+ operators who&apos;ve already made the switch. Free to start, no credit card needed.</p>
          <a href="#pricing" className="btn-primary" style={{fontSize:16,padding:"16px 32px",borderRadius:16}}>Create your first trip free →</a>
          <p style={{fontSize:13,color:"rgba(255,255,255,.4)",marginTop:16}}>Takes 5 minutes · No technical setup · Cancel anytime</p>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-logo">howz<span>trip</span></div>
          <div className="footer-links"><Link href="/">For Travellers</Link><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></div>
          <div className="footer-copy">© 2026 Howztrip. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}

const styles = `
  :root{--navy:#0d1f3c;--navy-mid:#1a3460;--orange:#f97316;--orange-dim:#ea6000;--warm-bg:#fafaf8;--surface:#ffffff;--mid-bg:#f0ede8;--text:#111827;--muted:#6b7280;--border:#e5e7eb;--navy-muted:rgba(255,255,255,0.55);}
  body{background:var(--warm-bg);color:var(--text);}
  .nav{position:sticky;top:0;z-index:100;background:rgba(13,31,60,.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.07);}
  .wrap{max-width:1080px;margin-inline:auto;padding-inline:24px;}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;padding-block:16px;}
  .nav-links{display:flex;align-items:center;gap:32px;}
  .nav-links a{font-size:14px;font-weight:500;color:rgba(255,255,255,.65);transition:color .15s;}
  .nav-links a:hover{color:#fff;}
  .nav-traveller{color:rgba(249,115,22,.9)!important;font-weight:700!important;}
  .btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:#fff;font-family:var(--font-sora),sans-serif;font-weight:700;font-size:15px;padding:14px 28px;border-radius:14px;transition:background .15s,transform .1s;}
  .btn-primary:hover{background:var(--orange-dim);transform:translateY(-1px);}
  .btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;font-weight:500;font-size:15px;padding:13px 24px;border-radius:14px;border:1.5px solid rgba(255,255,255,.2);transition:border-color .15s;}
  .btn-ghost:hover{border-color:rgba(255,255,255,.5);}
  .tag{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);background:rgba(249,115,22,.1);border-radius:100px;padding:5px 12px;margin-bottom:16px;}
  .hero{background:var(--navy);padding:80px 0 0;overflow:hidden;}
  .hero-inner{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
  .hero h1{font-family:var(--font-sora),sans-serif;font-weight:800;font-size:clamp(32px,4.5vw,52px);line-height:1.1;color:#fff;margin:0 0 20px;letter-spacing:-.03em;}
  .hero h1 em{font-style:normal;color:var(--orange);}
  .hero-sub{font-size:17px;line-height:1.7;color:var(--navy-muted);margin:0 0 36px;max-width:480px;}
  .hero-actions{display:flex;gap:14px;flex-wrap:wrap;align-items:center;}
  .hero-trust{display:flex;align-items:center;gap:10px;margin-top:28px;}
  .trust-avatars{display:flex;}
  .av{width:32px;height:32px;border-radius:50%;background:var(--navy-mid);border:2px solid var(--navy);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;margin-left:-8px;}
  .av:first-child{margin-left:0;}
  .trust-text{font-size:13px;color:var(--navy-muted);}
  .trust-text strong{color:#fff;}
  .phone-wrap{display:flex;justify-content:center;align-items:flex-end;padding-top:20px;}
  .phone{width:240px;background:#0a0a0a;border-radius:40px 40px 0 0;border:8px solid #1a1a1a;border-bottom:none;box-shadow:0 -20px 80px rgba(249,115,22,.15),0 0 0 1px rgba(255,255,255,.08);overflow:hidden;}
  .phone-notch{width:80px;height:20px;background:#0a0a0a;border-radius:0 0 14px 14px;margin:0 auto;position:relative;z-index:2;}
  .phone-screen{background:#fff;min-height:420px;display:flex;flex-direction:column;}
  .phone-topbar{background:var(--navy);padding:10px 14px;display:flex;align-items:center;justify-content:space-between;}
  .phone-op{font-size:12px;font-weight:700;color:#fff;}
  .phone-sos{width:26px;height:26px;border-radius:50%;background:rgba(220,38,38,.2);display:flex;align-items:center;justify-content:center;}
  .phone-sos-dot{width:8px;height:8px;border-radius:50%;background:#ef4444;}
  .phone-band{background:linear-gradient(135deg,#c2410c 0%,#f97316 100%);padding:14px 14px 12px;}
  .phone-trip-tag{font-size:8px;font-weight:700;color:rgba(255,255,255,.6);letter-spacing:.1em;text-transform:uppercase;}
  .phone-trip-name{font-size:15px;font-weight:800;color:#fff;line-height:1.2;margin:2px 0 6px;}
  .phone-trip-meta{display:flex;gap:8px;}
  .phone-chip{background:rgba(0,0,0,.2);border-radius:100px;padding:2px 8px;font-size:8px;color:rgba(255,255,255,.8);font-weight:600;}
  .phone-tabs{display:flex;background:#fff;border-bottom:1px solid #f0f0f0;}
  .phone-tab{flex:1;padding:7px 0 5px;text-align:center;font-size:7px;font-weight:600;color:#9ca3af;display:flex;flex-direction:column;align-items:center;gap:2px;}
  .phone-tab.active{color:#f97316;}
  .phone-tab-dot{width:4px;height:4px;border-radius:50%;background:#f97316;display:none;}
  .phone-tab.active .phone-tab-dot{display:block;}
  .phone-tab-icon{font-size:12px;line-height:1;}
  .phone-content{padding:12px 14px;flex:1;display:flex;flex-direction:column;gap:8px;}
  .phone-section-label{font-size:7px;font-weight:700;color:#9ca3af;letter-spacing:.12em;text-transform:uppercase;}
  .phone-weather{background:linear-gradient(135deg,#0369a1 0%,#0c4a6e 100%);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:8px;}
  .phone-weather-temp{font-size:16px;font-weight:800;color:#fff;line-height:1;}
  .phone-weather-desc{font-size:8px;color:rgba(255,255,255,.6);margin-top:2px;}
  .phone-weather-city{font-size:8px;font-weight:600;color:rgba(255,255,255,.5);text-align:right;}
  .phone-card{background:#fff;border-radius:10px;border:1px solid #f0f0ef;padding:10px 12px;display:flex;align-items:center;gap:10px;}
  .phone-card-icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;}
  .phone-card-title{font-size:9px;font-weight:700;color:#111827;}
  .phone-card-sub{font-size:8px;color:#9ca3af;margin-top:1px;}
  .phone-card-badge{font-size:7px;font-weight:700;background:#f0fdf4;color:#16a34a;border-radius:100px;padding:2px 6px;}
  .stats-bar{background:var(--orange);padding-block:20px;}
  .stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:0;}
  .stat-item{text-align:center;padding:8px 16px;border-right:1px solid rgba(255,255,255,.25);}
  .stat-item:last-child{border-right:none;}
  .stat-num{font-family:var(--font-sora),sans-serif;font-size:28px;font-weight:800;color:#fff;line-height:1;}
  .stat-label{font-size:12px;color:rgba(255,255,255,.75);margin-top:4px;font-weight:500;}
  .problem{background:var(--warm-bg);padding-block:96px;}
  .section-header{text-align:center;margin-bottom:56px;}
  .section-header h2{font-family:var(--font-sora),sans-serif;font-size:clamp(28px,3.5vw,42px);font-weight:800;letter-spacing:-.03em;color:var(--text);margin:12px 0 16px;line-height:1.15;}
  .section-header p{font-size:17px;color:var(--muted);line-height:1.7;max-width:520px;margin-inline:auto;}
  .problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start;}
  .chaos-card{background:var(--surface);border-radius:20px;overflow:hidden;border:1px solid var(--border);box-shadow:0 4px 20px rgba(0,0,0,.05);}
  .chaos-header{background:#075e54;padding:14px 16px;display:flex;align-items:center;gap:10px;}
  .chaos-avatar{width:36px;height:36px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;flex-shrink:0;}
  .chaos-name{font-size:14px;font-weight:700;color:#fff;}
  .chaos-status{font-size:11px;color:rgba(255,255,255,.6);}
  .chaos-body{padding:14px;display:flex;flex-direction:column;gap:8px;background:#e5ddd5;}
  .msg{max-width:80%;padding:8px 10px;border-radius:10px;font-size:12px;line-height:1.5;}
  .msg-them{background:#fff;color:#111;border-bottom-left-radius:2px;align-self:flex-start;}
  .msg-me{background:#dcf8c6;color:#111;border-bottom-right-radius:2px;align-self:flex-end;}
  .msg-time{font-size:9px;color:rgba(0,0,0,.35);margin-top:3px;text-align:right;}
  .chaos-label{background:#fee2e2;padding:10px 14px;display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600;color:#dc2626;}
  .problems-list{display:flex;flex-direction:column;gap:14px;}
  .problem-item{background:var(--surface);border-radius:16px;padding:18px 20px;display:flex;align-items:flex-start;gap:14px;border:1px solid var(--border);}
  .problem-icon{font-size:24px;flex-shrink:0;margin-top:2px;}
  .problem-item h3{font-size:15px;font-weight:700;color:var(--text);margin:0 0 4px;}
  .problem-item p{font-size:13px;color:var(--muted);margin:0;line-height:1.6;}
  .features-section{background:var(--navy);padding-block:96px;}
  .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .feature-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:28px 24px;transition:background .2s;}
  .feature-card:hover{background:rgba(255,255,255,.08);}
  .feature-icon{width:52px;height:52px;border-radius:16px;background:rgba(249,115,22,.15);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:18px;}
  .feature-card h3{font-family:var(--font-sora),sans-serif;font-size:17px;font-weight:700;color:#fff;margin:0 0 8px;}
  .feature-card p{font-size:14px;color:var(--navy-muted);line-height:1.65;margin:0;}
  .hiw{background:var(--mid-bg);padding-block:96px;}
  .hiw-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;position:relative;}
  .hiw-steps::before{content:'';position:absolute;top:36px;left:calc(16.66% + 20px);right:calc(16.66% + 20px);height:1.5px;background:linear-gradient(90deg,var(--orange) 0%,rgba(249,115,22,.3) 100%);}
  .hiw-step{text-align:center;}
  .hiw-num{width:72px;height:72px;border-radius:50%;background:var(--navy);display:flex;align-items:center;justify-content:center;font-family:var(--font-sora),sans-serif;font-size:24px;font-weight:800;color:var(--orange);margin:0 auto 20px;border:3px solid var(--orange);}
  .hiw-step h3{font-family:var(--font-sora),sans-serif;font-size:18px;font-weight:700;color:var(--text);margin:0 0 8px;}
  .hiw-step p{font-size:14px;color:var(--muted);line-height:1.7;margin:0;}
  .testimonials{background:var(--warm-bg);padding-block:96px;}
  .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .testi-card{background:var(--surface);border-radius:20px;padding:28px 24px;border:1px solid var(--border);display:flex;flex-direction:column;gap:16px;}
  .testi-stars{color:#f97316;font-size:14px;}
  .testi-quote{font-size:15px;color:var(--text);line-height:1.7;flex:1;font-style:italic;}
  .testi-author{display:flex;align-items:center;gap:12px;}
  .testi-av{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;flex-shrink:0;}
  .testi-name{font-size:14px;font-weight:700;color:var(--text);}
  .testi-company{font-size:12px;color:var(--muted);}
  .pricing{background:var(--navy);padding-block:96px;}
  .pricing-cards{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:740px;margin-inline:auto;}
  .pricing-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:36px 32px;}
  .pricing-card.featured{background:var(--orange);border-color:transparent;}
  .pricing-plan{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--navy-muted);margin-bottom:12px;}
  .pricing-card.featured .pricing-plan{color:rgba(255,255,255,.7);}
  .pricing-price{font-family:var(--font-sora),sans-serif;font-size:42px;font-weight:800;color:#fff;line-height:1;}
  .pricing-price sub{font-size:16px;font-weight:500;vertical-align:baseline;}
  .pricing-period{font-size:13px;color:var(--navy-muted);margin:4px 0 24px;}
  .pricing-card.featured .pricing-period{color:rgba(255,255,255,.7);}
  .pricing-features{list-style:none;padding:0;margin:0 0 28px;display:flex;flex-direction:column;gap:10px;}
  .pricing-features li{font-size:14px;color:var(--navy-muted);display:flex;gap:10px;align-items:flex-start;}
  .pricing-features li::before{content:"✓";color:var(--orange);font-weight:700;flex-shrink:0;}
  .pricing-card.featured .pricing-features li{color:rgba(255,255,255,.85);}
  .pricing-card.featured .pricing-features li::before{color:#fff;}
  .pricing-btn{display:block;width:100%;padding:14px;border-radius:12px;font-family:var(--font-sora),sans-serif;font-weight:700;font-size:15px;text-align:center;background:rgba(255,255,255,.12);color:#fff;transition:background .15s;}
  .pricing-btn:hover{background:rgba(255,255,255,.2);}
  .pricing-card.featured .pricing-btn{background:#fff;color:var(--orange-dim);}
  .cta-section{background:linear-gradient(135deg,var(--navy) 0%,#0f2d5a 100%);padding-block:96px;position:relative;overflow:hidden;}
  .cta-section::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.15) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;}
  .cta-section h2{font-family:var(--font-sora),sans-serif;font-size:clamp(30px,4vw,48px);font-weight:800;color:#fff;margin:12px 0 16px;letter-spacing:-.03em;position:relative;}
  footer{background:#060d1a;padding-block:48px;border-top:1px solid rgba(255,255,255,.06);}
  .footer-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;}
  .footer-logo{font-family:var(--font-sora),sans-serif;font-weight:800;font-size:18px;color:#fff;letter-spacing:-.5px;}
  .footer-logo span{color:var(--orange);}
  .footer-links{display:flex;gap:24px;}
  .footer-links a{font-size:13px;color:rgba(255,255,255,.4);transition:color .15s;}
  .footer-links a:hover{color:rgba(255,255,255,.7);}
  .footer-copy{font-size:12px;color:rgba(255,255,255,.25);}
  @media (max-width:768px){.hero-inner,.problem-grid,.features-grid,.testi-grid,.hiw-steps,.pricing-cards{grid-template-columns:1fr} .phone-wrap,.chaos-card,.nav-links{display:none} .hiw-steps::before{display:none}}
`;
