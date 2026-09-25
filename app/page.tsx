import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Howztrip — Your Trip, Beautifully in Your Pocket",
  description: "One app for your full itinerary, hotels, flights, local phrases, group chat, and trip memories. Free for travellers.",
};

export default function TravellerPage() {
  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/"><Logo /></Link>
          <div className="nav-right">
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="#how-it-works" className="nav-link">How it works</Link>
            <Link href="/for-operators" className="nav-link nav-link-accent">For Operators →</Link>
            <div style={{display:"flex",gap:10}}>
              <a href="#" className="store-btn"><span style={{fontSize:16}}>🍎</span> App Store</a>
              <a href="#" className="store-btn"><span style={{fontSize:16}}>▶</span> Play Store</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <span className="tag">Free for travellers</span>
            <h1>Everything about your trip, <em>always with you.</em></h1>
            <p className="hero-sub">One app. Your full itinerary, hotel details, flights, local phrases, group chat, and trip memories — all in one beautiful place. No PDFs. No group chats. Just your trip.</p>
            <div className="dl-btns">
              <a href="#" className="dl-btn dl-btn-apple"><span className="dl-btn-icon">🍎</span><span className="dl-btn-text"><span className="dl-btn-sub">Download on the</span><span className="dl-btn-store">App Store</span></span></a>
              <a href="#" className="dl-btn dl-btn-google"><span className="dl-btn-icon">▶</span><span className="dl-btn-text"><span className="dl-btn-sub">Get it on</span><span className="dl-btn-store">Google Play</span></span></a>
            </div>
            <div className="hero-social">
              <span className="hero-stars">★★★★★</span>
              <p className="hero-social-text"><strong>8,000+ travellers</strong> across India already using Howztrip</p>
            </div>
          </div>
          <div className="phones-wrap">
            <div className="phone back">
              <div className="phone-notch"/>
              <div className="phone-screen">
                <div className="pn-header"><span style={{fontSize:10,color:"rgba(255,255,255,.5)"}}>← All Trips</span><span className="pn-title">Desert Rose Travels</span><span style={{fontSize:10,color:"#ef4444",fontWeight:700}}>SOS</span></div>
                <div className="pn-band"><div className="pn-dest">Rajasthan Royal Circuit</div><div className="pn-name">Golden Triangle<br/>& Beyond</div><div className="pn-chips"><span className="pn-chip">🗓 Oct 15–22</span><span className="pn-chip">☀️ Day 3</span></div></div>
                <div className="pn-content">
                  <div className="pn-weather"><span style={{fontSize:18}}>☀️</span><div><div className="pn-temp">34°C</div><div className="pn-desc">Jaipur · Clear sky</div></div></div>
                  <div className="pn-card"><div className="pn-icon" style={{background:"#fff7ed"}}>🏰</div><div style={{flex:1}}><div className="pn-card-title">Amber Fort visit</div><div className="pn-card-sub">09:00 AM · 11 km away</div></div><span className="pn-badge">Now</span></div>
                  <div className="pn-card"><div className="pn-icon" style={{background:"#f0fdf4"}}>🍽️</div><div><div className="pn-card-title">Lunch at Suvarna Mahal</div><div className="pn-card-sub">01:00 PM · Included</div></div></div>
                </div>
              </div>
            </div>
            <div className="phone front">
              <div className="phone-notch"/>
              <div className="phone-screen">
                <div className="ps-header"><span style={{fontSize:10,color:"rgba(255,255,255,.5)"}}>← Back</span><span className="ps-title">Trip Recap</span><span>✨</span></div>
                <div className="ps-band"><div className="ps-eyebrow">Memory Recap Card</div><div className="ps-name">Rajasthan<br/>Royal Circuit</div><div className="ps-chips"><span className="ps-chip">📍 8 cities</span><span className="ps-chip">🗓 Oct 15–22</span><span className="ps-chip">👥 8 travellers</span></div></div>
                <div className="ps-content">
                  <div className="ps-section">Trip highlights</div>
                  <div className="ps-mosaic">
                    <div className="ps-photo" style={{background:"linear-gradient(135deg,#fde68a,#f59e0b)"}}>🏰</div>
                    <div className="ps-photo" style={{background:"linear-gradient(135deg,#bfdbfe,#3b82f6)"}}>🌅</div>
                    <div className="ps-photo" style={{background:"linear-gradient(135deg,#bbf7d0,#16a34a)"}}>🐫</div>
                    <div className="ps-photo" style={{background:"linear-gradient(135deg,#fecaca,#ef4444)"}}>🎨</div>
                  </div>
                  <div className="ps-stats">
                    <div className="ps-stat"><div className="ps-stat-num">7</div><div className="ps-stat-lbl">nights</div></div>
                    <div className="ps-stat"><div className="ps-stat-num">14</div><div className="ps-stat-lbl">places</div></div>
                    <div className="ps-stat"><div className="ps-stat-num">8</div><div className="ps-stat-lbl">people</div></div>
                  </div>
                  <div className="ps-share">↑ Share your recap card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">What&apos;s inside</span>
            <h2>Everything you need, nothing you don&apos;t</h2>
            <p>Your operator sets up the trip. You just open the app — and everything is already there.</p>
          </div>
          <div className="feature-rows">
            <div className="feature-row">
              <div className="feature-copy">
                <span className="tag">Day-by-day plan</span>
                <h3>Your full itinerary, always up to date</h3>
                <p>Every activity, transfer, and meal — organised by day, with times and locations. When your operator changes something, you see it instantly.</p>
                <div className="pills"><span className="pill">📍 Places & times</span><span className="pill">🔔 Live updates</span><span className="pill">🗺️ Distances from hotel</span></div>
              </div>
              <div className="feat-card">
                <div className="feat-card-header"><div className="feat-card-title">📅 Day 3 — Jaipur</div><div className="feat-card-sub">4 activities · 22 km total</div></div>
                <div className="feat-card-body">
                  {[{time:"09:00",icon:"🏰",name:"Amber Fort",badge:"Next"},{time:"01:00",icon:"🍽️",name:"Suvarna Mahal lunch",included:true},{time:"03:00",icon:"🛍️",name:"Johari Bazaar"},{time:"07:00",icon:"🌅",name:"Sunset at Nahargarh Fort"}].map((item,i)=>(
                    <div key={i} className="day-item"><span className="day-time">{item.time}</span><span style={{fontSize:16}}>{item.icon}</span><span className="day-name">{item.name}</span>{item.badge&&<span className="day-badge">{item.badge}</span>}{item.included&&<span className="included">Included</span>}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="feature-row reverse">
              <div className="feature-copy">
                <span className="tag">Group coordination</span>
                <h3>Know who&apos;s in your group and stay connected</h3>
                <p>See every co-traveller, message the whole group in one tap, and track shared expenses without awkward spreadsheets.</p>
                <div className="pills"><span className="pill">👥 Members list</span><span className="pill">💬 Group chat</span><span className="pill">💸 Expense splits</span></div>
              </div>
              <div className="feat-card">
                <div className="feat-card-header"><div className="feat-card-title">👥 Your group</div><div className="feat-card-sub">8 travellers · Rajasthan Circuit</div></div>
                <div className="feat-card-body">
                  {[{initials:"PJ",name:"Pavan Jangid",status:"You",color:"#c2410c",confirmed:true},{initials:"RS",name:"Riya Sharma",status:"Mumbai",color:"#0369a1",confirmed:true},{initials:"AK",name:"Ankit Kumar",status:"Delhi",color:"#7c3aed",confirmed:false},{initials:"MG",name:"Meera Gupta",status:"Bangalore",color:"#0f766e",confirmed:true}].map((m,i)=>(
                    <div key={i} className="gm"><div className="gm-av" style={{background:m.color}}>{m.initials}</div><div><div className="gm-name">{m.name}</div><div className="gm-status">{m.status}</div></div><span className={m.confirmed?"badge-green":"badge-yellow"}>{m.confirmed?"Confirmed":"Pending"}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-copy">
                <span className="tag">Local phrases</span>
                <h3>Speak like a local, wherever you go</h3>
                <p>Destination-aware phrase cards in the local language — Hindi, Malayalam, Konkani, Pahadi. Tap any card to flip to the native script.</p>
                <div className="pills"><span className="pill">🗣️ Auto-detects language</span><span className="pill">🔄 Tap to flip script</span><span className="pill">📍 10+ destinations</span></div>
              </div>
              <div className="feat-card">
                <div className="feat-card-header"><div className="feat-card-title">🗣️ Local Phrases</div><div className="feat-card-sub">Hindi / Rajasthani · 10 phrases</div></div>
                <div className="feat-card-body">
                  <div className="phrase-demo"><div className="pd-num">1</div><div><div className="pd-translit">Namaste</div><div className="pd-meaning">Hello / Greetings</div></div><span style={{fontSize:11,color:"#9ca3af"}}>tap →</span></div>
                  <div className="phrase-demo flipped"><div className="pd-num" style={{background:"#fff7ed",borderColor:"#fed7aa"}}>2</div><div className="pd-native">खम्मा घणी</div><span style={{fontSize:11,color:"#f97316"}}>🔄</span></div>
                  <div className="phrase-demo"><div className="pd-num">3</div><div><div className="pd-translit">Kitna hai?</div><div className="pd-meaning">How much does it cost?</div></div><span style={{fontSize:11,color:"#9ca3af"}}>tap →</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hiw" id="how-it-works">
        <div className="wrap">
          <div className="section-header">
            <span className="tag">Getting started</span>
            <h2>Up and running before your flight</h2>
            <p>No setup. No account needed until you&apos;re invited. Just download and go.</p>
          </div>
          <div className="hiw-steps">
            {[{n:"1",title:"Get your invite",body:"Your travel operator sends you a trip link or code — by WhatsApp, email, or SMS. Takes 2 seconds."},{n:"2",title:"Download the app",body:"Install Howztrip from the App Store or Play Store and tap the link. Your trip loads automatically."},{n:"3",title:"Enjoy your trip",body:"Everything is in the app — itinerary, hotels, flights, weather, group chat, memories. Nothing to set up."}].map(s=>(
              <div key={s.n} className="hiw-step"><div className="hiw-num">{s.n}</div><h3>{s.title}</h3><p>{s.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="wrap">
          <div className="section-header"><span className="tag">Traveller stories</span><h2>What travellers say</h2></div>
          <div className="testi-grid">
            {[{initials:"SR",color:"#c2410c",name:"Sneha Reddy",trip:"Rajasthan Royal Circuit",quote:"I've been on 10+ group trips and this is the first time I actually knew what was happening every day. The itinerary and weather together in one place is genius."},{initials:"VN",color:"#0369a1",name:"Vikram Nair",trip:"Kerala Backwaters Tour",quote:"The local phrases card saved me in Kochi. I asked for water in Malayalam and the shopkeeper's face lit up. Little things make a huge difference."},{initials:"PD",color:"#7c3aed",name:"Priya Desai",trip:"Himachal Mountains",quote:"The trip recap card is so shareable. I posted mine on Instagram and three friends immediately asked which app it was. Already referred two of them."}].map(t=>(
              <div key={t.initials} className="testi-card"><div className="testi-stars">★★★★★</div><p className="testi-quote">&quot;{t.quote}&quot;</p><div className="testi-author"><div className="testi-av" style={{background:t.color}}>{t.initials}</div><div><div className="testi-name">{t.name}</div><div className="testi-trip">{t.trip}</div></div></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="dl-cta">
        <div className="wrap">
          <span className="tag">Free forever for travellers</span>
          <h2>Your next trip deserves better than a PDF</h2>
          <p>Download Howztrip free and ask your operator to set up your trip.</p>
          <div className="dl-cta-btns">
            <a href="#" className="dl-cta-btn dl-cta-btn-apple"><span style={{fontSize:26}}>🍎</span><span className="dl-btn-text"><span className="dl-btn-sub">Download on the</span><span className="dl-btn-store">App Store</span></span></a>
            <a href="#" className="dl-cta-btn dl-cta-btn-google"><span style={{fontSize:26}}>▶</span><span className="dl-btn-text"><span className="dl-btn-sub">Get it on</span><span className="dl-btn-store">Google Play</span></span></a>
          </div>
          <p className="dl-cta-note">Free for travellers · Works on iOS & Android · No signup until invited</p>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-logo">howz<span>trip</span></div>
          <div className="footer-links"><Link href="/for-operators">For Operators</Link><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></div>
          <div className="footer-copy">© 2026 Howztrip. Free for travellers.</div>
        </div>
      </footer>
    </>
  );
}

const styles = `
  :root { --navy:#0d1f3c;--navy-mid:#1a3460;--orange:#f97316;--orange-dim:#ea6000;--warm-bg:#fafaf8;--surface:#ffffff;--mid-bg:#f0ede8;--text:#111827;--muted:#6b7280;--border:#e5e7eb;--navy-muted:rgba(255,255,255,0.55); }
  body { background:var(--warm-bg);color:var(--text); }
  .nav { position:sticky;top:0;z-index:100;background:rgba(255,255,255,.92);backdrop-filter:blur(16px);border-bottom:1px solid rgba(0,0,0,.06); }
  .nav-inner { max-width:1080px;margin-inline:auto;padding-inline:24px;display:flex;align-items:center;justify-content:space-between;padding-block:16px; }
  .nav-right { display:flex;align-items:center;gap:20px; }
  .nav-link { font-size:13px;font-weight:600;color:var(--muted);transition:color .15s; }
  .nav-link:hover { color:var(--text); }
  .nav-link-accent { color:var(--orange);font-weight:700; }
  .store-btn { display:inline-flex;align-items:center;gap:7px;background:var(--navy);color:#fff;font-size:12px;font-weight:600;padding:8px 14px;border-radius:10px;transition:background .15s; }
  .store-btn:hover { background:var(--navy-mid); }
  .hero { background:linear-gradient(160deg,var(--navy) 0%,#1a3460 55%,#0f2850 100%);padding:80px 0 0;overflow:hidden;position:relative; }
  .hero::before { content:'';position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.12) 0%,transparent 65%);top:-200px;right:-200px;pointer-events:none; }
  .wrap { max-width:1080px;margin-inline:auto;padding-inline:24px; }
  .hero-inner { display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:1; }
  .tag { display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);background:rgba(249,115,22,.1);border-radius:100px;padding:5px 12px;margin-bottom:16px; }
  .hero h1 { font-family:var(--font-sora),sans-serif;font-weight:800;font-size:clamp(34px,5vw,58px);line-height:1.08;color:#fff;margin:0 0 20px;letter-spacing:-.03em; }
  .hero h1 em { font-style:normal;color:var(--orange); }
  .hero-sub { font-size:18px;line-height:1.7;color:var(--navy-muted);margin:0 0 36px;max-width:460px; }
  .dl-btns { display:flex;gap:14px;flex-wrap:wrap; }
  .dl-btn { display:inline-flex;align-items:center;gap:12px;padding:14px 22px;border-radius:16px;font-weight:600;font-size:15px;transition:transform .1s; }
  .dl-btn:hover { transform:translateY(-2px); }
  .dl-btn-apple { background:#fff;color:var(--navy); }
  .dl-btn-google { background:rgba(255,255,255,.12);color:#fff;border:1.5px solid rgba(255,255,255,.2); }
  .dl-btn-icon { font-size:24px;line-height:1; }
  .dl-btn-text { display:flex;flex-direction:column;gap:1px; }
  .dl-btn-sub { font-size:10px;font-weight:500;opacity:.6; }
  .dl-btn-store { font-family:var(--font-sora),sans-serif;font-size:14px;font-weight:700; }
  .hero-social { display:flex;align-items:center;gap:10px;margin-top:28px; }
  .hero-stars { color:#fbbf24;font-size:14px; }
  .hero-social-text { font-size:13px;color:var(--navy-muted); }
  .hero-social-text strong { color:#fff; }
  .phones-wrap { display:flex;align-items:flex-end;justify-content:center; }
  .phone { width:200px;background:#0a0a0a;border-radius:36px 36px 0 0;border:7px solid #1a1a1a;border-bottom:none;overflow:hidden;position:relative; }
  .phone.front { box-shadow:-20px 20px 60px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.06);z-index:1; }
  .phone.back { opacity:.65;transform:translateX(40px) scale(.9);transform-origin:bottom center; }
  .phone-notch { width:70px;height:18px;background:#0a0a0a;border-radius:0 0 12px 12px;margin:0 auto;position:relative;z-index:2; }
  .phone-screen { background:#fff;min-height:380px;display:flex;flex-direction:column; }
  .ps-header { background:#0d1f3c;padding:10px 12px;display:flex;align-items:center;justify-content:space-between; }
  .ps-title { font-size:12px;font-weight:800;color:#fff; }
  .ps-band { background:linear-gradient(135deg,#7c3aed,#a855f7);padding:14px 12px 12px; }
  .ps-eyebrow { font-size:8px;font-weight:700;color:rgba(255,255,255,.6);letter-spacing:.1em;text-transform:uppercase; }
  .ps-name { font-size:14px;font-weight:800;color:#fff;margin:2px 0 8px; }
  .ps-chips { display:flex;gap:6px;flex-wrap:wrap; }
  .ps-chip { background:rgba(0,0,0,.2);border-radius:100px;padding:2px 7px;font-size:7px;color:rgba(255,255,255,.8);font-weight:600; }
  .ps-content { padding:10px 12px;display:flex;flex-direction:column;gap:8px; }
  .ps-section { font-size:7px;font-weight:700;color:#9ca3af;letter-spacing:.1em;text-transform:uppercase; }
  .ps-mosaic { display:grid;grid-template-columns:1fr 1fr;gap:4px;border-radius:10px;overflow:hidden; }
  .ps-photo { height:60px;display:flex;align-items:center;justify-content:center;font-size:22px; }
  .ps-stats { display:flex;gap:6px; }
  .ps-stat { flex:1;background:#f9fafb;border-radius:8px;padding:7px 8px;text-align:center; }
  .ps-stat-num { font-size:13px;font-weight:800;color:#0d1f3c; }
  .ps-stat-lbl { font-size:7px;color:#9ca3af;margin-top:1px; }
  .ps-share { background:#f97316;border-radius:9px;padding:9px;text-align:center;font-size:9px;font-weight:800;color:#fff; }
  .pn-header { background:#0d1f3c;padding:10px 12px;display:flex;align-items:center;justify-content:space-between; }
  .pn-title { font-size:11px;font-weight:800;color:#fff; }
  .pn-band { background:linear-gradient(135deg,#c2410c,#f97316);padding:12px; }
  .pn-dest { font-size:8px;font-weight:700;color:rgba(255,255,255,.6);letter-spacing:.1em;text-transform:uppercase; }
  .pn-name { font-size:14px;font-weight:800;color:#fff;margin:2px 0 6px; }
  .pn-chips { display:flex;gap:5px; }
  .pn-chip { background:rgba(0,0,0,.2);border-radius:100px;padding:2px 7px;font-size:7px;color:rgba(255,255,255,.8);font-weight:600; }
  .pn-content { padding:10px 12px;display:flex;flex-direction:column;gap:7px; }
  .pn-weather { background:linear-gradient(135deg,#0369a1,#0c4a6e);border-radius:9px;padding:9px 10px;display:flex;align-items:center;gap:8px; }
  .pn-temp { font-size:15px;font-weight:800;color:#fff; }
  .pn-desc { font-size:7px;color:rgba(255,255,255,.6); }
  .pn-card { background:#fff;border-radius:9px;border:1px solid #f0f0ef;padding:9px 10px;display:flex;align-items:center;gap:8px; }
  .pn-icon { width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0; }
  .pn-card-title { font-size:9px;font-weight:700;color:#111827; }
  .pn-card-sub { font-size:7px;color:#9ca3af;margin-top:1px; }
  .pn-badge { font-size:7px;font-weight:700;background:#f0fdf4;color:#16a34a;border-radius:100px;padding:2px 6px; }
  .section { padding-block:96px;background:var(--warm-bg); }
  .section-header { text-align:center;margin-bottom:64px; }
  .section-header h2 { font-family:var(--font-sora),sans-serif;font-size:clamp(28px,3.5vw,42px);font-weight:800;letter-spacing:-.03em;color:var(--text);margin:12px 0 16px;line-height:1.15; }
  .section-header p { font-size:17px;color:var(--muted);line-height:1.7;max-width:520px;margin-inline:auto; }
  .feature-rows { display:flex;flex-direction:column;gap:80px; }
  .feature-row { display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center; }
  .feature-row.reverse { direction:rtl; }
  .feature-row.reverse>* { direction:ltr; }
  .feature-copy h3 { font-family:var(--font-sora),sans-serif;font-size:clamp(24px,2.5vw,32px);font-weight:800;letter-spacing:-.02em;color:var(--text);margin:0 0 14px;line-height:1.2; }
  .feature-copy p { font-size:16px;color:var(--muted);line-height:1.75;margin:0 0 24px; }
  .pills { display:flex;flex-wrap:wrap;gap:8px; }
  .pill { background:var(--surface);border:1px solid var(--border);border-radius:100px;padding:6px 14px;font-size:13px;font-weight:600;color:var(--text); }
  .feat-card { background:var(--surface);border-radius:24px;border:1px solid var(--border);overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.06); }
  .feat-card-header { padding:20px 20px 16px;border-bottom:1px solid var(--border); }
  .feat-card-title { font-family:var(--font-sora),sans-serif;font-size:14px;font-weight:700;color:var(--text); }
  .feat-card-sub { font-size:12px;color:var(--muted);margin-top:2px; }
  .feat-card-body { padding:16px 20px;display:flex;flex-direction:column;gap:10px; }
  .day-item { display:flex;align-items:center;gap:10px;background:var(--warm-bg);border-radius:10px;padding:10px 12px; }
  .day-time { font-size:11px;font-weight:700;color:var(--muted);width:36px;flex-shrink:0; }
  .day-name { font-size:13px;font-weight:700;color:var(--text);flex:1; }
  .day-badge { font-size:10px;font-weight:600;color:var(--orange);background:rgba(249,115,22,.1);border-radius:100px;padding:2px 8px; }
  .included { font-size:10px;font-weight:600;color:#16a34a; }
  .gm { display:flex;align-items:center;gap:12px; }
  .gm-av { width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#fff;flex-shrink:0; }
  .gm-name { font-size:13px;font-weight:700;color:var(--text); }
  .gm-status { font-size:11px;color:var(--muted); }
  .badge-green { font-size:10px;font-weight:600;background:#f0fdf4;color:#16a34a;border-radius:100px;padding:3px 9px; }
  .badge-yellow { font-size:10px;font-weight:600;background:#fef3c7;color:#92400e;border-radius:100px;padding:3px 9px; }
  .phrase-demo { display:flex;align-items:center;gap:12px;background:var(--warm-bg);border-radius:12px;padding:12px 14px; }
  .phrase-demo.flipped { background:#fff7ed;border:1px solid #fed7aa; }
  .pd-num { width:28px;height:28px;border-radius:8px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--muted);flex-shrink:0; }
  .pd-translit { font-size:14px;font-weight:700;color:var(--text); }
  .pd-meaning { font-size:11px;color:var(--muted);margin-top:2px; }
  .pd-native { font-size:18px;font-weight:700;color:#c2410c; }
  .hiw { background:var(--navy);padding-block:96px; }
  .hiw .section-header h2 { color:#fff; }
  .hiw .section-header p { color:var(--navy-muted); }
  .hiw .tag { background:rgba(249,115,22,.15); }
  .hiw-steps { display:grid;grid-template-columns:repeat(3,1fr);gap:40px;position:relative; }
  .hiw-steps::before { content:'';position:absolute;top:36px;left:calc(16.66% + 20px);right:calc(16.66% + 20px);height:1.5px;background:linear-gradient(90deg,var(--orange) 0%,rgba(249,115,22,.3) 100%); }
  .hiw-step { text-align:center; }
  .hiw-num { width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-family:var(--font-sora),sans-serif;font-size:24px;font-weight:800;color:var(--orange);margin:0 auto 20px;border:3px solid var(--orange); }
  .hiw-step h3 { font-family:var(--font-sora),sans-serif;font-size:18px;font-weight:700;color:#fff;margin:0 0 8px; }
  .hiw-step p { font-size:14px;color:var(--navy-muted);line-height:1.7;margin:0; }
  .testimonials { background:var(--mid-bg);padding-block:96px; }
  .testi-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px; }
  .testi-card { background:var(--surface);border-radius:20px;padding:28px 24px;border:1px solid var(--border);display:flex;flex-direction:column;gap:16px; }
  .testi-stars { color:#f97316;font-size:14px; }
  .testi-quote { font-size:15px;color:var(--text);line-height:1.7;flex:1;font-style:italic; }
  .testi-author { display:flex;align-items:center;gap:12px; }
  .testi-av { width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;flex-shrink:0; }
  .testi-name { font-size:14px;font-weight:700;color:var(--text); }
  .testi-trip { font-size:12px;color:var(--muted); }
  .dl-cta { background:linear-gradient(135deg,var(--navy) 0%,#0f2d5a 100%);padding-block:96px;text-align:center;position:relative;overflow:hidden; }
  .dl-cta::before { content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.15) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none; }
  .dl-cta h2 { font-family:var(--font-sora),sans-serif;font-size:clamp(30px,4vw,48px);font-weight:800;color:#fff;margin:12px 0 16px;letter-spacing:-.03em;position:relative; }
  .dl-cta p { font-size:17px;color:var(--navy-muted);margin:0 0 40px;position:relative; }
  .dl-cta-btns { display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative; }
  .dl-cta-btn { display:inline-flex;align-items:center;gap:12px;padding:16px 28px;border-radius:18px;font-weight:600;font-size:16px;transition:transform .1s; }
  .dl-cta-btn:hover { transform:translateY(-2px); }
  .dl-cta-btn-apple { background:#fff;color:var(--navy); }
  .dl-cta-btn-google { background:rgba(255,255,255,.12);color:#fff;border:1.5px solid rgba(255,255,255,.25); }
  .dl-cta-note { font-size:13px;color:var(--navy-muted);margin-top:18px;position:relative; }
  footer { background:#060d1a;padding-block:48px;border-top:1px solid rgba(255,255,255,.06); }
  .footer-inner { display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px; }
  .footer-logo { font-family:var(--font-sora),sans-serif;font-weight:800;font-size:18px;color:#fff;letter-spacing:-.5px; }
  .footer-logo span { color:var(--orange); }
  .footer-links { display:flex;gap:24px; }
  .footer-links a { font-size:13px;color:rgba(255,255,255,.4);transition:color .15s; }
  .footer-links a:hover { color:rgba(255,255,255,.7); }
  .footer-copy { font-size:12px;color:rgba(255,255,255,.25); }
  @media (max-width:768px) { .hero-inner,.feature-row,.feature-row.reverse,.testi-grid,.hiw-steps{grid-template-columns:1fr;direction:ltr} .phones-wrap{display:none} .hiw-steps::before{display:none} }
`;
