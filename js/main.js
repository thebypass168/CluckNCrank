:root {
  --bg: #050506;
  --bg-2: #0e1013;
  --text: #f7f7f7;
  --muted: #9fa3ad;

  --orange: #ff6b1a;
  --orange-2: #ff9a1f;
  --red: #ff2d1f;
  --gold: #ffc84d;

  --glass: rgba(255,255,255,0.06);
  --border: rgba(255,255,255,0.14);

  --fire-shadow:
    0 0 20px rgba(255,107,26,0.8),
    0 0 50px rgba(255,61,46,0.5),
    0 0 90px rgba(255,0,0,0.25);
}

/* RESET */
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background:
    radial-gradient(circle at 20% 10%, #1a1c22, transparent 60%),
    linear-gradient(180deg, #0d0f13, #020203);
  color: var(--text);
}

/* CONTAINER */
.container {
  width: min(1200px, calc(100% - 24px));
  margin: auto;
}

/* HEADER */
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.nav-shell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 999px;
  position: relative;
  overflow: hidden;
}

/* AGGRESSIVE FIRE LINE */
.nav-shell::before {
  content: "";
  position: absolute;
  inset: -200%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,80,20,0.7),
    rgba(255,200,80,0.8),
    rgba(255,40,30,0.7),
    transparent
  );
  animation: navGlow 3s infinite linear;
  filter: blur(25px);
}

@keyframes navGlow {
  0% { transform: translateX(-40%); }
  100% { transform: translateX(40%); }
}

/* BRAND */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-badge {
  width: 60px;
  height: 60px;
}

.brand-badge img {
  width: 100%;
}

.brand-text strong {
  font-size: 14px;
  letter-spacing: 2px;
}

.brand-text span {
  font-size: 11px;
  color: var(--muted);
}

/* NAV */
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  transition: 0.2s;
}

.nav-links a:hover {
  background: rgba(255,80,20,0.15);
  box-shadow: var(--fire-shadow);
}

/* HERO */
.hero {
  padding: 60px 0;
}

.hero-shell {
  border-radius: 30px;
  padding: 28px;
  position: relative;
  overflow: hidden;
}

/* HEAT DISTORTION GLOW */
.hero-shell::after {
  content: "";
  position: absolute;
  bottom: -120px;
  left: -30%;
  right: -30%;
  height: 320px;
  background: radial-gradient(circle, rgba(255,100,20,0.5), transparent);
  filter: blur(35px);
  animation: firePulse 2.5s infinite alternate ease-in-out;
}

@keyframes firePulse {
  from { transform: translateY(0); opacity: 0.7; }
  to { transform: translateY(-15px); opacity: 1; }
}

/* GRID */
.hero-grid {
  display: grid;
  gap: 24px;
}

.hero-copy {
  padding: 20px;
}

/* HEADLINE */
h1 {
  font-size: 44px;
  line-height: 1;
  margin-bottom: 12px;
}

.hot {
  background: linear-gradient(#fff, orange, red);
  -webkit-background-clip: text;
  color: transparent;
}

/* BUTTONS */
.btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 999px;
  font-weight: bold;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, orange, red);
  box-shadow: var(--fire-shadow);
  transition: 0.2s;
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow:
    0 0 30px rgba(255,107,26,0.9),
    0 0 70px rgba(255,61,46,0.6);
}

.btn-secondary {
  border: 1px solid white;
}

/* GLASS */
.glass {
  background: var(--glass);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
}

/* METAL */
.diamond-plate {
  background: url("../assets/diamond-plate.png");
  background-size: cover;
  box-shadow: inset 0 0 40px rgba(0,0,0,0.8);
}

/* FIRE SYSTEM */
.fire-stage {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.flame {
  position: absolute;
  bottom: 0;
  width: 60px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, #ffb300, #ff4d00);
  animation: flameRise 1.8s infinite ease-in-out;
}

.flame:nth-child(odd) {
  animation-duration: 1.4s;
}

.flame:nth-child(even) {
  animation-duration: 2s;
}

@keyframes flameRise {
  0% {
    transform: scaleY(1) translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: scaleY(1.3) translateY(-25px);
    opacity: 1;
  }
}

/* EMBERS */
.ember {
  position: absolute;
  width: 6px;
  height: 6px;
  background: orange;
  border-radius: 50%;
  animation: emberFloat 3s infinite;
}

@keyframes emberFloat {
  0% { transform: translateY(0); opacity: 0.8; }
  100% { transform: translateY(-120px); opacity: 0; }
}

/* FOOTER */
footer {
  padding: 50px 0;
}

/* RESPONSIVE */
@media (min-width: 761px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
  }

  .nav-links {
    flex-direction: row;
  }
}
