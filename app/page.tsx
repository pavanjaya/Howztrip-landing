import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Howztrip — Howztrip?",
  description: "The app your operator gives you. Everything about your trip — itinerary, hotels, group chat, memories — in one place. Free for travellers.",
};

export default function TravellerPage() {
  return (
    <>
      <style>{styles}</style>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Fraunces:ital,wght@0,300;1,300;1,400&display=swap" />

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/"><Logo /></Link>
          <div className="nav-right">
            <Link href="#how-it-works" className="nav-link">How it works</Link>
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="/for-operators" className="nav-link nav-link-op">For Operators →</Link>
          </div>
          <div className="nav-stores">
            <a href="#" className="store-btn">🍎 App Store</a>
            <a href="#" className="store-btn store-btn-ghost">▶ Play Store</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="tag">Free for travellers</span>
            <h1>The moment you stop<br/>worrying — <em>the trip begins.</em></h1>
            <p className="hero-sub">Your operator has planned everything. Howztrip puts all of it in your pocket — itinerary, hotel, chat, memories — so you can be completely present for the trip you paid for.</p>
            <div className="dl-btns">
              <a href="#" className="dl-btn dl-btn-primary">
                <span className="dl-icon">🍎</span>
                <span className="dl-text"><span className="dl-sub">Download on the</span><span className="dl-store">App Store</span></span>
              </a>
              <a href="#" className="dl-btn dl-btn-ghost">
                <span className="dl-icon">▶</span>
                <span className="dl-text"><span className="dl-sub">Get it on</span><span className="dl-store">Google Play</span></span>
              </a>
            </div>
            <div className="hero-trust">
              <span className="trust-stars">★★★★★</span>
              <span className="trust-text"><strong>8,000+ travellers</strong> across India already using Howztrip</span>
            </div>
          </div>

          {/* Phone mockup pair */}
          <div className="phones-wrap">
            <div className="phone phone-back">
              <div className="phone-notch"/>
              <div className="phone-screen">
                <div className="ph-topbar">
                  <span style={{fontSize:10,color:"rgba(255,255,255,.5)"}}>← All Trips</span>
                  <span className="ph-opname">Desert Rose Travels</span>
                  <span style={{fontSize:10,color:"#ef4444",fontWeight:700}}>SOS</span>
                </div>
                <div className="ph-band ph-band-purple">
                  <div className="ph-dest">Rajasthan Royal Circuit</div>
                  <div className="ph-name">Golden Triangle<br/>&amp; Beyond</div>
                  <div className="ph-chips">
                    <span className="ph-chip">🗓 Oct 15–22</span>
                    <span className="ph-chip">☀️ Day 3</span>
                  </div>
                </div>
                <div className="ph-content">
                  <div className="ph-weather">
                    <span style={{fontSize:18}}>☀️</span>
                    <div><div className="ph-temp">34°C</div><div className="ph-wdesc">Jaipur · Clear sky</div></div>
                  </div>
                  <div className="ph-card">
                    <div className="ph-card-icon" style={{background:"#f3eeff"}}>🏰</div>
                    <div style={{flex:1}}><div className="ph-card-title">Amber Fort visit</div><div className="ph-card-sub">09:00 AM · 11 km away</div></div>
                    <span className="ph-badge-green">Now</span>
                  </div>
                  <div className="ph-card">
                    <div className="ph-card-icon" style={{background:"#f0fdf4"}}>🍽️</div>
                    <div><div className="ph-card-title">Lunch at Suvarna Mahal</div><div className="ph-card-sub">01:00 PM · Included</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone phone-front">
              <div className="phone-notch"/>
              <div className="phone-screen">
                <div className="ph-topbar">
                  <span style={{fontSize:10,color:"rgba(255,255,255,.5)"}}>← Back</span>
                  <span className="ph-opname">Trip Recap</span>
                  <span>✨</span>
                </div>
                <div className="ph-band ph-band-violet">
                  <div className="ph-dest">Memory Recap Card</div>
                  <div className="ph-name">Rajasthan<br/>Royal Circuit</div>
                  <div className="ph-chips">
                    <span className="ph-chip">📍 8 cities</span>
                    <span className="ph-chip">👥 8 travellers</span>
                  </div>
                </div>
                <div className="ph-content">
                  <div className="ph-section-lbl">Trip highlights</div>
                  <div className="ph-mosaic">
                    <div className="ph-photo" style={{background:"linear-gradient(135deg,#fde68a,#f59e0b)"}}>🏰</div>
                    <div className="ph-photo" style={{background:"linear-gradient(135deg,#bfdbfe,#3b82f6)"}}>🌅</div>
                    <div className="ph-photo" style={{background:"linear-gradient(135deg,#bbf7d0,#16a34a)"}}>🐫</div>
                    <div className="ph-photo" style={{background:"linear-gradient(135deg,#fecaca,#ef4444)"}}>🎨</div>
                  </div>
                  <div className="ph-stats">
                    <div className="ph-stat"><div className="ph-stat-n">7</div><div className="ph-stat-l">nights</div></div>
                    <div className="ph-stat"><div className="ph-stat-n">14</div><div className="ph-stat-l">places</div></div>
                    <div className="ph-stat"><div className="ph-stat-n">8</div><div className="ph-stat-l">people</div></div>
                  </div>
                  <div className="ph-share">↑ Share your recap card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMOTIONAL BRIDGE ── */}
      <section className="bridge">
        <div className="wrap bridge-inner">
          <div className="bridge-quote">
            <span className="bridge-label">Every trip ends with the same question</span>
            <div className="bridge-text">"Howztrip?"</div>
            <p className="bridge-sub">What you answer depends on how present you were. And how present you were depends on whether you felt looked after. That's what Howztrip is for.</p>
          </div>
          <div className="bridge-cards">
            <div className="bridge-card bridge-bad">
              <div className="bridge-card-label">Without Howztrip</div>
              <div className="bridge-card-q">"Don't ask."</div>
              <div className="bridge-card-body">Searching for the hotel in 300 WhatsApp messages at midnight. Missing the moment because you were too stressed to notice it.</div>
            </div>
            <div className="bridge-card bridge-good">
              <div className="bridge-card-label">With Howztrip</div>
              <div className="bridge-card-q">"I'll tell you everything."</div>
              <div className="bridge-card-body">Everything in one place before you needed it. You were completely present. The trip became a story worth telling.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="hiw" id="how-it-works">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">Getting started</span>
            <h2>Up and running before your flight</h2>
            <p>No account needed until your operator invites you. Just download and tap the link they send.</p>
          </div>
          <div className="hiw-steps">
            {[
              {n:"1",title:"Get your invite",body:"Your travel operator sends you a trip link — by WhatsApp, email, or SMS. One tap and your trip loads automatically."},
              {n:"2",title:"Download the app",body:"Install Howztrip free from the App Store or Play Store. Everything your operator set up is already there."},
              {n:"3",title:"Be present",body:"Itinerary, hotels, weather, chat, memories — all in one place. Stop searching. Start experiencing."},
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

      {/* ── FEATURES ── */}
      <section className="features" id="features">
        <div className="wrap">
          <div className="section-header">
            <span className="tag tag-dark">What's inside</span>
            <h2 style={{color:"#fff"}}>Everything you need, nothing you don't</h2>
            <p style={{color:"rgba(255,255,255,.55)"}}>Your operator sets it all up. You just open the app.</p>
          </div>
          <div className="feat-rows">

            {/* Feature 1 */}
            <div className="feat-row">
              <div className="feat-copy">
                <span className="tag tag-dark">Day-by-day plan</span>
                <h3>Your full itinerary, always up to date</h3>
                <p>Every activity, transfer, and meal — organised by day, with times and locations. When your operator changes something, you see it instantly. No more outdated PDFs.</p>
                <div className="pills">
                  <span className="pill pill-dark">📍 Places &amp; times</span>
                  <span className="pill pill-dark">🔔 Live updates</span>
                  <span className="pill pill-dark">🗺️ Distance from hotel</span>
                </div>
              </div>
              <div className="feat-card">
                <div className="feat-card-hd"><div className="feat-card-title">📅 Day 3 — Jaipur</div><div className="feat-card-sub">4 activities · 22 km total</div></div>
                <div className="feat-card-body">
                  {[
                    {time:"09:00",icon:"🏰",name:"Amber Fort",badge:"Next"},
                    {time:"01:00",icon:"🍽️",name:"Suvarna Mahal lunch",included:true},
                    {time:"03:00",icon:"🛍️",name:"Johari Bazaar"},
                    {time:"07:00",icon:"🌅",name:"Sunset at Nahargarh Fort"},
                  ].map((item,i) => (
                    <div key={i} className="day-item">
                      <span className="day-time">{item.time}</span>
                      <span style={{fontSize:15}}>{item.icon}</span>
                      <span className="day-name">{item.name}</span>
                      {item.badge && <span className="day-badge">{item.badge}</span>}
                      {item.included && <span className="day-inc">Included</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feat-row feat-row-rev">
              <div className="feat-copy">
                <span className="tag tag-dark">Your group</span>
                <h3>Know who's with you. Stay connected.</h3>
                <p>See every co-traveller, message the whole group in one tap, and track shared expenses without the awkward spreadsheet conversation.</p>
                <div className="pills">
                  <span className="pill pill-dark">👥 Members list</span>
                  <span className="pill pill-dark">💬 Group chat</span>
                  <span className="pill pill-dark">💸 Expense splits</span>
                </div>
              </div>
              <div className="feat-card">
                <div className="feat-card-hd"><div className="feat-card-title">👥 Your group</div><div className="feat-card-sub">8 travellers · Rajasthan Circuit</div></div>
                <div className="feat-card-body">
                  {[
                    {initials:"PJ",name:"Pavan Jangid",status:"You",color:"#7c3aed",confirmed:true},
                    {initials:"RS",name:"Riya Sharma",status:"Mumbai",color:"#0369a1",confirmed:true},
                    {initials:"AK",name:"Ankit Kumar",status:"Delhi",color:"#c2410c",confirmed:false},
                    {initials:"MG",name:"Meera Gupta",status:"Bangalore",color:"#0f766e",confirmed:true},
                  ].map((m,i) => (
                    <div key={i} className="gm">
                      <div className="gm-av" style={{background:m.color}}>{m.initials}</div>
                      <div style={{flex:1}}><div className="gm-name">{m.name}</div><div className="gm-status">{m.status}</div></div>
                      <span className={m.confirmed?"badge-green":"badge-amber"}>{m.confirmed?"Confirmed":"Pending"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feat-row">
              <div className="feat-copy">
                <span className="tag tag-dark">Local phrases</span>
                <h3>Speak like a local, wherever you go</h3>
                <p>Destination-aware phrase cards in the local language. Hindi, Malayalam, Konkani, Pahadi. Tap any card to flip to the native script — the shopkeeper's face will light up.</p>
                <div className="pills">
                  <span className="pill pill-dark">🗣️ Auto-detects destination</span>
                  <span className="pill pill-dark">🔄 Tap to flip script</span>
                  <span className="pill pill-dark">📍 10+ destinations</span>
                </div>
              </div>
              <div className="feat-card">
                <div className="feat-card-hd"><div className="feat-card-title">🗣️ Local Phrases</div><div className="feat-card-sub">Hindi · Rajasthani · 10 phrases</div></div>
                <div className="feat-card-body">
                  <div className="phrase"><div className="phrase-n">1</div><div><div className="phrase-t">Namaste</div><div className="phrase-m">Hello / Greetings</div></div><span style={{fontSize:11,color:"#9ca3af"}}>tap →</span></div>
                  <div className="phrase phrase-flip"><div className="phrase-n phrase-n-flip">2</div><div className="phrase-native">खम्मा घणी</div><span style={{fontSize:11,color:"#8A43FD"}}>🔄</span></div>
                  <div className="phrase"><div className="phrase-n">3</div><div><div className="phrase-t">Kitna hai?</div><div className="phrase-m">How much does it cost?</div></div><span style={{fontSize:11,color:"#9ca3af"}}>tap →</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MEMORY ── */}
      <section className="memory-section">
        <div className="wrap memory-inner">
          <div className="memory-copy">
            <span className="tag">After the trip</span>
            <h2>Every trip becomes a story worth sharing</h2>
            <p>A shareable recap card auto-generated from your trip — cities, nights, people, photos. Post it. Your friends ask which app it was. The story travels.</p>
            <div className="memory-pills">
              <span className="pill">📸 Trip highlights</span>
              <span className="pill">📊 Stats card</span>
              <span className="pill">↑ One-tap share</span>
            </div>
          </div>
          <div className="memory-card">
            <div className="mc-header">Memory Recap Card</div>
            <div className="mc-band">
              <div className="mc-eyebrow">Rajasthan Royal Circuit</div>
              <div className="mc-title">Golden Triangle<br/>&amp; Beyond</div>
              <div className="mc-chips">
                <span className="mc-chip">📍 8 cities</span>
                <span className="mc-chip">🗓 Oct 15–22</span>
                <span className="mc-chip">👥 8 travellers</span>
              </div>
            </div>
            <div className="mc-body">
              <div className="mc-mosaic">
                <div className="mc-photo" style={{background:"linear-gradient(135deg,#fde68a,#f59e0b)"}}>🏰</div>
                <div className="mc-photo" style={{background:"linear-gradient(135deg,#bfdbfe,#3b82f6)"}}>🌅</div>
                <div className="mc-photo" style={{background:"linear-gradient(135deg,#bbf7d0,#16a34a)"}}>🐫</div>
                <div className="mc-photo" style={{background:"linear-gradient(135deg,#fecaca,#ef4444)"}}>🎨</div>
              </div>
              <div className="mc-stats">
                <div className="mc-stat"><div className="mc-stat-n">7</div><div className="mc-stat-l">nights</div></div>
                <div className="mc-stat"><div className="mc-stat-n">14</div><div className="mc-stat-l">places</div></div>
                <div className="mc-stat"><div className="mc-stat-n">8</div><div className="mc-stat-l">people</div></div>
                <div className="mc-stat"><div className="mc-stat-n">★4.9</div><div className="mc-stat-l">rated</div></div>
              </div>
              <div className="mc-share">↑ Share your recap card</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">Traveller stories</span>
            <h2>What travellers say</h2>
          </div>
          <div className="testi-grid">
            {[
              {initials:"SR",color:"#7c3aed",name:"Sneha Reddy",trip:"Rajasthan Royal Circuit",quote:"First group trip where I actually knew what was happening every day. I stopped worrying about logistics and just… enjoyed it. That's never happened before."},
              {initials:"VN",color:"#0369a1",name:"Vikram Nair",trip:"Kerala Backwaters Tour",quote:"The local phrases card saved me in Kochi. I asked for water in Malayalam and the shopkeeper's face lit up. Those are the moments you remember."},
              {initials:"PD",color:"#c2410c",name:"Priya Desai",trip:"Himachal Mountains",quote:"The recap card is so shareable. Three friends immediately asked which app it was after I posted mine. Referred two of them already."},
            ].map(t => (
              <div key={t.initials} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">&quot;{t.quote}&quot;</p>
                <div className="testi-author">
                  <div className="testi-av" style={{background:t.color}}>{t.initials}</div>
                  <div><div className="testi-name">{t.name}</div><div className="testi-trip">{t.trip}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="wrap cta-inner">
          <div className="cta-copy">
            <p className="cta-question">"Howztrip?"</p>
            <h2>Make sure your answer is always a great story.</h2>
            <p className="cta-sub">Free for travellers. Your operator sets it all up — you just download and go.</p>
            <div className="dl-btns">
              <a href="#" className="dl-btn dl-btn-primary">
                <span className="dl-icon">🍎</span>
                <span className="dl-text"><span className="dl-sub">Download on the</span><span className="dl-store">App Store</span></span>
              </a>
              <a href="#" className="dl-btn dl-btn-ghost">
                <span className="dl-icon">▶</span>
                <span className="dl-text"><span className="dl-sub">Get it on</span><span className="dl-store">Google Play</span></span>
              </a>
            </div>
            <p className="cta-note">Free forever for travellers · iOS &amp; Android · No signup until invited</p>
          </div>
          <div className="cta-op-card">
            <div className="cta-op-eyebrow">Are you a travel operator?</div>
            <h3 className="cta-op-title">Give your travellers this experience</h3>
            <p className="cta-op-body">Create your first trip free. No technical setup. Your travellers get everything — branded to you.</p>
            <Link href="/for-operators" className="cta-op-btn">See Howztrip for Operators →</Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-logo"><img src="/logo-white.svg" alt="Howztrip" style={{height:"26px",width:"auto",display:"block"}} /></div>
          <div className="footer-links">
            <Link href="/for-operators">For Operators</Link>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-copy">© 2026 Howztrip · HueLabs · Free for travellers</div>
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
  }
  body { background:var(--bg); color:var(--text); }
  a { text-decoration:none; }

  /* NAV */
  .nav { position:sticky; top:0; z-index:100; background:rgba(255,255,255,.93); backdrop-filter:blur(16px); border-bottom:1px solid rgba(0,0,0,.06); }
  .nav-inner { max-width:1080px; margin-inline:auto; padding-inline:24px; display:flex; align-items:center; justify-content:space-between; padding-block:14px; gap:16px; }
  .nav-right { display:flex; align-items:center; gap:28px; }
  .nav-link { font-size:14px; font-weight:500; color:var(--muted); transition:color .15s; }
  .nav-link:hover { color:var(--text); }
  .nav-link-op { color:var(--brand)!important; font-weight:700!important; }
  .nav-stores { display:flex; gap:8px; }
  .store-btn { display:inline-flex; align-items:center; gap:6px; background:var(--navy); color:#fff; font-size:12px; font-weight:600; padding:8px 14px; border-radius:10px; transition:background .15s; }
  .store-btn:hover { background:var(--navy-mid); }
  .store-btn-ghost { background:transparent; border:1.5px solid var(--border); color:var(--text); }
  .store-btn-ghost:hover { border-color:var(--brand); color:var(--brand); }

  /* HERO */
  .hero { background:var(--navy); padding:80px 0 0; overflow:hidden; position:relative; }
  .hero::before { content:''; position:absolute; left:50%; top:0; transform:translateX(-50%); width:800px; height:600px; border-radius:50%; background:radial-gradient(circle,rgba(138,67,253,.18) 0%,transparent 65%); pointer-events:none; }
  .wrap { max-width:1080px; margin-inline:auto; padding-inline:24px; }
  .hero-inner { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; position:relative; z-index:1; }
  .hero-copy {}
  .tag { display:inline-flex; font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--brand); background:rgba(138,67,253,.12); border-radius:100px; padding:5px 12px; margin-bottom:16px; }
  .tag-dark { color:rgba(196,181,253,.9); background:rgba(138,67,253,.2); }
  .hero h1 { font-family:'Plus Jakarta Sans', sans-serif; font-weight:800; font-size:clamp(32px,4.5vw,54px); line-height:1.1; color:#fff; margin:0 0 20px; letter-spacing:-.02em; text-wrap:balance; }
  .hero h1 em { font-family:'Fraunces', Georgia, serif; font-style:italic; font-weight:300; color:#c4b5fd; }
  .hero-sub { font-size:17px; line-height:1.75; color:var(--navy-muted); margin:0 0 36px; max-width:480px; }
  .dl-btns { display:flex; gap:14px; flex-wrap:wrap; }
  .dl-btn { display:inline-flex; align-items:center; gap:12px; padding:13px 22px; border-radius:14px; font-weight:600; font-size:15px; transition:transform .1s,background .15s; }
  .dl-btn:hover { transform:translateY(-2px); }
  .dl-btn-primary { background:#fff; color:var(--navy); }
  .dl-btn-ghost { background:rgba(255,255,255,.1); color:#fff; border:1.5px solid rgba(255,255,255,.2); }
  .dl-btn-ghost:hover { background:rgba(255,255,255,.15); }
  .dl-icon { font-size:22px; line-height:1; }
  .dl-text { display:flex; flex-direction:column; gap:1px; }
  .dl-sub { font-size:10px; font-weight:500; opacity:.6; }
  .dl-store { font-family:'Plus Jakarta Sans', sans-serif; font-size:14px; font-weight:700; }
  .hero-trust { display:flex; align-items:center; gap:10px; margin-top:24px; }
  .trust-stars { color:#fbbf24; font-size:14px; }
  .trust-text { font-size:13px; color:var(--navy-muted); }
  .trust-text strong { color:#fff; }

  /* PHONES */
  .phones-wrap { display:flex; align-items:flex-end; justify-content:center; gap:0; }
  .phone { width:196px; background:#0a0a0a; border-radius:34px 34px 0 0; border:7px solid #1a1a1a; border-bottom:none; overflow:hidden; }
  .phone-front { box-shadow:-16px 16px 48px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.06); z-index:1; }
  .phone-back { opacity:.6; transform:translateX(36px) scale(.9); transform-origin:bottom center; }
  .phone-notch { width:68px; height:18px; background:#0a0a0a; border-radius:0 0 12px 12px; margin:0 auto; position:relative; z-index:2; }
  .phone-screen { background:#f9fafb; min-height:360px; display:flex; flex-direction:column; }
  .ph-topbar { padding:9px 12px; display:flex; align-items:center; justify-content:space-between; background:var(--navy); }
  .ph-opname { font-size:11px; font-weight:700; color:#fff; }
  .ph-band { padding:13px 12px 11px; }
  .ph-band-purple { background:linear-gradient(135deg,#6d28d9,#8A43FD); }
  .ph-band-violet { background:linear-gradient(135deg,#4c1d95,#7c3aed); }
  .ph-dest { font-size:8px; font-weight:700; color:rgba(255,255,255,.6); letter-spacing:.1em; text-transform:uppercase; }
  .ph-name { font-size:14px; font-weight:800; color:#fff; margin:2px 0 6px; line-height:1.2; }
  .ph-chips { display:flex; gap:6px; flex-wrap:wrap; }
  .ph-chip { background:rgba(0,0,0,.2); border-radius:100px; padding:2px 7px; font-size:7px; color:rgba(255,255,255,.8); font-weight:600; }
  .ph-content { padding:10px 12px; flex:1; display:flex; flex-direction:column; gap:7px; }
  .ph-section-lbl { font-size:7px; font-weight:700; color:#9ca3af; letter-spacing:.12em; text-transform:uppercase; }
  .ph-weather { background:linear-gradient(135deg,#0369a1,#0c4a6e); border-radius:9px; padding:9px 11px; display:flex; align-items:center; gap:8px; }
  .ph-temp { font-size:15px; font-weight:800; color:#fff; }
  .ph-wdesc { font-size:7px; color:rgba(255,255,255,.6); margin-top:1px; }
  .ph-card { background:#fff; border-radius:9px; border:1px solid #f0f0ef; padding:9px 10px; display:flex; align-items:center; gap:8px; }
  .ph-card-icon { width:26px; height:26px; border-radius:7px; display:flex; align-items:center; justify-content:center; font-size:12px; flex-shrink:0; }
  .ph-card-title { font-size:9px; font-weight:700; color:#111827; }
  .ph-card-sub { font-size:7px; color:#9ca3af; margin-top:1px; }
  .ph-badge-green { font-size:7px; font-weight:700; background:#f0fdf4; color:#16a34a; border-radius:100px; padding:2px 6px; margin-left:auto; }
  .ph-mosaic { display:grid; grid-template-columns:1fr 1fr; gap:4px; border-radius:9px; overflow:hidden; }
  .ph-photo { height:56px; display:flex; align-items:center; justify-content:center; font-size:20px; }
  .ph-stats { display:flex; gap:6px; }
  .ph-stat { flex:1; background:#fff; border-radius:7px; padding:6px; text-align:center; border:1px solid #f0f0ef; }
  .ph-stat-n { font-size:12px; font-weight:800; color:var(--navy); }
  .ph-stat-l { font-size:7px; color:#9ca3af; margin-top:1px; }
  .ph-share { background:var(--brand); border-radius:8px; padding:8px; text-align:center; font-size:8px; font-weight:800; color:#fff; }

  /* BRIDGE */
  .bridge { background:var(--bg); padding-block:80px; }
  .bridge-inner { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
  .bridge-label { font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--muted); margin-bottom:12px; display:block; }
  .bridge-text { font-family:'Fraunces', Georgia, serif; font-size:clamp(48px,6vw,80px); font-weight:300; font-style:italic; color:var(--brand); line-height:1; margin-bottom:20px; }
  .bridge-sub { font-size:16px; color:var(--muted); line-height:1.8; max-width:420px; }
  .bridge-cards { display:flex; flex-direction:column; gap:14px; }
  .bridge-card { border-radius:16px; padding:24px 22px; }
  .bridge-bad { background:#fef2f2; border:1.5px solid #fecaca; }
  .bridge-good { background:#f0fdf4; border:1.5px solid #bbf7d0; }
  .bridge-card-label { font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:8px; }
  .bridge-bad .bridge-card-label { color:#dc2626; }
  .bridge-good .bridge-card-label { color:#16a34a; }
  .bridge-card-q { font-family:'Fraunces', Georgia, serif; font-size:20px; font-weight:400; font-style:italic; margin-bottom:10px; }
  .bridge-bad .bridge-card-q { color:#991b1b; }
  .bridge-good .bridge-card-q { color:#15803d; }
  .bridge-card-body { font-size:14px; color:var(--muted); line-height:1.65; }

  /* HOW IT WORKS */
  .hiw { background:var(--bg); padding-block:96px; border-top:1px solid var(--border); }
  .section-header { text-align:center; margin-bottom:56px; }
  .section-header h2 { font-family:'Plus Jakarta Sans', sans-serif; font-size:clamp(28px,3.5vw,42px); font-weight:800; letter-spacing:-.02em; color:var(--text); margin:12px 0 16px; line-height:1.15; text-wrap:balance; }
  .section-header p { font-size:17px; color:var(--muted); line-height:1.7; max-width:500px; margin-inline:auto; }
  .hiw-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:40px; position:relative; }
  .hiw-steps::before { content:''; position:absolute; top:36px; left:calc(16.66% + 20px); right:calc(16.66% + 20px); height:1.5px; background:linear-gradient(90deg,var(--brand) 0%,rgba(138,67,253,.2) 100%); }
  .hiw-step { text-align:center; }
  .hiw-num { width:72px; height:72px; border-radius:50%; background:var(--brand-light); display:flex; align-items:center; justify-content:center; font-family:'Plus Jakarta Sans', sans-serif; font-size:24px; font-weight:800; color:var(--brand); margin:0 auto 20px; border:3px solid var(--brand); }
  .hiw-step h3 { font-family:'Plus Jakarta Sans', sans-serif; font-size:18px; font-weight:700; color:var(--text); margin:0 0 8px; }
  .hiw-step p { font-size:14px; color:var(--muted); line-height:1.7; margin:0; }

  /* FEATURES */
  .features { background:var(--navy); padding-block:96px; }
  .feat-rows { display:flex; flex-direction:column; gap:80px; }
  .feat-row { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
  .feat-row-rev { direction:rtl; }
  .feat-row-rev > * { direction:ltr; }
  .feat-copy h3 { font-family:'Plus Jakarta Sans', sans-serif; font-size:clamp(22px,2.5vw,30px); font-weight:800; color:#fff; margin:0 0 14px; line-height:1.2; }
  .feat-copy p { font-size:15px; color:var(--navy-muted); line-height:1.75; margin:0 0 24px; }
  .pills { display:flex; flex-wrap:wrap; gap:8px; }
  .pill { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12); border-radius:100px; padding:6px 14px; font-size:13px; font-weight:600; color:rgba(255,255,255,.7); }
  .pill-dark { background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.12); color:rgba(255,255,255,.75); }
  .feat-card { background:var(--surface); border-radius:20px; overflow:hidden; box-shadow:0 8px 40px rgba(0,0,0,.2); }
  .feat-card-hd { padding:18px 20px 14px; border-bottom:1px solid var(--border); }
  .feat-card-title { font-family:'Plus Jakarta Sans', sans-serif; font-size:14px; font-weight:700; color:var(--text); }
  .feat-card-sub { font-size:12px; color:var(--muted); margin-top:2px; }
  .feat-card-body { padding:14px 20px; display:flex; flex-direction:column; gap:10px; }
  .day-item { display:flex; align-items:center; gap:10px; background:var(--bg); border-radius:10px; padding:10px 12px; }
  .day-time { font-size:11px; font-weight:700; color:var(--muted); width:36px; flex-shrink:0; }
  .day-name { font-size:13px; font-weight:600; color:var(--text); flex:1; }
  .day-badge { font-size:10px; font-weight:700; color:var(--brand); background:var(--brand-light); border-radius:100px; padding:2px 8px; }
  .day-inc { font-size:10px; font-weight:600; color:#16a34a; }
  .gm { display:flex; align-items:center; gap:12px; padding:6px 0; }
  .gm-av { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:13px; color:#fff; flex-shrink:0; }
  .gm-name { font-size:13px; font-weight:700; color:var(--text); }
  .gm-status { font-size:11px; color:var(--muted); }
  .badge-green { font-size:10px; font-weight:600; background:#f0fdf4; color:#16a34a; border-radius:100px; padding:3px 9px; }
  .badge-amber { font-size:10px; font-weight:600; background:#fef3c7; color:#92400e; border-radius:100px; padding:3px 9px; }
  .phrase { display:flex; align-items:center; gap:12px; background:var(--bg); border-radius:12px; padding:11px 14px; }
  .phrase-flip { background:#f3eeff; border:1px solid var(--brand-border); }
  .phrase-n { width:26px; height:26px; border-radius:7px; background:var(--surface); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:var(--muted); flex-shrink:0; }
  .phrase-n-flip { background:var(--brand-light); border-color:var(--brand-border); }
  .phrase-t { font-size:14px; font-weight:700; color:var(--text); flex:1; }
  .phrase-m { font-size:11px; color:var(--muted); margin-top:2px; }
  .phrase-native { font-size:18px; font-weight:700; color:var(--brand-mid); flex:1; }

  /* MEMORY */
  .memory-section { background:var(--bg); padding-block:96px; }
  .memory-inner { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
  .memory-copy h2 { font-family:'Plus Jakarta Sans', sans-serif; font-size:clamp(26px,3vw,38px); font-weight:800; color:var(--text); margin:12px 0 16px; line-height:1.2; text-wrap:balance; }
  .memory-copy p { font-size:16px; color:var(--muted); line-height:1.75; margin-bottom:24px; }
  .memory-pills { display:flex; flex-wrap:wrap; gap:8px; }
  .memory-pills .pill { background:var(--surface); border:1.5px solid var(--border); color:var(--text); }
  .memory-card { background:var(--surface); border-radius:24px; overflow:hidden; box-shadow:0 8px 40px rgba(138,67,253,.1); border:1.5px solid var(--brand-border); max-width:340px; }
  .mc-header { padding:14px 18px; font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--brand); background:var(--brand-light); border-bottom:1px solid var(--brand-border); }
  .mc-band { background:linear-gradient(135deg,#4c1d95,#8A43FD); padding:20px 18px 16px; }
  .mc-eyebrow { font-size:9px; font-weight:700; color:rgba(255,255,255,.6); letter-spacing:.12em; text-transform:uppercase; }
  .mc-title { font-size:20px; font-weight:800; color:#fff; margin:4px 0 10px; line-height:1.2; }
  .mc-chips { display:flex; gap:8px; flex-wrap:wrap; }
  .mc-chip { background:rgba(0,0,0,.2); border-radius:100px; padding:3px 10px; font-size:9px; color:rgba(255,255,255,.8); font-weight:600; }
  .mc-body { padding:16px 18px; display:flex; flex-direction:column; gap:12px; }
  .mc-mosaic { display:grid; grid-template-columns:1fr 1fr; gap:6px; border-radius:12px; overflow:hidden; }
  .mc-photo { height:72px; display:flex; align-items:center; justify-content:center; font-size:26px; }
  .mc-stats { display:flex; gap:8px; }
  .mc-stat { flex:1; background:var(--bg); border-radius:10px; padding:10px 8px; text-align:center; }
  .mc-stat-n { font-size:14px; font-weight:800; color:var(--navy); }
  .mc-stat-l { font-size:9px; color:var(--muted); margin-top:2px; }
  .mc-share { background:var(--brand); border-radius:12px; padding:12px; text-align:center; font-size:13px; font-weight:700; color:#fff; }

  /* TESTIMONIALS */
  .testimonials { background:#f5f3ff; padding-block:96px; }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .testi-card { background:var(--surface); border-radius:20px; padding:28px 24px; border:1.5px solid var(--brand-border); display:flex; flex-direction:column; gap:16px; }
  .testi-stars { color:var(--brand); font-size:14px; }
  .testi-quote { font-size:15px; color:var(--text); line-height:1.75; flex:1; font-style:italic; }
  .testi-author { display:flex; align-items:center; gap:12px; }
  .testi-av { width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:15px; color:#fff; flex-shrink:0; }
  .testi-name { font-size:14px; font-weight:700; color:var(--text); }
  .testi-trip { font-size:12px; color:var(--muted); }

  /* CTA */
  .cta { background:var(--navy); padding-block:96px; position:relative; overflow:hidden; }
  .cta::before { content:''; position:absolute; width:700px; height:700px; border-radius:50%; background:radial-gradient(circle,rgba(138,67,253,.18) 0%,transparent 65%); top:50%; left:30%; transform:translate(-50%,-50%); pointer-events:none; }
  .cta-inner { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; position:relative; z-index:1; }
  .cta-question { font-family:'Fraunces', Georgia, serif; font-size:clamp(48px,6vw,80px); font-weight:300; font-style:italic; color:var(--brand); line-height:1; margin-bottom:12px; }
  .cta h2 { font-family:'Plus Jakarta Sans', sans-serif; font-size:clamp(24px,3vw,36px); font-weight:800; color:#fff; margin:0 0 16px; line-height:1.2; text-wrap:balance; }
  .cta-sub { font-size:16px; color:var(--navy-muted); margin-bottom:32px; line-height:1.7; }
  .cta-note { font-size:12px; color:rgba(255,255,255,.35); margin-top:16px; }
  .cta-op-card { background:rgba(255,255,255,.05); border:1.5px solid rgba(138,67,253,.4); border-radius:24px; padding:36px 32px; }
  .cta-op-eyebrow { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:rgba(196,181,253,.7); margin-bottom:10px; }
  .cta-op-title { font-family:'Plus Jakarta Sans', sans-serif; font-size:22px; font-weight:800; color:#fff; margin:0 0 12px; line-height:1.25; }
  .cta-op-body { font-size:15px; color:var(--navy-muted); line-height:1.7; margin-bottom:24px; }
  .cta-op-btn { display:inline-flex; align-items:center; background:var(--brand); color:#fff; font-weight:700; font-size:15px; padding:13px 24px; border-radius:12px; transition:background .15s; }
  .cta-op-btn:hover { background:var(--brand-mid); }

  /* FOOTER */
  footer { background:#060d1a; padding-block:48px; border-top:1px solid rgba(255,255,255,.06); }
  .footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
  .footer-logo { font-family:'Plus Jakarta Sans', sans-serif; font-weight:800; font-size:18px; color:#fff; }
  .footer-logo span { color:var(--brand); }
  .footer-links { display:flex; gap:24px; }
  .footer-links a { font-size:13px; color:rgba(255,255,255,.4); transition:color .15s; }
  .footer-links a:hover { color:rgba(255,255,255,.7); }
  .footer-copy { font-size:12px; color:rgba(255,255,255,.25); }

  /* RESPONSIVE */
  @media (max-width:768px) {
    .hero-inner,.bridge-inner,.feat-row,.feat-row-rev,.memory-inner,.testi-grid,.hiw-steps,.cta-inner { grid-template-columns:1fr; direction:ltr; }
    .phones-wrap,.nav-right,.nav-stores { display:none; }
    .hiw-steps::before { display:none; }
    .memory-card { max-width:100%; }
  }
`;
