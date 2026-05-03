const DONATION_URL = "https://www.donationalerts.com/r/henswill";

const packages = [
  {
    id: "vanilla",
    title: "Vanilla",
    price: "50 ₽",
    description: "Классический режим",
    icon: "🌿",
    color: "#3b82f6",
  },
  {
    id: "hardcore",
    title: "Hardcore",
    price: "50 ₽",
    description: "Для настоящих выживших",
    icon: "💀",
    color: "#8b5cf6",
  },
  {
    id: "unban",
    title: "Разбан",
    price: "150 ₽",
    description: "Вернуться на сервер",
    icon: "🔓",
    color: "#6366f1",
  },
];

const particles = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 3.57 + 2) % 100}%`,
  top: `${(i * 6.8 + 10) % 100}%`,
  size: `${(i % 3) + 1}px`,
  delay: `${(i * 0.6) % 7}s`,
  duration: `${((i * 1.4) % 12) + 8}s`,
  color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
  opacity: ((i % 4) + 1) * 0.12,
}));

const Index = () => {
  return (
    <div className="henswill-root">
      {/* Background effects */}
      <div className="blob blob-blue" />
      <div className="blob blob-purple" />
      <div className="grid-bg" />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="pixel-dot"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Hero */}
      <div className="hero">
        <div className="badge-wrap">
          <span className="online-badge">⚡ ОНЛАЙН</span>
        </div>

        <h1 className="hero-h1">
          <span className="mc-label">Minecraft</span>
          <span className="hw-label">Henswill</span>
        </h1>

        <p className="hero-sub">Сеть серверов — Henswill</p>
        <div className="hero-line" />
      </div>

      {/* Package cards */}
      <div className="cards-grid">
        {packages.map((pkg, i) => (
          <a
            key={pkg.id}
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pkg-card"
            style={{ "--c": pkg.color, animationDelay: `${0.15 + i * 0.12}s` } as React.CSSProperties}
          >
            <div className="pkg-glow" style={{ background: pkg.color }} />
            <span className="pkg-icon">{pkg.icon}</span>
            <h2 className="pkg-title">{pkg.title}</h2>
            <p className="pkg-desc">{pkg.description}</p>
            <div className="pkg-price">{pkg.price}</div>
            <div className="pkg-btn">
              <span>Получить</span>
              <span>→</span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="hw-footer">© 2025 Henswill · Minecraft Network</footer>
    </div>
  );
};

export default Index;
